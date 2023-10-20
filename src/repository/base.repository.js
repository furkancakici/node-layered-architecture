class BaseRepository {
    constructor(_collection) {
        this.collection = _collection
    }

    findAll() {
        return this.collection.find().lean().exec()
    }

    findById(id) {
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
}

export default BaseRepository
