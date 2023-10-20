import Express from 'express'
import CategoryController from '../controllers/category.controller.js'

const router = Express.Router()
const categoryController = new CategoryController()

router.get('/', categoryController.getAll)
router.get('/:id', categoryController.getById)
router.post('/', categoryController.create)

export default router
