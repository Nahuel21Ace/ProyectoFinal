class CartDto {
	constructor({author: {name, lastName, address, phoneNumber, username}, productos = [], timestamp, }) {
		this.author = {name, lastName, address, phoneNumber, username}
        this.productos = productos
        this.timestamp = timestamp
	}
}

export default function DTO(cart) {
	if (Array.isArray(cart)) {
		return cart.map((cartMaps) => new CartDto(cartMaps))
	} else {
		return new CartDto(cart)
	}
}