import { body } from 'express-validator'

export const categoryValidation = body('name').isEmail().withMessage('Email is required')
