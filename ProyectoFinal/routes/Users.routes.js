import express from 'express';
import User from '../models/User.js'
import UserSchema from '../schemas/UserShema.js';


const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});


router.post('/register', async (req, res) => {
  try {
    const userData = UserSchema.parse(req.body);
    const newUser = await User.create(userData);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.errors });
  }
});

export default router;
