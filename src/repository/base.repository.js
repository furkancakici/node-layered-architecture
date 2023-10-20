class BaseRepository {
    constructor(_collection) {
        this.collection = _collection
    }

    getAll() {
        return this.collection.find().lean().exec()
    }

    getById(id) {
        return this.collection.findById(id)
    }

    create(model) {
        return this.collection.create(model)
    }

    update(id, model) {
        return this.collection.findByIdAndUpdate(id, model)
    }

    deleteById(id) {
        return this.collection.findByIdAndDelete(id)
    }

    search(query) {
        return this.collection.find({ $text: { $search: query } })
    }

    count() {
        return this.collection.countDocuments()
    }

    aggregate(pipeline) {
        return this.collection.aggregate(pipeline)
    }
}

export default BaseRepository
