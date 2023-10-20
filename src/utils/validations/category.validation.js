import { body } from 'express-validator'

export const categoryValidation = body('name').isString().withMessage('Name must be a string')
