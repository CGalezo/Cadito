const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const usersRoutes = require('./routes/usersRoutes')
const postsRoutes = require('./routes/postsRoutes')
const cartRoutes = require('./routes/cartRoutes')
const historyRoutes = require('./routes/historyRoutes')
const reviewsRoutes = require('./routes/reviewsRoutes')

const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, ()=>console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/users', usersRoutes)
app.use('/posts', postsRoutes)
app.use('/cart', cartRoutes)
app.use('/history', historyRoutes)
app.use('/reviews', reviewsRoutes)

app.listen(4000, () => console.log("server is up and running"))