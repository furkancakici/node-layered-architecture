import Express from 'express'
import CategoryController from '../controllers/category.controller.js'
import { categoryValidation } from '../utils/validations/category.validation.js'
import ValidateHandler from '../middleware/validate.middleware.js'

const router = Express.Router()
const categoryController = new CategoryController()

router.get('/', categoryController.getAll)
router.post('/', categoryValidation, ValidateHandler, categoryController.create)
router.get('/:id', categoryController.getById)

export default router
