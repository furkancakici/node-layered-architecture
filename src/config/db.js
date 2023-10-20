import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const MONGODB_URL = process.env.MONGODB_URL

const connectDB = () => {
    try {
        mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    } catch (error) {
        console.error(error)
        process.exit(1)
    }

    const dbConnection = mongoose.connection

    dbConnection.once('open', () => {
        console.log('MongoDB connection ready!')
    })

    dbConnection.once('error', () => {
        console.error('MongoDB connection error!')
    })
}

export default connectDB
