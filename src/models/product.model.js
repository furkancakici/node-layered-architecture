import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ProductSchema = new Schema(
    {
        _id: { type: ObjectId, auto: true },
        name: { type: String, require: true },
        unitPrice: { type: Number, require: true },
        categoryId: { type: ObjectId, ref: 'categories' }
    },
    { versionKey: false }
)

const ProductModel = mongoose.model('product', ProductSchema)

export default ProductModel
