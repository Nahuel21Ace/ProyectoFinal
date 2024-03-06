import mongoose from "mongoose"

const collection = 'Cart'

const schema = new mongoose.Schema({
	author: {
		name: String,
		lastName: String,
		address: String,
		phoneNumber: Number,
		username: String,
	},
	productos: [],
	timestamp: String,
})

const Model = mongoose.model(collection, schema)

export default Model