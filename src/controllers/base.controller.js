import HttpStatusCodes from 'http-status-codes'
import ErrorHandler from '../middleware/error.middleware.js'

class BaseController {
    constructor(service) {
        this._service = service
    }

    // Common Handlers

    getAll = ErrorHandler(async (req, res) => {
        const entities = await this._service.getAll()
        if (!entities) this.notFound(res)
        this.ok(res, entities)
    })

    getById = ErrorHandler(async (req, res) => {
        const entity = await this._service.getById(req.params.id)
        if (!entity) this.notFound(res)
        this.ok(res, entity)
    })

    create = ErrorHandler(async (req, res) => {
        const newEntity = await this._service.create(req.body)
        if (!newEntity) this.conflict(res)
        this.created(res, newEntity)
    })

    deleteById = ErrorHandler(async (req, res) => {
        const entity = await this._service.deleteById(req.params.id)
        if (!entity) this.notFound(res)
        this.ok(res, entity)
    })

    update = ErrorHandler(async (req, res) => {
        const entity = await this._service.update(req.params.id, req.body)
        if (!entity) this.notFound(res)
        this.ok(res, entity)
    })

    search = ErrorHandler(async (req, res) => {
        const entities = await this._service.search(req.query.q)
        if (!entities) this.notFound(res)
        this.ok(res, entities)
    })

    count = ErrorHandler(async (req, res) => {
        const count = await this._service.count()
        if (!count) this.notFound(res)
        this.ok(res, count)
    })

    aggregate = ErrorHandler(async (req, res) => {
        const entities = await this._service.aggregate(req.body)
        if (!entities) this.notFound(res)
        this.ok(res, entities)
    })

    // Common Responses

    ok = (res, data) => {
        if (!!data) {
            res.status(HttpStatusCodes.OK).json(data)
        } else {
            res.status(HttpStatusCodes.OK).json({ message: 'Ok' })
        }
    }

    created = (res, entity) => {
        res.status(HttpStatusCodes.CREATED).json({ message: 'Created', data: entity })
    }

    unauthorized = (res, message) => {
        res.status(HttpStatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' })
    }

    forbidden = (res, message) => {
        res.status(HttpStatusCodes.FORBIDDEN).json({ message: 'Forbidden' })
    }

    notFound = (res, message) => {
        res.status(HttpStatusCodes.NOT_FOUND).json({ message: 'Not found' })
    }

    conflict = (res, message) => {
        res.status(HttpStatusCodes.CONFLICT).json({ message: 'Conflict' })
    }
}

export default BaseController
