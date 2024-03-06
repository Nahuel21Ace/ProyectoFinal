const Chat = (req, res) => {
	const user = req.user
	if (user === undefined) {
		return res.redirect('/')
	}
	const avatar = req.user.photo
	const saludo = `Bienvenido ${user.username}`
	if (req.user.admin === true) {
		return res.render('Admin/mensajes', { saludo, avatar })
	}
	return res.render('UserLogin/mensajes', { saludo, avatar })
}

export default Chat