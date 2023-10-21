import BaseController from './base.controller.js'
import ProductService from '../service/product.service.js'
import ProductRepository from '../repository/product.repository.js'

class ProductController extends BaseController {
    constructor() {
        super(new ProductService(new ProductRepository()))
    }
}

export default ProductController
