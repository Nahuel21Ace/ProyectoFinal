import logger from '../config/logger.js'
import Persistence from '../persistence/user.js'
import bCrypt from 'bcrypt'

function createHash(password) {
	return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null)
}

class Service {

	async create(user, url) {
		try {
			const newUser = {
				name: user.name,
				lastName: user.lastName,
				address: user.address,
				age: user.age,
				phoneNumber: user.phoneNumber,
				photo: url.slice(6),
				username: user.username,
				password: createHash(user.password),
				admin: false,
			}
			const add = await Persistence.create(newUser)
			return add
		} catch (error) {
			logger.error(`Error al guardar usuario: ${error}`)
		}
	}

	async read(correo) {
		try {
			const user = await Persistence.read(correo)
			return user
		} catch (error) {
			logger.error(`Error al leer usuario: ${error}`)
		}
	}
}

export default new Service()