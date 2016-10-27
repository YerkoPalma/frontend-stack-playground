import html from 'yo-yo'

const renderComments = (post) => html`
  <ul class="comments">
    ${post.comments.map(comment => {
      return html`
      <li>
        <h3 class="commenter">${comment.author}</h3>
        <h4 class="comment-date">${comment.date}</h4>
        <p class="comment-content">${comment.content}</p>
      </li>
      `
    })}
  </ul>
`

export default (params, state) => html`
<main>
  <h2><a href="/posts/${params.post}" title="${ state.posts[params.post].title }">${ state.posts[params.post].title }</a></h2>
  ${
    renderComments(state.posts[params.post])
  }
</main>`
