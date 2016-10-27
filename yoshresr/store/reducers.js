import { combineReducers } from 'redux'

const post = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        title: action.title,
        content: action.content,
        comments: [],
        excerpt: action.content.substring(0, 50),
        date: new Date()
      }
    default:
      return state
  }
}

const posts = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        post(state, action)
      ]
    default:
      return state
  }
}

const path = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_PATH':
      return action.path
    default:
      return state
  }
}

const blogApp = combineReducers({
  posts,
  path
})

export default blogApp
