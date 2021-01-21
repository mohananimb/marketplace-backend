const express = require('express')
const cors = require('cors')

require('./db/mongoose')
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

const app = express()
app.use(cors(corsOptions))
const userRouter = require('./routes/User')

app.use(express.json())

app.use(userRouter)

const PORT = process.env.PORT || 6000

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`)
})
