import { body } from 'express-validator'

export const CategoryValidation = body('name').isString().withMessage('Name must be a string')
