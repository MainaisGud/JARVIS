const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//connection to mongodb

mongoose.connect('mongodb://127.0.0.1:27017/jarvis', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const User = require('./schema')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.route('/register').post((req, res) => {
  console.log(req.body)

  var check = false
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        res.status(400).send('User already exists')
        check = true
      }
      if (check === false) {
        const user = new User(req.body)
        User.create(user)
          .then(user => {
            res.status(200).send(user)
          })
          .catch(err => {
            res.status(400).send(err)
          })
      }
    })
    .catch(err => {
      res.status(400).send(err)
      check = true
    })
})

router.route('/users').post((req, res) => {
  console.log(req.body)
  User.findOne({ email: req.body.email, password: req.body.password })
    .then(user => {
      if (user) {
        res.status(200).send(user)
      } else {
        res.status(400).send('User not found')
      }
    })
    .catch(err => {
      res.send(err)
    })
})



module.exports = router
