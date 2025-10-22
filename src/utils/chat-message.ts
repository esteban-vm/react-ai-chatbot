import uniqid from 'uniqid'

export class ChatMessage {
  id: string
  role: Role
  content?: string

  constructor(role: Role, content?: string) {
    this.id = uniqid()
    this.role = role
    this.content = content
  }
}
