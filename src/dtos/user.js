class UserDto {
	constructor({ id, name, lastName, address, age, phoneNumber, photo, username, password, admin }) {
		this.id = id
		this.name = name
		this.lastName = lastName
		this.address = address
		this.age = age
		this.phoneNumber = phoneNumber
		this.photo = photo
		this.username = username
		this.password = password
		this.admin = admin
	}
}

export default function DTO(user) {
	if (Array.isArray(user)) {
		return user.map((userMap) => new UserDto(userMap))
	} else {
		return new UserDto(user)
	}
}