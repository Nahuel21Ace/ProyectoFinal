import mongoose from 'mongoose'
import dotenv from 'dotenv'
import logger from './logger.js'

const MONGO = process.env.MONGO

const connections = async () => {
	try {
		mongoose.set('strictQuery', false)
		mongoose.connect(MONGO, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		logger.info('MongoDb connected');
	} catch (error) {
		logger.error('Error connecting to database', error)
	}
}

export default connections