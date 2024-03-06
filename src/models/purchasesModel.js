import mongoose from 'mongoose'

const collection = 'Compras'

const schema = new mongoose.Schema({
	compra: Object,
})

const Model = mongoose.model(collection, schema)

export default Model