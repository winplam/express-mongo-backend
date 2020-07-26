const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

module.exports = {
  mongoose,

  connect: () => {
    mongoose.Promise = Promise
    const mongoServer = new MongoMemoryServer()
    mongoServer.getConnectionString()
      .then(mongoUri => {
        const mongooseOpts = {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
        }

        mongoose.connect(mongoUri, mongooseOpts)

        mongoose.connection.on('error', e => {
          if (e.message.code === 'ETIMEDOUT') {
            console.log(e)
            mongoose.connect(mongoUri, mongooseOpts)
          }
          console.log(e)
        })

        mongoose.connection.once('open', () => {
          console.log(`MongoDB successfully connected to ${mongoUri}`)
        })
      })
  },

  disconnect: done => {
    mongoose.disconnect(done)
  }
}
