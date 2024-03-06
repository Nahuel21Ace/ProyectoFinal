class Controller {
	async signUp(req, res) {
		if (req.isAuthenticated()) {
			return res.redirect('/productos')
		}
		return res.render('User/registrarse')
	}

	async error(req, res) {
		return res.render('User/register-error')
	}
}

export default new Controller()