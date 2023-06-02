import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()
// const port = 3000;
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//application routes
app.use('/api/v1/users/', usersRouter)
//Testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
