import app from './express.js'
import mongoose from 'mongoose'

// Connection URL
mongoose.Promise = global.Promise;
//mongodb+srv://harshsaxena7:wewereonabreak@todo-list.3bcfg99.mongodb.net/test
//mongodb://localhost:27017/tasks
mongoose.connect('mongodb+srv://harshsaxena7:wewereonabreak@to-do-list.hd6zsip.mongodb.net/test');
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database`)
})
app.listen(8080, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port')
})