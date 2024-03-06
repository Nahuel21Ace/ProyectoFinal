import logger from '../config/logger.js'
import DTO from '../dtos/chat.js'
import Model from '../models/chatModel.js'

class Persistence {
	async create(data) {
		try {
			const addData = new Model(data);
			const add = await addData.save();
			return DTO(add);
		} catch (error) {
			logger.error(`Error al guardar el mensaje: ${error}`);
		}
	}

	async read() {
		try {
			const data = await Model.find();
			return DTO(data);
		} catch (error) {
			logger.error(`Error al leer los mensajes: ${error}`);
		}
	}
}

export default new Persistence();