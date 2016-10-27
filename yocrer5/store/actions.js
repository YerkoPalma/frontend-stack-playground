export const updatePath = (path) => {
  return {
    type: 'UPDATE_PATH',
    path
  }
}

export const addPost = (title, content) => {
  return {
    type: 'ADD_POST',
    title,
    content
  }
}
