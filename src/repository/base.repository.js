class BaseRepository {
    constructor(collection) {
        this._collection = collection
    }

    async getAll() {
        return await this._collection.find().lean().exec()
    }

    async getById(id) {
        return await this._collection.findById(id)
    }

    async create(model) {
        return await this._collection.create(model)
    }

    async update(id, model) {
        return await this._collection.findByIdAndUpdate(id, model)
    }

    async deleteById(id) {
        return await this._collection.findByIdAndDelete(id)
    }

    async search(query) {
        return await this._collection.find({ $text: { $search: query } })
    }

    async count() {
        return await this._collection.countDocuments()
    }

    async aggregate(pipeline) {
        return await this._collection.aggregate(pipeline)
    }
}

export default BaseRepository
