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
  [
    ChatMessage.create('user', '_Test_'),
    ChatMessage.create(
      'assistant',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quos doloribus, cumque velit soluta placeat optio numquam sapiente commodi alias quasi quis quia explicabo nisi, ad saepe laboriosam consequatur repellat ab provident labore dignissimos eligendi quae! Cum modi a in explicabo voluptatibus repellat, eius cupiditate eos, nihil libero maiores ut dolores! Vero totam quibusdam, distinctio dignissimos inventore similique ducimus qui rem enim laborum maxime pariatur amet atque repellendus beatae nobis molestias officia. Laboriosam praesentium tempora vel asperiores omnis ipsam laudantium debitis. Illo excepturi vitae qui laborum repellendus, impedit repudiandae facere! Corporis, rem. Possimus nostrum eaque consequatur ratione repudiandae delectus maxime nesciunt dignissimos sequi, praesentium, dolorem ducimus eveniet error blanditiis culpa, molestiae veritatis laborum aliquam reiciendis dicta aliquid velit voluptatem in. Nemo et id consequatur totam sed consectetur ipsum maiores expedita porro accusantium. Voluptatibus fuga distinctio recusandae ratione dolore voluptatum quod corrupti temporibus labore laudantium sit voluptatem nisi, ullam ut possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti officiis veniam a velit sint asperiores quasi eos quia, ipsam laudantium alias quod voluptatem repudiandae tenetur accusamus facere veritatis labore iure! Nihil illum quae animi iure officiis tempora totam vel ducimus repellendus? Beatae autem incidunt dolor, maxime nisi, possimus quia inventore distinctio perferendis quidem temporibus molestiae minus officiis illum blanditiis ullam harum quis obcaecati dignissimos culpa. Inventore, nihil corrupti modi sequi culpa ex consectetur excepturi omnis assumenda perferendis aut velit quasi tempora? Nisi aperiam eos ratione quia soluta, fugit, similique architecto in harum quibusdam doloremque sint quaerat nulla odio blanditiis vitae adipisci assumenda. Unde sit aperiam, quasi maxime, architecto iste dignissimos ex quo natus cum libero, asperiores at optio cupiditate esse?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus tempora voluptas consectetur nostrum ut ipsum minus recusandae quod harum!'
    ),
  ],
]
