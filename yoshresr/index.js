import sheetRouter from 'sheet-router'
import html from 'yo-yo'
import postComponent from './components/post'
import postsComponent from './components/posts'
import commentsComponent from './components/comments'
import href from 'sheet-router/href'
// import sheetify from 'sheetify'

// sheetify('style.css', { global: true })

// default to `/404` if no path matches
const router = sheetRouter({ default: '/404' }, [
  [ '/posts', postsComponent,
    ['/:post', postComponent,
      ['/comments', commentsComponent]
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
