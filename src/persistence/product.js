import logger from '../config/logger.js'
import DTO from '../dtos/product.js'
import Model from '../models/productModel.js'

class Persistence {
	async create(data) {
		try {
			const addData = new Model(data)
			const add = await addData.save()
			return DTO(add)
		} catch (error) {
			logger.error(`Error al guardar el producto: ${error}`)
		}
	}

	async read() {
		try {
			const data = await Model.find()
			return DTO(data)
		} catch (error) {
			logger.error(`Error al leer los productos: ${error}`)
		}
	}

	async readByName(name) {
		try {
			const data = await Model.find({ name: name })
			return DTO(data)
		} catch (error) {
			logger.error(`Error al leer los productos: ${error}`)
		}
	}

	async readById(id) {
		try {
			const data = await Model.findById(id)
			return DTO(data)
		} catch (error) {
			logger.error(`Error al leer los productos: ${error}`)
		}
	}

	async update(id, data) {
		try {
			const update = await Model.findByIdAndUpdate(id, data)
			return DTO(update)
		} catch (error) {
			logger.error(`Error al actualizar el producto: ${error}`)
		}
	}

	async delete(id) {
		try {
			const deleteData = await Model.findByIdAndDelete(id)
			return DTO(deleteData)
		} catch (error) {
			logger.error(`Error al borrar el producto: ${error}`)
		}
	}
}

export default new Persistence()