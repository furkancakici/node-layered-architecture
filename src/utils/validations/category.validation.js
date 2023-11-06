import { check } from 'express-validator'

export const CategoryValidation = check('name').isString().withMessage('Name must be a string')
