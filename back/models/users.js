const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    display_name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
},
{collection: 'users'}
)

module.exports = mongoose.model('UserSchema', UserSchema)