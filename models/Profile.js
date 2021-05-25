const mongoose = require('mongoose')

const Profile = new mongoose.Schema({
    //Defining the actual attributes

    firstName: {
        type: String,
        default: '',
        trim: true
    },
    lastname: {
        type: String,
        defualt: '',
        trim: true
    },
    age: {
        type: Number,
        default: 0
    },
    team: {
        type: String,
        default: '',
        trim: true

    },
    position: {
        type: String,
        default: '',
        trim: true

    }
})

//const Profile = mongoose.model('Profile', profileSchema)

module.exports = mongoose.model('Profile', Profile);