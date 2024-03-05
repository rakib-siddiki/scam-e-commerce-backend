const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploadedFiles");
  },
  filename: function (req, file, cb) {
    const extention = file.mimetype.split('/')[1]    
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix+'.'+extention);
  },
});

const upload = multer({ storage: storage });

module.exports = upload