import logger from '../config/logger.js'
import Persistence from '../persistence/purchases.js'

class Service {

	async create(data) {
		try {
			const newPurchase = {
				compra: data,
			}
			const result = await Persistence.create(newPurchase)
			return result
		} catch (error) {
			logger.error(`Error al guardar la compra: ${error}`)
		}
	}
}

export default new Service()