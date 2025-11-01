import { ApiError } from '@google/genai'
import { create } from 'zustand'
import { AIAssistant, ChatMessage } from '@/utils'

export interface MessageStore {
  isError: boolean
  isLoading: boolean
  isStreaming: boolean
  messages: ChatMessage[]
  sendMessage: (content: string) => Promise<void>
  sendMessageStream: (content: string) => Promise<void>
}

export const useMessageStore = create<MessageStore>()((set) => {
  const addMessage = (newMessage: ChatMessage) => {
    set((state) => ({ messages: [...state.messages, newMessage] }))
  }

  const updateLastMessage = (content?: string) => {
    set(({ messages }) => {
      return {
        messages: messages.map((message, index) => {
          if (index === messages.length - 1) {
            return ChatMessage.create(message.role, `${message.content}${content}`)
          }

          return message
        }),
      }
    })
  }

  return {
    messages: [],
    isError: false,
    isLoading: false,
    isStreaming: false,

    async sendMessage(content) {
      addMessage(ChatMessage.create('user', content))
      set({ isLoading: true, isError: false })

      try {
        await new Promise((resolve) => setTimeout(resolve, 5_000))
        // const reply = await assistant.chat(content)
        // addMessage(ChatMessage.create('assistant', reply))
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

    async sendMessageStream(content) {
      addMessage(ChatMessage.create('user', content))
      set({ isLoading: true, isError: false })

      try {
        const reply = assistant.chatStream(content)
        let isFirstChunk = false

        for await (const chunk of reply) {
          if (!isFirstChunk) {
            isFirstChunk = true
            addMessage(ChatMessage.create('assistant', ''))
            set({ isLoading: false, isStreaming: true })
          }

          updateLastMessage(chunk)
        }

        set({ isStreaming: false })
      } catch (error) {
        set({ isLoading: false, isStreaming: false, isError: true })
        if (error instanceof ApiError) {
          alert(error.message)
        } else if (import.meta.env.DEV) {
          console.log(error)
        }
      }
    },
  }
})

const assistant = new AIAssistant('gemini-2.5-flash')
