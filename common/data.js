export const posts = [
  {
    title: 'post 1',
    date: new Date(),
    content: 'lorem ipsum...',
    excerpt: 'lorem ipsum...',
    author: 'Yerko',
    comments: []    
  },
  {
    title: 'post 2',
    date: new Date(),
    content: 'lorem ipsum...',
    excerpt: 'lorem ipsum...',
    author: 'Yerko',
    comments: [
      {
        author: 'Salvador',
        content: 'foo bar...',
        date: new Date()
      }
    ]
  }
]
