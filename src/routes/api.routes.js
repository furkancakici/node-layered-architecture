import Express from 'express'
import CategoryRoutes from './category.routes.js'
import ProductRoutes from './product.routes.js'

const router = Express.Router()

router.use('/category', CategoryRoutes)
router.use('/product', ProductRoutes)

export default router
