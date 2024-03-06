import Service from '../service/chat.js'

const connectionSocket = async (socket) => {
	const listaMensajes = await Service.read()
	socket.emit('messages', listaMensajes)
	socket.on('new-message', async (data) => {
		await Service.create(data)
	})
}

export default connectionSocket