import Service from '../service/cart.js'

const logout = async (req, res) => {
	const mail = req.user.username
	const saludo = `Hasta luego ${mail}`
	await Service.delete(mail)
	req.logout(() => {
		res.render('saludo', { saludo })
	})
}

export default logout