import html from 'yo-yo'
import { addPost, updatePath } from '../store/actions'

export default (params, state, dispatch) => {
  const onsubmit = (e) => {
    e.preventDefault()
    const title = document.getElementById('post-title').value
    const content = document.getElementById('post-content').value
    dispatch(addPost(title, content))
    // navigate through redux
    dispatch(updatePath('/posts'))
  }

  return html`
<form class="new-post" onsubmit=${onsubmit}>
  <input name="post_title" placeholder="Post title" type="text" id="post-title">
  <textarea id="post-content" placeholder="Post content"></textarea>
  <input type="submit" value="Submit post">
</form>`
}
