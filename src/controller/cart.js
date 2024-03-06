import ServiceCart from '../service/cart.js'
import ServiceProduct from '../service/product.js'

class Controller {

	async postProduct(req, res) {
		const user = req.user
		const correo = user.username
		const id = req.body.id
		const product = await ServiceProduct.readById(id)
		const cart = await ServiceCart.read(correo)
		if (cart === undefined) {
			await ServiceCart.create(user)
		}
		await ServiceCart.postProduct(correo, product)
		return res.redirect('/productos')
	}

	async deleteProduct(req, res) {
		const correo = req.user.username
		const id = req.body.id
		const product = await ServiceProduct.readById(id)
		await ServiceCart.deleteProduct(correo, product)
		return res.redirect('/carrito')
	}

	async read(req, res) {
		const correo = req.user.username
		const result = await ServiceCart.read(correo)
		const avatar = req.user.photo
		const saludo = `Bienvenido ${correo}`
		return res.render('UserLogin/carrito', { result, avatar, saludo })
	}

	async delete(req, res) {
		const correo = req.user.username
		await ServiceCart.delete(correo)
		return res.redirect('/productos')
	}
}

export default new Controller()