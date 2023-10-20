import BaseController from './base.controller.js'
import CategoryService from '../service/category.service.js'
import CategoryRepository from '../repository/category.repository.js'

class CategoryController extends BaseController {
    constructor() {
        super(new CategoryService(new CategoryRepository()))
    }
}

export default CategoryController
