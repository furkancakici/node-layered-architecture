import HttpStatusCodes from 'http-status-codes'
import errorHandler from '../middleware/error.middleware.js'

class BaseController {
    constructor(service) {
        this.service = service
    }

    getAll = errorHandler(async (req, res) => {
        const entities = await this.service.getAll()
        res.status(HttpStatusCodes.OK).json(entities)
    })

    getById = async (req, res) => {
        const entity = await this.service.getById(req.params.id)
        res.status(HttpStatusCodes.OK).json(entity)
    }

    create = async (req, res) => {
        const newEntity = await this.service.create(req.body)
        res.status(HttpStatusCodes.CREATED).json(newEntity)
    }

    delete = async (req, res) => {
        const entity = await this.service.deleteById(req.params.id)
        res.status(HttpStatusCodes.OK).json(entity)
    }

    update = async (req, res) => {
        const entity = await this.service.update(req.params.id, req.body)
        res.status(HttpStatusCodes.OK).json(entity)
    }

    search = async (req, res) => {
        const entities = await this.service.search(req.query.q)
        res.status(HttpStatusCodes.OK).json(entities)
    }

    count = async (req, res) => {
        const count = await this.service.count()
        res.status(HttpStatusCodes.OK).json(count)
    }

    aggregate = async (req, res) => {
        const entities = await this.service.aggregate(req.body)
        res.status(HttpStatusCodes.OK).json(entities)
    }
}

export default BaseController
