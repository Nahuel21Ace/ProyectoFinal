import logger from '../config/logger.js'
import Persistence from '../persistence/chat.js'

class Service {

	async create(sms) {
		try {
			const SMS = await Persistence.read();
			if (SMS.length === 0) {
				const data = {
					author: {
						name: sms.author.name,
					},
					text: sms.text,
					fyh: new Date().toLocaleString(),
					id: 1,
				}
				const add = await Persistence.create(data)
				return add
			}
			const data = {
				author: {
					name: sms.author.name,
				},
				text: sms.text,
				fyh: new Date().toLocaleString(),
				id: 1,
			}
			const add = await Persistence.create(data)
			return add
		} catch (error) {
			logger.error(`Error al guardar el mensaje: ${error}`)
		}
	}

	async read() {
		try {
			const SMS = await Persistence.read()
			return SMS
		} catch (error) {
			logger.error(`Error al leer los mensajes: ${error}`)
		}
	}
}

export default new Service()