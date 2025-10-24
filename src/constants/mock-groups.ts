import { ChatMessage } from '@/utils'

export const mockGroups: ChatMessage[][] = [
  [
    ChatMessage.create('user', 'hey'),
    ChatMessage.create('assistant', 'A paragraph with *emphasis* and **strong importance**.'),
  ],
  [
    ChatMessage.create('user', 'A block quote with ~strikethrough~ and a URL: https://reactjs.org.'),
    ChatMessage.create('assistant', '\n## Hi from assistant\nThis is a paragraph.\n'),
  ],
  [
    ChatMessage.create('user', `\n## Hi from user\nThis is a paragraph.\n`),
    ChatMessage.create('assistant', '### This is perfect!'),
  ],
  [
    ChatMessage.create('user', '\n```js\nexport const greeting = "I will get JavaScript syntax highlighting";\n```'),
    ChatMessage.create('assistant', '\n- Term1\n\t- My description of Term1'),
  ],
  [
    ChatMessage.create('user', '_Test_'),
    ChatMessage.create('assistant', "\n```js\nfunction joinClasses(classes) {\n  return classes.join(' ');\n}\n```"),
  ],
]
