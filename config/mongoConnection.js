import mongoose from 'mongoose'
import config from './../config/config'

// MongoDB Database Connection
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}
// mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, options).catch(error => handleError(error))
mongoose.connection.on('error', error => { throw new Error(`Unable to connect to database: ${config.mongoUri}`) })
// mongoose.connection.on('error', console.error.bind(console, 'mongo connection error'))
