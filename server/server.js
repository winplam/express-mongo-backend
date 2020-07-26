import config from './../config/config'
import '../config/mongoConnection'
import app from './app'

app.listen(config.port, function onStart (err) {
  if (err) {console.log(err)}
  console.info('Server started on http://localhost:%s', config.port)
})
