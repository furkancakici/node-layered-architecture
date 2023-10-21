import Express from 'express'
import Productontroller from '../controllers/product.controller.js'
import { ProductValidation } from '../utils/validations/product.validation.js'
import ValidateHandler from '../middleware/validate.middleware.js'

const router = Express.Router()
const productController = new Productontroller()

router.get('/', productController.getAll)
router.post('/', ProductValidation, ValidateHandler, productController.create)
router.get('/:id', productController.getById)

export default router
