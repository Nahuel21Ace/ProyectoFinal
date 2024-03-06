import { Router } from 'express'
import passport from 'passport'
import multer from 'multer'
import cart from '../controller/cart.js'
import Chat from '../controller/chat.js'
import logout from '../controller/logout.js'
import product from '../controller/product.js'
import purchases from '../controller/purchases.js'
import signIn from '../controller/signIn.js'
import { login } from '../controller/signInPassport.js'
import signUp from '../controller/signUp.js'
import { register } from '../controller/signUpPassport.js'
import auth from '../middleware/auth.js'


passport.use('register', register)
passport.use('login', login)

const upload = multer({ dest: './public/img/' })

const productos = Router()
const ingresar = Router()
const registrarse = Router()
const salir = Router()
const carrito = Router()
const compras = Router()
const chat = Router()

productos.get('/', product.read)
productos.get('/:busqueda', product.readByName)
productos.post('/', auth, product.create)
productos.put('/:id', auth, product.update)
productos.delete('/:id', auth, product.delete)

ingresar.get('/', signIn.signIn)
ingresar.post('/', passport.authenticate('login', { failureRedirect: '/ingresar/errorIngresar', successRedirect: '/' }))
ingresar.get('/errorIngresar', signIn.error)

registrarse.get('/', signUp.signUp)
registrarse.post('/', upload.single('photo'), passport.authenticate('register', { failureRedirect: 'registrarse/errorRegistro', successRedirect: '/' }))
registrarse.get('/errorRegistro', signUp.error)

salir.get('/', logout)

carrito.get('/', auth, cart.read)
carrito.post('/', auth, cart.postProduct)
carrito.post('/producto', auth, cart.deleteProduct)
carrito.delete('/', auth, cart.delete)

compras.post('/', auth, purchases.create)

chat.get('/', auth, Chat)

export { productos, ingresar, registrarse, salir, carrito, compras, chat }