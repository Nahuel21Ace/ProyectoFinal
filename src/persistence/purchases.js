import logger from '../config/logger.js'
import DTO from '../dtos/purchases.js'
import Model from '../models/purchasesModel.js'

class Persistence {
	async create(data) {
		try {
			const addData = new Model(data)
			const add = await addData.save()
			return DTO(add)
		} catch (error) {
			logger.error(`Error al guardar la compra: ${error}`)
		}
	}
}

export default new Persistence()