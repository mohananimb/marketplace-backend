const mongoose = require('mongoose')
const { default: validator } = require('validator')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
  mobile: {
    type: String,
    required: true,
    unique: true
  },

  name: {
    type: String,
    require: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate (val) {
      if (!validator.isEmail(val)) {
        throw new Error('Invalid Email')
      }
    }
  }
})

userSchema.methods.generateToken = async function () {
  const user = this
  const token = await jwt.sign(
    {
      _id: user._id.toString()
    },
    process.env.JWT_STRING,
    { expiresIn: '24h' }
  )

  return token
}

const User = mongoose.model('User', userSchema)

module.exports = User
