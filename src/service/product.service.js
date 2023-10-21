import ProductRepository from '../repository/product.repository.js'

class CategoryService {
    constructor() {
        this.ProductRepository = new ProductRepository()
    }

    getAll = async () => {
        try {
            const categories = await this.ProductRepository.getAll()
            return categories
        } catch (error) {
            throw error
        }
    }

    getById = async id => {
        try {
            const category = await this.ProductRepository.getById(id)
            return category
        } catch (error) {
            throw error
        }
    }

    create = async category => {
        try {
            const newCategory = await this.ProductRepository.create(category)
            return newCategory
        } catch (error) {
            throw error
        }
    }

    deleteById = async id => {
        try {
            const category = await this.ProductRepository.deleteById(id)
            return category
        } catch (error) {
            throw error
        }
    }
}

export default CategoryService
