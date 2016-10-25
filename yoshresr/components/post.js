import html from 'yo-yo'

const renderPost = (post, index) => html`
  <article class="post">
    <h2><a href="/posts/${index}" title="${ post.title }">${ post.title }</a></h2>
    <p>${ post.content }</p>
    <a href="/posts/${index}/comments" title="${ post.title } | comments">Comments »</a>
    <p class="small gray"><time datetime="${post.date}">${post.date.toLocaleString()}</time></p>
  </article>
`

export default (params, state) => html`
<main>
  ${
    renderPost(state.posts[params.post], params.post)
  }
</main>`
