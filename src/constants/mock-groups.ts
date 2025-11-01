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
    ChatMessage.create('assistant', '\n- Term1\n\t- Description of Term1\n1. Term2\n\t1. Description of Term2'),
  ],
  [
    ChatMessage.create('user', '**Test**'),
    ChatMessage.create('assistant', "\n```js\nfunction joinClasses(classes) {\n  return classes.join(' ');\n}\n```"),
  ],
  [
    ChatMessage.create('user', '_Test_'),
    ChatMessage.create(
      'assistant',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quos doloribus, cumque velit soluta placeat optio numquam sapiente commodi alias quasi quis quia explicabo nisi, ad saepe laboriosam consequatur repellat ab provident labore dignissimos eligendi quae! **Cum modi a in explicabo voluptatibus repellat, eius cupiditate eos,** nihil libero maiores ut dolores! Vero totam quibusdam, distinctio dignissimos inventore similique ducimus qui rem enim laborum maxime pariatur amet atque repellendus beatae nobis molestias officia. Laboriosam praesentium tempora vel asperiores omnis ipsam laudantium debitis. Illo excepturi vitae qui laborum repellendus, impedit repudiandae facere! Corporis, rem. Possimus nostrum eaque consequatur ratione repudiandae delectus maxime nesciunt dignissimos sequi, praesentium, dolorem ducimus eveniet error blanditiis culpa, molestiae veritatis laborum aliquam reiciendis dicta aliquid velit voluptatem in.\nNemo et id consequatur totam sed consectetur ipsum maiores expedita porro accusantium. Voluptatibus fuga distinctio recusandae ratione dolore voluptatum quod corrupti temporibus labore laudantium sit voluptatem nisi, ullam ut possimus. _Lorem ipsum dolor sit amet consectetur adipisicing elit._ Corrupti officiis veniam a velit sint asperiores quasi eos quia, ipsam laudantium alias quod voluptatem repudiandae tenetur accusamus facere veritatis labore iure! Nihil illum quae animi iure officiis tempora totam vel ducimus repellendus? Beatae autem incidunt dolor, maxime nisi, possimus quia inventore distinctio perferendis quidem temporibus molestiae minus officiis illum blanditiis ullam harum quis obcaecati dignissimos culpa. Inventore, nihil corrupti modi sequi culpa ex consectetur excepturi omnis assumenda perferendis aut velit quasi tempora? Nisi aperiam eos ratione quia soluta, fugit, similique architecto in harum quibusdam doloremque sint quaerat nulla odio blanditiis vitae adipisci assumenda. Unde sit aperiam, quasi maxime, architecto iste dignissimos ex quo natus cum libero, asperiores at optio cupiditate esse?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus tempora voluptas consectetur nostrum ut ipsum minus recusandae quod harum!\nLorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas, sequi magni, quisquam, quis consectetur doloremque eaque sed vitae est fugit architecto? Cumque natus eum commodi consectetur, sint minima laboriosam aut cum enim perspiciatis, ipsum voluptates quisquam corrupti, distinctio optio asperiores facilis recusandae sapiente eos laudantium ratione ducimus. _A non pariatur optio, mollitia natus ex fugiat corrupti minus corporis sapiente animi enim laborum magnam velit voluptas nulla in nobis iure ullam blanditiis, accusantium esse ratione eligendi doloribus?_ **Maxime beatae cumque perferendis tenetur odio id unde possimus pariatur.** Aperiam omnis maiores sequi quia veritatis voluptates sint, inventore corporis molestias delectus rerum iusto quis quo in animi necessitatibus? Adipisci eveniet dolores maiores hic libero pariatur.\n_Eum repellat quidem magnam doloribus, quae illum culpa, autem quia aliquid officia atque temporibus repellendus tempora. Maxime voluptates rem, repudiandae consectetur assumenda illo, temporibus obcaecati perspiciatis aliquam quas iusto non fuga sint animi? A eius iste voluptas!\nLorem ipsum dolor sit, amet consectetur adipisicing elit._ Nam perferendis quisquam ducimus id saepe tempore excepturi impedit quos quod, blanditiis nobis, quaerat corporis voluptatibus natus dignissimos. Labore inventore iusto molestias dolor fuga odit blanditiis consequatur at velit nulla, vero fugit ullam quisquam, nesciunt deserunt? Tempora, animi qui, adipisci illum quo, quas id rem debitis error consequuntur unde! Beatae, ex asperiores corporis itaque perspiciatis voluptate quod odit! Nulla, nisi perferendis asperiores harum recusandae labore, doloremque amet distinctio porro necessitatibus corrupti voluptatem iste. Asperiores aspernatur veritatis consequuntur excepturi hic laudantium praesentium voluptate, iusto inventore itaque accusantium repellat obcaecati, ad tempora architecto quos?'
    ),
  ],
]
