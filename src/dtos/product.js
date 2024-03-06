class ProductDto {
	constructor({id, timestamp, name, description, code, price, photo, stock }) {
		this.id = id
		this.timestamp = timestamp
		this.name = name
		this.description = description
		this.code = code
		this.price = price
		this.photo = photo
		this.stock = stock
	}
}

export default function DTO(product) {
	if (Array.isArray(product)) {
		return product.map((productMap) => new ProductDto(productMap))
	} else {
		return new ProductDto(product)
	}
}