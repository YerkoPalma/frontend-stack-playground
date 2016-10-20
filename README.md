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

The actions for the state container are:

```javascript
const POST
const COMMENT
```

## Stacks

Go to each one of the following folders to check the implementations

- [yo-yo + sheetify + send-action + sheet-router](/yoshsasr)
- [yo-yo + sheetify + send-action + director](/yoshsad)
- [yo-yo + sheetify + redux + sheet-router](/yoshresr)
- [yo-yo + sheetify + redux + director](/yoshred)
- [yo-yo + cxs + send-action + sheet-router](/yocsasr)
- [yo-yo + cxs + send-action + director](/yocsad)
- [yo-yo + cxs + redux + sheet-router](/yocresr)
- [yo-yo + cxs + redux + director](/yocred)
- [hyperscript + hyperx + sheetify + send-action + sheet-router](/hhshsasr)
- [hyperscript + hyperx + sheetify + send-action + director](/hhshsad)
- [hyperscript + hyperx + sheetify + redux + sheet-router](/hhshresr)
- [hyperscript + hyperx + sheetify + redux + director](/hhshred)
- [hyperscript + hyperx + cxs + send-action + sheet-router](/hhcsasr)
- [hyperscript + hyperx + cxs + send-action + director](/hhcsad)
- [hyperscript + hyperx + cxs + redux + sheet-router](/hhcresr)
- [hyperscript + hyperx + cxs + redux + director](/hhcred)

## License

[MIT](/LICENSE)
