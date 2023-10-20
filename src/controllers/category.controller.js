import BaseController from './base.controller.js'
import CategoryService from '../service/category.service.js'

class CategoryController extends BaseController {
    constructor() {
        super(CategoryService)
    }
}

export default CategoryController
