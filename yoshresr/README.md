yo-yo + sheetify + redux + sheet-router
=======================================

Until now everything seems to fit quite well ([everything but sheetify](https://github.com/YerkoPalma/frontend-stack-playground/issues/1)).
Some nice interactions seems to have apeared between sheet router and redux, but it only would work if the bugs related to the router are fixed.

## Pros

- sheet-router alow almost anything as parameter for routes, and routes dispatch redux actions so, the yo-yo components receive params, state, and dispatch as arguments. state and dispatch are from the redux store, that's pretty convenient.
- I added the path, current route, to the state, so I can use yo-yo update function to re render the current view. This way, I can programmatically navigate without accesing any sheet-router function, and just calling an action that change the path in the store.

## Cons

- By now, is necesary to use the `href` function to actually change routes, not a big issue but quite annoing.
- Now, a big issue is that [browser url is not being updated](https://github.com/YerkoPalma/frontend-stack-playground/issues/2).
- [Sheetify is not working.](https://github.com/YerkoPalma/frontend-stack-playground/issues/1) If it works as expected, then the style.css file in this folder is no longer necesary.
- Not a bug actually, but [routes can't be resolved](https://github.com/yoshuawuyts/sheet-router/issues/59) as I expect.
