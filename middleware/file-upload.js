const path = require('path');

const multer = require('multer');
const crypto = require('crypto');
const GridFsStorage = require('multer-gridfs-storage');

const MIME_TYPE_MAP = {
	'image/png': 'png',
	'image/jpeg': 'jpeg',
	'image/jpg': 'jpg',
};

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-1kjsg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const storage = new GridFsStorage({
	url: url,
	options: {useUnifiedTopology: true, useNewUrlParser: true},
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
	},
});

const fileUpload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 256,
	},
	fileFilter: (req, file, cb) => {
		const isValid = !!MIME_TYPE_MAP[file.mimetype];
		let error = isValid ? null : new Error('Invalid mime type!');
		cb(error, isValid);
	},
});

module.exports = fileUpload;
