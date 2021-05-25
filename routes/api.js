// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const Profile = require('../models/Profile')
mongoose.model('Profile');

/*API route. */

router.get('/profile', (req, res) => {
  //Find: Movie.find({}).then(data => console.log(data))
  Profile.find({}).then(data => console.log(data))

    .catch(err => {
      res.json({
        confirmation: 'Fail',
        data: err.message
      })
    })



})



module.exports = router
