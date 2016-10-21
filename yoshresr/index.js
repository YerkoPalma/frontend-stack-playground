import sheetRouter from 'sheet-router'
import html from 'yo-yo'
import postComponent from './components/post'
import commentComponent from './components/comment'
import href from 'sheet-router/href'

// default to `/404` if no path matches
const router = sheetRouter({ default: '/404' }, [
  [ '/posts', postComponent,
    '/posts/:post', postComponent,
    ['/comments', commentComponent,
     '/comments/:comment', commentComponent]
  ],
  ['/404', (params) => html`<div>Oh no, path not found!</div>`],
])

href(href => {
  html.update(postComponent, router(href.pathname))
  console.log('link was clicked: ' + href.pathname)
})

document.body.appendChild(router('/posts'))
