
import path from 'path'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import db from './db'
// const router = require('./routes/apiRouter.js')


// defining the main router of the app

// We're in development or production mode
// create and run a real server.
const app = express()
// Use morgan to log requests to our express server to the console
app.use(morgan('dev'))
// Parse incoming request bodies as JSON
app.use(bodyParser.json())
// Parse incoming cookies
app.use(cookieParser())

// API router
// app.use('/api', router)

app.get('*', (req, res) => {
  db.one('SELECT $1 AS value', 123)
    .then(function (data) {
      console.log('DATA:', data.value)
      res.send(200, { message: 'hello!'})
    })
    .catch(function (error) {
      console.log('ERROR:', error)
    })
  // res.sendFile(path.join(__dirname, '../index.html'))
})

// Start the server!
const port = process.env.PORT || 5500
app.listen(port)
console.log(`ˁᵒ͡ˑ̉ᵒˀ Listening at port... ${port}`)
