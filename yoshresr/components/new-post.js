import html from 'yo-yo'

export default (params, state) => html`
<form class="new-post">
  <input name="post_title" placeholder="Post title" type="text" id="post-title">
  <textarea id="post-content" placeholder="Post content"></textarea>
  <input type="submit" value="Submit post">
</form>`
