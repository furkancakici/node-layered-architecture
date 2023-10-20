import { validationResult } from 'express-validator'
import HttpStatusCodes from 'http-status-codes'

const ValidateHandler = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ errors: errors.array() })
    }

    next()
}

export default ValidateHandler
