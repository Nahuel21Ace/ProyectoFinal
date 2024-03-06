import logger from '../config/logger.js'
import Persistence from '../persistence/cart.js'

class Service {

	async create(user) {
		try {
			const data = {
				author: {
					name: user.name,
					lastName: user.lastName,
					address: user.address,
					phoneNumber: user.phoneNumber,
					username: user.username,
				},
				productos: [],
				timestamp: Date.now(),
			}
			const add = await Persistence.create(data);
			return add
		} catch (error) {
			logger.error(`Error al guardar el carrito: ${error}`)
		}
	}

	async read(user) {
		try {
			const data = await Persistence.read(user)
			return data;
		} catch (error) {
			logger.error(`Error al leer el carrito: ${error}`)
		}
	}

	async postProduct(user, data) {
		try {
			const add = await Persistence.update(user, { $push: { productos: data } })
			return add
		} catch (error) {
			logger.error(`Error al guardar el producto: ${error}`)
		}
	}

	async deleteProduct(user, data) {
		try {
			const add = await Persistence.update(user, { $pull: { productos: data } })
			return add
		} catch (error) {
			logger.error(`Error al borrar el producto: ${error}`)
		}
	}

	async delete(user) {
		try {
			const data = await Persistence.delete(user)
			return data
		} catch (error) {
			logger.error(`Error al borrar el carrito: ${error}`)
		}
	}
}

export default new Service()