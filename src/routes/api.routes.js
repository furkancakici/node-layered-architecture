import Express from 'express'
import CategoryRoutes from './category.routes.js'

const router = Express.Router()

router.use('/category', CategoryRoutes)

export default router
