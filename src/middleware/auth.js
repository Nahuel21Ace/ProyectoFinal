export default function auth(req, res, next) {
	if (req.isAuthenticated()) {
		return next()
	} else {
		return res.redirect('/ingresar')
	}
}