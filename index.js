import express, { json } from  'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './Connection/db_connection.js';
import router from './Routes/routes.js';
const app = express()
const port = 3000
dotenv.config();

connectDB();
app.use(cors());
app.use(json());
app.use('/api' , router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
