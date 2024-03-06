import ServiceCart from '../service/cart.js'
import { correo } from '../service/nodemailer.js'
import ServicePurchases from '../service/purchases.js'

class Controller {

	async create(req, res) {
		const mail = req.user.username
		const cart = await ServiceCart.read(mail)
		const purchases = await ServicePurchases.create(cart)
		if (purchases) {
			const asunto = `Compra exitosa ${purchases.id}`
			const mensaje = `<h1 style="color: blue;"> Hola ${mail}, tu compra ha sido exitosa, su id de confirmacion es ${purchases.id}. Compraste el/los Productos ${purchases.productos.map((p)=>{return ` ${p.name} $${p.price}`})}</h1>`
			await correo(mail, asunto, mensaje);
		}
		const confirmacion = `tu compra ha sido exitosa, su id de confirmacion es ${purchases.id} le llegara una copia a su correo`
		await ServiceCart.delete(mail)
		return res.render('UserLogin/compra', { confirmacion })
	}
}

export default new Controller()