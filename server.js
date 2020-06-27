const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//nowe linijki z Uploading file - paczki wymagane do uploadu plików do bazy MongoDB
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
//nowe linijki z Uploading file
require('dotenv').config();

const recipesRouter = require('./routes/recipes');
const usersRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());  
app.use(express.json());  // tu jest zwarty bodyParser

//nowe linijki z Uploading file - dzięki tej paczce wszystko co przyjdzie w quesry paramsach pod kluczem _method=... będzie nadpisane jako typ metody HTTP
app.use(methodOverride('_method')); // chcemy używać query stringa który stworzy nasz formularz na froncie w celu wykonania DELETE REQUEST
//nowe linijki z Uploading filemongoose.set('useUnifiedTopology', true)
const uri = process.env.ATLAS_URI;		// tutaj przechowywane sa nasze dane 

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
	.then(() => console.log('DB Connected!'))
	.catch(err => {
		console.log(err);
});

const connection = mongoose.connection;
//nowe linijki z Uploading file
let gfs;  // Inicjalizacja gridfs
//nowe linijki z Uploading file

connection.once('open', () => {
	//nowe linijki z Uploading file
	// Inicjalizacja stream'u
	gfs = Grid(connection.db, mongoose.mongo);
	gfs.collection('uploads');  // tutaj nazwa kolekcji danych | upload.chunks uploads.files w MongoDB
	//nowe linijki z Uploading file
	console.log("MongoDB database connection established succesfully!");
})

//nowe linijki z Uploading file
// Create storage engine
const storage = new GridFsStorage({
	url: uri,
	options: { useUnifiedTopology: true, useNewUrlParser: true },		// rozwiązuje problem z DeprecationWarning
	file: (req, file) => {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(16, (err, buf) => {
				if (err) {
					return reject(err);
				}
				const filename = buf.toString('hex') + path.extname(file.originalname);
				const fileInfo = {
					filename: filename,
					bucketName: 'uploads'  // bucketName powinien byc taki sam jak colectionName w connection
				};
				resolve(fileInfo);
			});
		});
	}
});

const upload = multer({ storage }); // upload to middleware który pozwoli nam wysłać plik przesłany w Form Data z forntu do bazy danych
//nowe linijki z Uploading file

app.get('/',  (req, res) => {
	gfs.files.find().toArray((err, files) => {
		// Check if files 
		if(!files || files.length === 0){
			return res.status(404).json({
				err: 'No files exist'
			})
		} else {
				files.map(file => {
					if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
						file.isImage = true;
					} else {
						file.isImage = false;
					}
				});
		}
	return res.json(files);
	// res.render('http://localhost:3000/', {files: files}); 
	// Files exist
	});		
});
//nowe linijki z Uploading file
// @route POST /upload 
// @desc Uploads file to DB
app.post('/upload', upload.single('file'), (req, res) => {  
	// res.redirect('http://localhost:3000/');
	res.json({file: req.file});
	// single bo uploadujemy 1 plik / z multerem możesz przesyłać więcej plików jako tablicę, ale tego tutaj nie robimy upload.single('TUTAJ NAZWA Z INPUTA')  <input type="file" name="file".../>
	// res.json({file: req.file});  wyświetli JSON z zawartościa danych o pliku wysyłanym
})

// @reoute GET /files
// @desc Display all files in JSON
app.get('/files', (req, res) => {
	gfs.files.find().toArray((err, files) => {
		// Check if files 
		if(!files || files.length === 0){
			return res.status(404).json({
				err: 'No files exist'
			})
		}
		// Files exist
		return res.json(files);
	});		
})

// @reoute GET /files/:filename
// @desc Display single files in JSON
//  gfs.files.findOne({filename: req.params.filesname})  filename z URL z frontu
app.get('/files/:filename', (req, res) => {
	gfs.files.findOne({filename: req.params.filename}, (err, file) => {
		// Check if files 
		if(!file){
			return res.status(404).json({
				err: 'No file exists'
			});
		}
		// Files exist
		return res.json(file);
	});
});

// @reoute GET /image/:filename
// @desc Display image
//  gfs.files.findOne({filename: req.params.filesname})  filename z URL z frontu
app.get('/image/:filename', (req, res) => {
	gfs.files.findOne({filename: req.params.filename}, (err, file) => {
		// Check if files 
		if(!file){
			return res.status(404).json({
				err: 'No file exists'
			});
		}
		// Check if image TUTAJ UMIEŚĆ WALIDATORY TYPU PLIKU PRZESYŁANEGO JPG JPEG PNG itp
		if(file.contentType === 'image/jpeg' || file.contentType === 'img/png'){
			// Read output to browser 
			const readstream = gfs.createReadStream(file.filename);  // file.filename czyli nazwa pliku z callbacku metody findOne odnoszacej się do bazy danych
			readstream.pipe(res);
		} else {
			res.status(404).json({
				err: 'Not an image'
			});
		}
	});
});

// @route DELETE /files/:id
// @desc Delete file
app.delete('/files/:id', (req, res) => {
	gfs.remove({_id: req.params.id, root: 'uploads'}, (err, gridStore) => {
		if(err){
			return res.status(404).json({err: err})
		}
		res.redirect('http://localhost:3000/');
	});  // nie ma tego w dokumentacji, ale musissz dodać root w postaci kolekcji do której uderzasz czyli w tym przypadku uploads  | 	gfs.collection('uploads'); 
});

//nowe linijki z Uploading file
app.use('/recipes', recipesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}.`);
})
