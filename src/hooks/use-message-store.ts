import { create } from 'zustand'

// import { AIAssistant } from '@/utils'
// const assistant = new AIAssistant('gemini-2.5-flash')

export interface MessageStore {
  isLoading: boolean
  messages: Message[]
  sendMessage: (content: string) => Promise<void>
}

export const useMessageStore = create<MessageStore>()((set) => ({
  isLoading: false,
  messages: [
    {
      role: 'system',
      content: 'Hello! How can I assist you right now?',
    },
  ],

  async sendMessage(content) {
    console.log('sending message')

    const addMessage = (newMessage: Message) => {
      set((state) => ({ messages: [...state.messages, newMessage] }))
    }

    addMessage({ role: 'user', content })
    set({ isLoading: true })

    try {
      await new Promise((resolve) => setTimeout(resolve, 7_000))
      // const reply = await assistant.chat(content)
      // addMessage({ role: 'assistant', content: reply })
    } catch (error) {
      if (import.meta.env.DEV) {
        console.log(error)
      }

      addMessage({
        role: 'system',
        content: "Sorry, I couldn't process your request. Please try again!",
      })
    } finally {
      set({ isLoading: false })
    }
  },
}))
