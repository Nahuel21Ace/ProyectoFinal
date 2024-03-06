import Service from '../service/product.js'

class Controller {

	async create(req, res) {
		const product = req.body
		await Service.create(product)
		return res.redirect('/productos')
	}

	async read(req, res) {
		const user = req.user
		if (user === undefined) {
			const products = await Service.read()
			return res.render('User/productosUser', { products })
		}
		const saludo = `Bienvenido ${user.username}`
		const avatar = user.photo
		if (user.admin === true) {
			const products = await Service.read()
			return res.render('Admin/productosAdmin', { products, saludo, avatar })
		}
		const products = await Service.read();
		return res.render('UserLogin/productosUserLogin', { products, saludo, avatar })
	}

	async readByName(req, res) {
		const name = req.query.name
		const user = req.user
		if (user === undefined) {
			const products = await Service.readByName(name)
			return res.render('User/productosUser', { products })
		}
		const saludo = `Bienvenido ${user.username}`
		const avatar = user.photo
		if (user.admin === true) {
			const products = await Service.readByName(name)
			return res.render('Admin/productosAdmin', { products, saludo, avatar })
		}
		const products = await Service.readByName(name)
		return res.render('UserLogin/productosUserLogin', { products, saludo, avatar })
	}

	async update(req, res) {
		const product = req.body
		const id = req.params.id
		await Service.update(id, product)
		return res.redirect('/productos')
	}

	async delete(req, res) {
		const id = req.params.id
		await Service.delete(id)
		return res.redirect('/productos')
	}
}

export default new Controller()