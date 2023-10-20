import Express from 'express'
import Dotenv from 'dotenv'
import ConnectDB from './config/db.js'
import ApiRoutes from './routes/api.routes.js'

Dotenv.config()

const app = Express()
const PORT = process.env.PORT || 3001
ConnectDB()

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

app.use('/api', ApiRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🔥`)
})
