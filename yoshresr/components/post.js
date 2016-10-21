import { posts } from '../../common/data.js'
import html from 'yo-yo'

export default (params) => html`
<article>
  ${params.post
    ? posts[params.post]
    : posts.map(post => html`
    <div>
      <h3><a href="/posts/${posts.indexOf(post)}">${post.title}</a></h3>
      <p>${post.content}</p>
    </div>
    `)
  }
</article>`
