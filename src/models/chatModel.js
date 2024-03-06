import mongoose from 'mongoose'

const collection = 'Chat'

const schema = new mongoose.Schema({
	author: {
		name: String,
	},
	text: String,
	fyh: String,
})

const Model = mongoose.model(collection, schema)

export default Model