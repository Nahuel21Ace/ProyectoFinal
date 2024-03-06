import mongoose from 'mongoose'

const collection = 'Products'

const schema = new mongoose.Schema({
	timestamp: String,
	name: String,
	description: String,
	code: String,
	price: Number,
	photo: String,
	stock: Number,
})

const Model = mongoose.model(collection, schema)

export default Model