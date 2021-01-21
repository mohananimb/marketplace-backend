const mongoose = require('mongoose')
const env = require('dotenv')
env.config()

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_NAME}:${process.env.MONGO_PASS}@cluster0.dd87z.mongodb.net/${process.env.QUBE_HEALTH_DB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)

const connection = mongoose.connection

connection.once('open', () => {
  console.log('DB Connected')
})
