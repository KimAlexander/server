const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

const db = `mongodb+srv://kim:kim@cluster0-8sk5f.mongodb.net/test?retryWrites=true`;

mongoose.connect(db, err => {
  if (err) {
    console.log('error');
  } else {
    console.log('Connected');
  }
})

router.get('/', (req, res) => {
  res.send('ok');
})

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(error);
    } else {
      res.status(200).send(registeredUser)
    }
  });
})

router.post('/login', (req, res) => {
  let userData = req.body

  User.findOne({email: userData.email}, (error, user) => {
    if (error)  {
      console.log(error)
    } else {
      if (!user) {
        res.status(401).send('invalid email');
      } else if (user.password !== userData.password) {
        res.status(401).send('invalid password');
      } else {
        res.status(200).send(user);
      }
    }
  })
})

module.exports = router;
