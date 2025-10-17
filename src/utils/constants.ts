export const MOCK_MESSAGE_GROUPS: Message[][] = [
  [
    {
      role: 'user',
      content: 'Hey',
    },
    {
      role: 'assistant',
      content: 'A paragraph with *emphasis* and **strong importance**.',
    },
  ],
  [
    {
      role: 'user',
      content: 'A block quote with ~strikethrough~ and a URL: https://reactjs.org.',
    },
    {
      role: 'assistant',
      content: `
## Hi from assistant
This is a paragraph.
`,
    },
  ],
  [
    {
      role: 'user',
      content: `
## Hi from user
This is a paragraph.
`,
    },
    {
      role: 'assistant',
      content: '### This is perfect!',
    },
  ],
  [
    {
      role: 'user',
      content: `
\`\`\`js
 export  const greeting = "I will get JavaScript syntax highlighting";
\`\`\`
`,
    },
    {
      role: 'assistant',
      content: `
- term1
- : My description of term1
`,
    },
  ],
  [
    {
      role: 'user',
      content: '_Test_',
    },
    {
      role: 'assistant',
      content: `
\`\`\`js
function createClassNameString(classNames) {
  return classNames.join(' ');
}
\`\`\`
`,
    },
  ],
]

export const WELCOME_MESSAGE_GROUP: Message[] = [
  {
    role: 'system',
    content: 'Hello! How can I assist you right now?',
  },
]
