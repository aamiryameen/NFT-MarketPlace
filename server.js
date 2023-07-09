// server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const imageRoutes = require('./routes/imageRoutes');
const {signIn, signUp} = require('./controllers/authControllers')

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// app.get('/api/images', async (req, res) => {
//   try {
//     const category = req.params.category ? req.params.category.split(',') : [];
//     // const category = req.params.category.split(',');
//     const images = await Image.find({ category: { $in: category }, sub_category: { $in: category }});
//     res.json(images);
//   } catch (error) {
//     console.error('Error: ', error);
//     res.status(500).send('Error fetching images');
//     }
//   });

// app.get('/api/images', async (req, res) => {
//     try {
//       const category = req.params.category(',');
//       const images = await Image.find({ category: { $in: category } });
//       res.json(images);
//     } catch (error) {
//       console.error('Error: ', error);
//       res.status(500).send('Error fetching images');
//     }
//   });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

app.use('/api', imageRoutes);
app.use('/signUp', signUp)
app.use('/signIn', signIn)

// mongoose.connect('mongodb://localhost/imageDB', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB!');
// });





