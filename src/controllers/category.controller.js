import HttpStatusCodes from 'http-status-codes'
import CategoryService from '../service/category.service.js'
import errorHandler from '../middleware/error.middleware.js'

class CategoryController {
    constructor() {
        this.CategoryService = new CategoryService()
    }

    getAll = errorHandler(async (req, res) => {
        const categories = await this.CategoryService.getAll()
        res.status(HttpStatusCodes.OK).json(categories)
    })

    getById = errorHandler(async (req, res) => {
        const category = await this.CategoryService.getById(req.params.id)
        res.status(HttpStatusCodes.OK).json(category)
    })

    create = errorHandler(async (req, res) => {
        const newCategory = await this.CategoryService.create(req.body)
        res.status(HttpStatusCodes.CREATED).json(newCategory)
    })

    delete = errorHandler(async (req, res) => {
        const category = await this.CategoryService.deleteById(req.params.id)
        res.status(HttpStatusCodes.OK).json(category)
    })
}

export default CategoryController
