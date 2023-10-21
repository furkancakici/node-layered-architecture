import { body } from 'express-validator'

export const ProductValidation = body('name').isString().withMessage('Name must be a string')
