import { ApiError } from '@google/genai'
import uniqid from 'uniqid'
import { create } from 'zustand'
import { AIAssistant } from '@/utils'

export interface MessageStore {
  isError: boolean
  isLoading: boolean
  messages: Message[]
  sendMessage: (content: string) => Promise<void>
}

export const useMessageStore = create<MessageStore>()((set) => {
  const appendMessage = (newMessage: Message) => {
    set((state) => ({ messages: [...state.messages, newMessage] }))
  }

  return {
    isError: false,
    isLoading: false,
    messages: [],
    async sendMessage(content) {
      appendMessage({ id: uniqid(), role: 'user', content })
      set({ isLoading: true, isError: false })

      try {
        // await new Promise((resolve) => setTimeout(resolve, 5_000))
        const reply = await assistant.chat(content)
        appendMessage({ id: uniqid(), role: 'assistant', content: reply })
      } catch (error) {
        set({ isError: true })
        if (error instanceof ApiError) {
          alert(error.message)
        } else if (import.meta.env.DEV) {
          console.log(error)
        }
      } finally {
        set({ isLoading: false })
      }
    },
  }
})

const assistant = new AIAssistant('gemini-2.5-flash')
