import HttpStatusCodes from 'http-status-codes'

const errorHandler = handler => {
    return async (req, res) => {
        try {
            await handler(req, res)
        } catch (error) {
            res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(error)
        }
    }
}

export default errorHandler
