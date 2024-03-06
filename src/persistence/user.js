import logger from '../config/logger.js'
import DTO from '../dtos/user.js'
import Model from '../models/userModel.js'

class Persistence {
	async create(data) {
		try {
			const addData = new Model(data)
			const add = await addData.save()
			return DTO(add)
		} catch (error) {
			logger.error(`Error al guardar usuario: ${error}`)
		}
	}

	async read(user) {
		try {
			const data = await Model.findOne({ username: user })
			return DTO(data)
		} catch (error) {
			logger.error(`Error al buscar usuario: ${error}`)
		}
	}
}

export default new Persistence()