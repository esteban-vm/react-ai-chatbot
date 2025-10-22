import { create } from 'zustand'

export interface MessageStore {
  messages: Message[]
  isLoading: boolean
  sendMessage: (content: string) => Promise<void>
}

export const useMessageStore = create<MessageStore>()((set) => {
  const addMessage = (newMessage: Message) => {
    set((state) => ({ messages: [...state.messages, newMessage] }))
  }

  return {
    messages: [],
    isLoading: false,
    async sendMessage(content) {
      addMessage({ role: 'user', content })
      set({ isLoading: true })

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
      } catch (error) {
        if (import.meta.env.DEV) console.log(error)
        addMessage({ role: 'system', content: 'Error' })
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
