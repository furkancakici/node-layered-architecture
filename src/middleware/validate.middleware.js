import { validationResult } from 'express-validator'
import HttpStatusCodes from 'http-status-codes'

const ValidateHandler = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({ errors: errors.array() })
    }

    next()
}

export default ValidateHandler
