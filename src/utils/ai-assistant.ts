import type { Chat } from '@google/genai'
import { GoogleGenAI } from '@google/genai'

export const AIAssistant = class {
  #chat: Chat

  constructor(model: string) {
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY })
    this.#chat = ai.chats.create({ model })
  }

  async chat(content: string) {
    const response = await this.#chat.sendMessage({ message: content })
    return response.text
  }

  async *chatStream(content: string) {
    const stream = await this.#chat.sendMessageStream({ message: content })

    for await (const chunk of stream) {
      yield chunk.text
    }
  }
}
