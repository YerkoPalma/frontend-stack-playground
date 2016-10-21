import sheetRouter from 'sheet-router'
import html from 'yo-yo'
import postComponent from './components/post'
import commentComponent from './components/comment'
import href from 'sheet-router/href'

// default to `/404` if no path matches
const router = sheetRouter({ default: '/404' }, [
  [ '/posts', postComponent,
    ['/:post', postComponent,
      ['/comments', commentComponent,
        ['/:comment', commentComponent]
      ]
    ]
  ],
  ['/404', (params) => html`<div>Oh no, path not found! ${JSON.stringify(params, null, 2)}</div>`],
])

href(href => {
  root = html.update(root, router(href.pathname))
  console.log('link was clicked: ' + href.pathname)
})

const root = router('/posts')
document.querySelector('#app').appendChild(root)
