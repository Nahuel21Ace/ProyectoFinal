import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import dotenv from 'dotenv'
import { correo } from '../service/nodemailer.js'
import Service from '../service/user.js'

dotenv.config()

const USER = process.env.USER


export const register = new LocalStrategy({ passReqToCallback: true }, async (req, username, password, done) => {
	const data = req.body
	const user = await Service.read(username)
	const url = req.file.path
	const subject = 'Nuevo Usuario Registrado'
	const mensaje = `<h1 style="color: blue;">Se ha registrado un nuevo usuario ${data.name}, ${data.lastName}, ${data.address}, ${data.age}, ${data.phoneNumber}</h1>`
	if (user) {
		return done('el usuario ya esta registrado', false)
	}
	const newUser = await Service.create(data, url)
	await correo(USER, subject, mensaje)
	return done(null, newUser)
});

passport.serializeUser((user, done) => {
	done(null, user.username)
})

passport.deserializeUser(async (username, done) => {
	const user = await Service.read(username)
	done(null, user)
})