class Controller {
	async signIn(req, res) {
		if (req.isAuthenticated()) {
			return res.redirect('/productos')
		}
		return res.render('User/ingresar')
	}

	async error(req, res) {
		return res.render('User/login-error')
	}
}

export default new Controller()