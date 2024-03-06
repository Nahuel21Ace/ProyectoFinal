const home = async (req, res) => {
	if (req.user === undefined) {
		return res.render('User/inicioUser')
	}
	const user = req.user
	const avatar = user.photo
	const saludo = `Bienvenido ${user.username}`
	if (user.admin === true) {
		return res.render('Admin/inicioAdmin', { saludo, avatar })
	}
	return res.render('UserLogin/inicioUserLogin', { saludo, avatar })
};

export default home