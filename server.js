import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import { createServer } from 'http'
import { Server } from 'socket.io'
import passport from 'passport'
import logger from './src/config/logger.js'
import sessionConfig from './src/config/session.js'
import connections from './src/config/mongo.js'
import connectionSocket from './src/controller/socket.js'
import home from './src/controller/home.js'
import { productos, ingresar, registrarse, salir, carrito, compras, chat } from './src/router/router.js'

connections()

const app = express()
const PORT = process.argv[2] || 8080
const httpServer = createServer(app)
const io = new Server(httpServer)

app.set('views', './views')
app.set('view engine', 'pug')

app.use(cookieParser())
app.use(session(sessionConfig))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/registrarse', registrarse)
app.use('/ingresar', ingresar)
app.use('/productos', productos)
app.use('/salir', salir)
app.use('/carrito', carrito)
app.use('/compras', compras)
app.use('/mensajes', chat)

app.get('/', home)

app.get('*', (req, res) => {
	res.send(`Ruta ${req.url}, ${req.method} no esta implementada`)
})

io.on('connection', connectionSocket)

httpServer.listen(PORT, () => {
	logger.info(`RUN http://localhost:${PORT}`)
})