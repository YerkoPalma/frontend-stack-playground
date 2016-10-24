import { posts } from '../../common/data.js'
import html from 'yo-yo'

const renderPost = (post) => html`
  <article class="post">
    <h2><a href="/posts/${posts.indexOf(post)}" title="${ post.title }">${ post.title }</a></h2>
    <p>${ post.content }</p>
    <a href="/posts/${posts.indexOf(post)}/comments" title="${ post.title } | comments">Comments »</a>
    <p class="small gray"><time datetime="${post.date}">${post.date.toLocaleString()}</time></p>
  </article>
`

export default (params) => html`
<main>
  ${
    renderPost(posts[params.post])
  }
</main>`
