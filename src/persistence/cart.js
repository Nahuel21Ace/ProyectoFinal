import logger from '../config/logger.js'
import DTO from '../dtos/cart.js'
import Model from '../models/cartModel.js'

class Persistence {
	async create(data) {
		try {
			const cart = new Model(data);
			const add = await cart.save();
			return DTO(add);
		} catch (error) {
			logger.error(`Error al guardar el carrito: ${error}`)
		}
	}

	async read(user) {
		try {
			const cart = await Model.findOne({ 'author.username': user })
			return DTO(cart)
		} catch (error) {
			logger.error(`Error al buscar el carrito: ${error}`)
		}
	}

	async update(user, data) {
		try {
			const cart = await Model.findOneAndUpdate({ 'author.username': user }, data)
			return DTO(cart)
		} catch (error) {
			logger.error(`Error al actualizar el carrito: ${error}`)
		}
	}

	async delete(user) {
		try {
			const cart = await Model.deleteOne({ 'author.username': user })
			return DTO(cart)
		} catch (error) {
			logger.error(`Error al eliminar el carrito: ${error}`)
		}
	}
}

export default new Persistence()