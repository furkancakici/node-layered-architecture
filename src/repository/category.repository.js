import BaseRepository from './base.repository.js'
import CategoryModel from '../models/category.model.js'

class CategoryRepository extends BaseRepository {
    constructor() {
        super(CategoryModel)
    }
}

export default CategoryRepository
