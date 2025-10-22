import { create } from 'zustand'

export interface MessageStore {
  isError: boolean
  isLoading: boolean
  messages: Message[]
  sendMessage: (content: string) => Promise<void>
}

export const useMessageStore = create<MessageStore>()((set) => {
  const addMessage = (newMessage: Message) => {
    set((state) => ({ messages: [...state.messages, newMessage] }))
  }

  return {
    isError: false,
    isLoading: false,
    messages: [],
    async sendMessage(content) {
      addMessage({ role: 'user', content })
      set({ isLoading: true, isError: false })

      try {
        await new Promise((resolve) => setTimeout(resolve, 5_000))
      } catch (error) {
        if (import.meta.env.DEV) console.log(error)
        set({ isError: true })
      } finally {
        set({ isLoading: false })
      }
    },
  }
})

// import { AIAssistant } from '@/utils'
// const assistant = new AIAssistant('gemini-2.5-flash')
// const reply = await assistant.chat(content)
// addMessage({ role: 'assistant', content: reply })
