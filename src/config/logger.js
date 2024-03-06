import pino from 'pino'

function defaultLogger() {
	const logger = pino()
	logger.level = 'info'
	return logger
}

function prodLogger() {
	const logger = pino('error.log')
	logger.level = 'warn'
	return logger
}

let logger = defaultLogger()

if (process.env.NODE_ENV === 'prod') {
	logger = prodLogger()
}

export default logger