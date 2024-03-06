import logger from '../config/logger.js'
import Persistence from '../persistence/product.js'

class Service {

	async create(product) {
		try {
			const data = {
				timestamp: Date.now(),
				name: product.name.toLowerCase().charAt(0).toUpperCase() + product.name.slice(1),
				description: product.description,
				code: product.code,
				price: product.price,
				photo: product.photo,
				stock: product.stock,
			};
			const add = await Persistence.create(data)
			return add
		} catch (error) {
			logger.error(`Error al guardar el producto: ${error}`)
		}
	}

	async read() {
		try {
			const read = await Persistence.read()
			return read
		} catch (error) {
			logger.error(`Error al leer los productos: ${error}`)
		}
	}

	async readByName(name) {
		try {
			const data = name
			const Name = data.toLowerCase().charAt(0).toUpperCase() + data.slice(1);
			const read = await Persistence.readByName(Name)
			return read
		} catch (error) {
			logger.error(`Error al leer los productos: ${error}`)
		}
	}

	async readById(id) {
		try {
			const read = await Persistence.readById(id);
			return read
		} catch (error) {
			logger.error(`Error al leer los productos: ${error}`)
		}
	}

	async update(id, product) {
		try {
			const data = {
				timestamp: Date.now(),
				name: product.name.toLowerCase().charAt(0).toUpperCase() + product.name.slice(1),
				description: product.description,
				code: product.code,
				price: product.price,
				photo: product.photo,
				stock: product.stock,
			}
			const update = await Persistence.update(id, data);
			return update
		} catch (error) {
			logger.error(`Error al actualizar el producto: ${error}`)
		}
	}

	async delete(id) {
		try {
			const deleteData = await Persistence.delete(id);
			return deleteData
		} catch (error) {
			logger.error(`Error al eliminar el producto: ${error}`)
		}
	}
}

export default new Service()

