import html from 'yo-yo'

export default (params, state) => html`
<main class="posts">
  <a href="/new-post">Add post</a>
  ${state.posts.map(post => html`
    <article class="post">
      <h2><a href="/posts/${state.posts.indexOf(post)}" title="${ post.title }">${ post.title }</a></h2>
      <p>${ post.excerpt }</p>
      <a href="/posts/${state.posts.indexOf(post)}" title="${ post.title }">Read More »</a>
    </article>
    `)
  }
</main>`
