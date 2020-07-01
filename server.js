const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

require('dotenv').config();

const recipesRouter = require('./routes/recipes');
const usersRouter = require('./routes/users');
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;		
let gfs;

const app = express();
app.use(cors());  
app.use(express.json()); 

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
	.then(() => console.log('DB Connected!'))
	.catch(err => {
		console.log(err);
});

const connection = mongoose.connection;

connection.once('open', () => {
	gfs = Grid(connection.db, mongoose.mongo);
	gfs.collection('uploads'); 
	console.log("MongoDB database connection established succesfully!");
});

// Create storage engine
const storage = new GridFsStorage({
	url: uri,
	options: { useUnifiedTopology: true, useNewUrlParser: true },		
	file: (req, file) => {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(16, (err, buf) => {
				if (err) {
					return reject(err);
				}
				const filename = buf.toString('hex') + path.extname(file.originalname);
				const fileInfo = {
					filename: filename,
					bucketName: 'uploads',
				};
				resolve(fileInfo);
			});
		});
	}
});

const fileFilter = (req, file, callback) => {
	if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
		callback(null, true);
	} else {
		callback(null, false);
	}
};

const upload = multer({ 
	storage: storage, 
	limits: {
		fileSize: 1024 * 256
	},
	fileFilter: fileFilter
}); 

app.get('/',  (req, res) => {
	gfs.files.find().toArray((err, files) => {
		if(!files || files.length === 0){
			return res.status(404).json({
				err: 'No files exist'
			})
		}
	return res.json(files);
	});		
});

app.post('/upload', upload.single('file'), (req, res) => {  
	res.json({file: req.file});
})

app.get('/image/:filename', (req, res) => {
	gfs.files.findOne({filename: req.params.filename}, (err, file) => {
		// Check if files 
		if(!file){
			return res.status(404).json({
				err: 'No file exists'
			});
		}
		if(file.contentType === 'image/jpeg' || file.contentType === 'img/png'){
			// Read output to browser 
			const readstream = gfs.createReadStream(file.filename); 
			readstream.pipe(res);
		} else {
			res.status(404).json({
				err: 'Not an image'
			});
		}
	});
});

app.use('/recipes', recipesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}.`);
});
