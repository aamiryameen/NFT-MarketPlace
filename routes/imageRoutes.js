// routes/imageRoutes.js


// OLD CODE
const router = require('express').Router();
const multer = require('multer');
const Image = require('../model/Image');

const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), async (req, res) => {

  const newImage = new Image({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: req.file.path,
     
    
  });

  try {
    await newImage.save();
    res.status(201).send('Image uploaded and saved.');
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/images', async (req, res) => {
  try {
    const images = await Image.find(req.query);
    res.status(200).send(images);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
