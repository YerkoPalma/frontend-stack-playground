import { posts } from '../../common/data.js'
import html from 'yo-yo'

const renderPost = (post) => html`
  <div>
    <h3><a href="/posts/${posts.indexOf(post)}">${post.title}</a></h3>
    <span>${post.date}</span>
    <p>${post.content}</p>
    <a href="/posts">back</a>
  </div>
`

export default (params) => html`
<article>
  ${params.post
    ? renderPost(posts[params.post])
    : posts.map(post => html`
    <div>
      <h3><a href="/posts/${posts.indexOf(post)}">${post.title}</a></h3>
      <p>${post.content}</p>
    </div>
    `)
  }
</article>`
