import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
// Body-parser middleware to parse JSON and URL-encoded data
app.use(express.json()) // To parse JSON bodies
app.use(express.urlencoded({ extended: true })) // To parse form data if needed
const corsOptions = {
  origin: '*', // Allow requests from any origin; adjust as needed for security
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only GET and POST methods
}
app.use(cors(corsOptions))
app.listen(process.env.Port, () => {
  console.log(`Server is Running On ${process.env.Port} `)
})
