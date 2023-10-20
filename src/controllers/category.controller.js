import HttpStatusCodes from 'http-status-codes'
import CategoryService from '../service/category.service.js'
import ErrorHandler from '../middleware/error.middleware.js'
import ValidateHandler from '../middleware/validate.middleware.js'

class CategoryController {
    constructor() {
        this.CategoryService = new CategoryService()
    }

    getAll = ErrorHandler(async (req, res) => {
        const categories = await this.CategoryService.getAll()
        res.status(HttpStatusCodes.OK).json(categories)
    })

    getById = ErrorHandler(async (req, res) => {
        const category = await this.CategoryService.getById(req.params.id)
        res.status(HttpStatusCodes.OK).json(category)
    })

    create = ErrorHandler(async (req, res) => {
        ValidateHandler(req, res)
        const newCategory = await this.CategoryService.create(req.body)
        res.status(HttpStatusCodes.CREATED).json(newCategory)
    })

    deleteById = ErrorHandler(async (req, res) => {
        const category = await this.CategoryService.deleteById(req.params.id)
        res.status(HttpStatusCodes.OK).json(category)
    })
}

export default CategoryController
