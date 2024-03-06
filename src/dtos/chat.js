class ChatDto {
	constructor({author: {name} , text, fyh }) {
		this.name = name
		this.text = text
		this.fyh = fyh
	}
}

export default function DTO(chat) {
	if (Array.isArray(chat)) {
		return chat.map((chatMap) => new ChatDto(chatMap))
	} else {
		return new ChatDto(chat)
	}
}