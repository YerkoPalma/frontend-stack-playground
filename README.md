# frontend-stack-playground
> :trident: One step after vanilla javascript, one step before frameworks.

## Why?

I've got tired of js frameworks, so I will start to experiment with different js stacks. 
composing libraries is more fun than learning oppinionated frameworks. At the end, I would have the basic experience and maybe some benchmarking to make some decisions.

## How?

If there are already a lot of js framework choices, there is even more js libraries.
So, I arbitrary selected some of them and mixed in this repo, accross different project folders.
Every folder is supposed to be [the same app](#the-app), only changing the js stacks, so, there are some [common](/common) files.
Also, there is only one folder for [benchmarking](/benchmark), as the same test would be applied to every app.

### The app

The app is a simple blog, with common css files. The state model must support posts with comments, and manage routes to visualize them.
The routes are:

```javascript
/posts
/posts/:post_id
/posts/:post_id/comments
/posts/:post_id/comments/:comment_id
```

The model structures are:

```javascript
const post = {
  title: '',
  date: {},
  content: '',
  author: '',
  comments: []
}

const comment = {
  author: '',
  content: '',
  date: {}
}
```

## Stacks

Go to each one of the following folders to check the implementations

- [snabbdom + hyperx + sheetify + riotux + router5](/shshrir5)
- [snabbdom + hyperx + sheetify + riotux + director](/shshrid)
- [snabbdom + hyperx + sheetify + redux + router5](/shshrer5)
- [snabbdom + hyperx + sheetify + redux + director](/shshred)
- [snabbdom + hyperx + cxs + riotux + router5](/shcrir5)
- [snabbdom + hyperx + cxs + riotux + director](/shcrid)
- [snabbdom + hyperx + cxs + redux + router5](/shcrer5)
- [snabbdom + hyperx + cxs + redux + director](/shcred)
- [hyperscript + hyperx + sheetify + riotux + router5](/hhshrir5)
- [hyperscript + hyperx + sheetify + riotux + director](/hhshrid)
- [hyperscript + hyperx + sheetify + redux + router5](/hhshrer5)
- [hyperscript + hyperx + sheetify + redux + director](/hhshred)
- [hyperscript + hyperx + cxs + riotux + router5](/hhcrir5)
- [hyperscript + hyperx + cxs + riotux + director](/hhcrid)
- [hyperscript + hyperx + cxs + redux + router5](/hhcrer5)
- [hyperscript + hyperx + cxs + redux + director](/hhcred)

## License

[MIT](/LICENSE)
