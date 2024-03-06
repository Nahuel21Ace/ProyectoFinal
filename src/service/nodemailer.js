import logger from '../config/logger.js'
import { transporter } from '../config/nodemailer.js'

export const correo = async (to, subject, sms) => {
	const mail = {
		from: 'Servidor Node.js',
		to: to,
		subject: subject,
		html: sms,
	}

	try {
		const mensaje = await transporter.sendMail(mail)
		return mensaje;
	} catch (error) {
		logger.error(`error al enviar correo: ${error}`)
	}
};