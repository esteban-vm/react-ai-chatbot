import { ApiError } from '@google/genai'
import { create } from 'zustand'
import { AIAssistant, ChatMessage } from '@/utils'

export interface MessageStore {
  isError: boolean
  isLoading: boolean
  messages: ChatMessage[]
  sendMessage: (content: string) => Promise<void>
}

export const useMessageStore = create<MessageStore>()((set) => {
  const addMessage = (newMessage: ChatMessage) => {
    set((state) => ({ messages: [...state.messages, newMessage] }))
  }

  return {
    isError: false,
    isLoading: false,
    messages: [],
    async sendMessage(content) {
      addMessage(new ChatMessage('user', content))
      set({ isLoading: true, isError: false })

      try {
        // await new Promise((resolve) => setTimeout(resolve, 5_000))
        const reply = await assistant.chat(content)
        addMessage(new ChatMessage('assistant', reply))
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
