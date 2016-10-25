import { posts } from '../../common/data.js'
import html from 'yo-yo'

export default () => html`
<main class="posts">
  <a href="/new-post">Add post</a>
  ${posts.map(post => html`
    <article class="post">
      <h2><a href="/posts/${posts.indexOf(post)}" title="${ post.title }">${ post.title }</a></h2>
      <p>${ post.excerpt }</p>
      <a href="/posts/${posts.indexOf(post)}" title="${ post.title }">Read More »</a>
    </article>
    `)
  }
</main>`
