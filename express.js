import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import tasksRoutes from './tasks-router.js';
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', tasksRoutes)
export default app


//mongodb+srv://harshsaxena7:<password>@todo-list.3bcfg99.mongodb.net/test
//mongodb+srv://harshsaxena7:wewereonabreak@todo-list.3bcfg99.mongodb.net/test