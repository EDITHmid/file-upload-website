const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Storage setup for file uploads using multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files in the uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original file name
  }
});
const upload = multer({ storage: storage });

// Home page route
app.get('/', (req, res) => {
  res.render('index');
});

// Upload page for each subject
app.get('/upload/:subject', (req, res) => {
  res.render('upload', { subject: req.params.subject });
});

// Handle file uploads
app.post('/upload/:subject', upload.single('file'), (req, res) => {
  res.redirect(`/upload/${req.params.subject}`); // Redirect back to upload page after file upload
});

// Download page for each subject
app.get('/download/:subject', (req, res) => {
  const files = fs.readdirSync(path.join(__dirname, 'uploads')); // Read all files in the uploads folder
  res.render('download', { subject: req.params.subject, files: files });
});

// Route to download a specific file
app.get('/download/:subject/:filename', (req, res) => {
  const file = `${__dirname}/uploads/${req.params.filename}`;
  res.download(file);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
