import BaseRepository from './base.repository.js'
import Category from '../models/category.model.js'

class CategoryRepository extends BaseRepository {
    constructor() {
        super(Category)
    }
}

export default CategoryRepository
