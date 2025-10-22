import { ChatMessage } from '@/utils/chat-message'

export const mockGroups: ChatMessage[][] = [
  [
    new ChatMessage('user', 'hey'),
    new ChatMessage('assistant', 'A paragraph with *emphasis* and **strong importance**.'),
  ],
  [
    new ChatMessage('user', 'A block quote with ~strikethrough~ and a URL: https://reactjs.org.'),
    new ChatMessage('assistant', `\n## Hi from assistant\nThis is a paragraph.\n`),
  ],
  [
    new ChatMessage('user', `\n## Hi from user\nThis is a paragraph.\n`),
    new ChatMessage('assistant', '### This is perfect!'),
  ],
  [
    new ChatMessage('user', `\n\`\`\`js\nexport const greeting = "I will get JavaScript syntax highlighting";\n\`\`\``),
    new ChatMessage('assistant', `\n- term1\n- : My description of term1`),
  ],
  [
    new ChatMessage('user', '_Test_'),
    new ChatMessage('assistant', `\n\`\`\`js\nfunction joinClasses(classes) {\n  return classes.join(' ');\n}\n\`\`\``),
  ],
]
