import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import compress from 'compression'
import cors from 'cors'
import tasksRoutes from './tasks-router.js';

const app = express();


// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// enable CORS - Cross Origin Resource Sharing
app.use(cors())


app.use('/', tasksRoutes)



export default app


//mongodb+srv://harshsaxena7:<password>@todo-list.3bcfg99.mongodb.net/test
//mongodb+srv://harshsaxena7:wewereonabreak@todo-list.3bcfg99.mongodb.net/test