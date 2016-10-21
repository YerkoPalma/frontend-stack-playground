import { posts } from '../../common/data.js'
import html from 'yo-yo'

export default (params) => html`
<article>
  ${params.post && params.comment
    ? posts[params.post].comments[params.comment]
    : posts[params.post].comments.map(comment => html`<p>${comment.content}</p>`)
  }
</article>`
