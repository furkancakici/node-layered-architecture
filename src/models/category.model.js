import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const CategorySchema = new Schema(
    {
        _id: { type: ObjectId, auto: true },
        name: { type: String, require: true }
    },
    { versionKey: false }
)

const CategoryModel = mongoose.model('categories', CategorySchema)

export default CategoryModel
