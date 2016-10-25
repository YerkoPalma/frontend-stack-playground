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

// default to `/404` if no path matches
const router = sheetRouter({ default: '/404' }, [
  ['/new-post', newPostComponent],
  [ '/posts', postsComponent,
    ['/:post', postComponent,
      ['/comments', commentsComponent]
    ]
  ],
  ['/404', (params) => html`<div>Oh no, path not found! ${JSON.stringify(params, null, 2)}</div>`],
])

function render () {
  root = html.update(root, router(store.getState().path, store.getState(), store.dispatch))
}

store.subscribe(render)

href(href => {
  store.dispatch(updatePath(href.pathname))
  root = html.update(root, router(href.pathname, store.getState(), store.dispatch))
  console.log('link was clicked: ' + href.pathname, ' path in state is ' + store.getState().path)
})

const root = router('/posts', store.getState(), store.dispatch)
document.querySelector('#app').appendChild(root)
