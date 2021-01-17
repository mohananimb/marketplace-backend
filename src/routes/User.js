const express = require('express')
const generate = require('../Helpers/generateOTP')
const verifyOTP = require('../Helpers/verifyOTP')
const router = new express.Router()
const User = require('../models/User')

router.get('/generateOTP', async (req, res) => {
  try {
    const data = await generate(req.query.mobile)
    return res.status(200).send(data)
  } catch (error) {
    return res.status(500).send(error)
  }
})

router.get('/verify', async (req, res) => {
  try {
    const verification = await verifyOTP(req.query.mobile, req.query.code)
    if (verification.valid) {
      const user = await User.findOne({
        mobile: `+${req.query.mobile}`
      })

      if (user) {
        const token = await user.generateToken()
        const { _id, name, email, mobile } = user
        return res.send({
          message: 'Logged in successfully.',
          user: { _id, name, email, mobile, token }
        })
      }

      return res.send({
        message: 'User is not registered.',
        verification
      })
    } else {
      return res.status(400).send({
        message: 'Invalid OTP.'
      })
    }
  } catch (error) {
    res.status(500).send(error)
  }
})

// router.post('/sign-up', async (req, res) => {
//   try {
//     const isEmailExist = await User.findOne({
//       email: req.body.email
//     })
//     if (isEmailExist) {
//       return res.status(409).send({
//         message: 'This email is already registered.'
//       })
//     }

//     const { email, mobile, name } = req.body

//     const user = await new User({
//       email,
//       name,
//       mobile: `+${mobile}`
//     })
//     await user.save()
//     return res.status(201).send({
//       message: 'User created successfully.',
//       user
//     })
//   } catch (error) {
//     return res.status(400).send(error)
//   }
// })

// router.get('/generate-login-OTP', async (req, res) => {
//   const user = await User.findOne({
//     mobile: `+${req.query.mobile}`
//   })

//   if (!user) {
//     return res.status(404).send({
//       message: 'This number is not registered.'
//     })
//   }

//   const data = await generate(req.query.mobile)
//   return res.status(200).send(data)
// })

// router.post('/login', async (req, res) => {
//   try {
//     const user = await User.findOne({
//       email: req.body.email,
//       mobile: `+${req.query.mobile}`
//     })

//     if (!user) {
//       return res.status(404).send({
//         message: 'This user is not registered.'
//       })
//     }

//     const token = await user.generateToken()
//     const { _id, name, email, mobile } = user

//     return res.send({
//       message: 'Logged in successfully.',
//       user: { _id, name, email, mobile, token }
//     })
//   } catch (error) {
//     res.state(400).send(error)
//   }
// })

module.exports = router
