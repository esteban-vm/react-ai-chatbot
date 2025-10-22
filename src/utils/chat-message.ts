import uniqid from 'uniqid'

export type ChatMessageProps = [role: Role, content?: string]

export class ChatMessage {
  id: string
  role: Role
  content?: string

  private constructor(...[role, content]: ChatMessageProps) {
    this.id = uniqid()
    this.role = role
    this.content = content
  }

  static create(...props: ChatMessageProps) {
    return new this(...props)
  }
}
