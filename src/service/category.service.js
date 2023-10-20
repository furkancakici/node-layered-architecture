import CategoryRepository from '../repository/category.repository.js'

class CategoryService {
    constructor() {
        this.CategoryRepository = new CategoryRepository()
    }

    getAll = async () => {
        try {
            const categories = await this.CategoryRepository.getAll()
            return categories
        } catch (error) {
            throw error
        }
    }

    getById = async id => {
        try {
            const category = await this.CategoryRepository.getById(id)
            return category
        } catch (error) {
            throw error
        }
    }

    create = async category => {
        try {
            const newCategory = await this.CategoryRepository.create(category)
            return newCategory
        } catch (error) {
            throw error
        }
    }

    deleteById = async id => {
        try {
            const category = await this.CategoryRepository.deleteById(id)
            return category
        } catch (error) {
            throw error
        }
    }
}

export default CategoryService
