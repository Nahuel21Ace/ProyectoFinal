import MongoStore from 'connect-mongo'
import dotenv from 'dotenv'

dotenv.config()

const MONGO = process.env.MONGO

const sessionConfig = {
	store: MongoStore.create({
		mongoUrl: MONGO,
		mongoOptions: {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	}),
	secret: 'coderhouse',
	resave: false,
	saveUninitialized: false,
	rolling: true,
	cookie: {
		maxAge: 600000,
	},
}

export default sessionConfig