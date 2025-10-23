import uniqid from 'uniqid'

export type ChatMessageProps = [role: Role, content?: string]

export class ChatMessage {
  readonly id: string
  readonly role: Role
  readonly content?: string

  private constructor(...[role, content]: ChatMessageProps) {
    this.id = uniqid()
    this.role = role
    this.content = content
  }

  static create(...props: ChatMessageProps): ChatMessage {
    return new this(...props)
  }
}
