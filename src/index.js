const express = require('express')
require('./db/mongoose')

const app = express()
const userRouter = require('./routes/User')

app.use(express.json())

app.use(userRouter)

const PORT = process.env.PORT || 6000

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`)
})
