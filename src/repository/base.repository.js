class BaseRepository {
    constructor(_collection) {
        this.collection = _collection
    }

    async getAll() {
        return await this.collection.find().lean().exec()
    }

    async getById(id) {
        return await this.collection.findById(id)
    }

    async create(model) {
        return await this.collection.create(model)
    }

    async update(id, model) {
        return await this.collection.findByIdAndUpdate(id, model)
    }

    async deleteById(id) {
        return await this.collection.findByIdAndDelete(id)
    }

    async search(query) {
        return await this.collection.find({ $text: { $search: query } })
    }

    async count() {
        return await this.collection.countDocuments()
    }

    async aggregate(pipeline) {
        return await this.collection.aggregate(pipeline)
    }
}

export default BaseRepository
