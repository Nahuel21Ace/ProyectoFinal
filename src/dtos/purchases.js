class purchasesDto {
	constructor({id, compra:{author= {}, productos = []}}) {
		this.author = author
		this.productos = productos
		this.id = id
	}
}

export default function DTO(purchases) {
	if (Array.isArray(purchases)) {
		return purchases.map((purchasesMap) => new purchasesDto(purchasesMap))
	} else {
		return new purchasesDto(purchases)
	}
}