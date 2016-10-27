import sheetRouter from 'sheet-router'
import html from 'yo-yo'
import postComponent from './components/post'
import postsComponent from './components/posts'
import commentsComponent from './components/comments'
import newPostComponent from './components/new-post'
import href from 'sheet-router/href'
import blogApp from './store/reducers'
import { updatePath } from './store/actions'
import initialState from '../common/data.js'
import { createStore } from 'redux'
// import sheetify from 'sheetify'

// sheetify('style.css', { global: true })

let store = createStore(blogApp, initialState)

const router = sheetRouter({ default: '/404' }, [
  ['/new-post', newPostComponent],
  [ '/posts', postsComponent,
    ['/:post', postComponent,
      ['/comments', commentsComponent]
    ]
  ],
  ['/404', (params) => html`<div>Oh no, path not found! ${JSON.stringify(params, null, 2)}</div>`]
])

// Render function used after every state change
// used yo-yo update function to update the DOM
function render () {
  root = html.update(root, router(store.getState().path, store.getState(), store.dispatch))
}

store.subscribe(render)

// handle anchor links with sheet-router
href(href => {
  store.dispatch(updatePath(href.pathname))
  console.log('link was clicked: ' + href.pathname, ' path in state is ' + store.getState().path)
})

// set initial root, and append it to the DOM
let root = router('/posts', store.getState(), store.dispatch)
document.querySelector('#app').appendChild(root)
