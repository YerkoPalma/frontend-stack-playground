import createRouter from 'router5'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { router5Middleware, router5Reducer } from 'redux-router5'

function configureStore(router, initialState = {}) {
    const createStoreWithMiddleware = applyMiddleware(router5Middleware(router))(createStore);

    const store = createStoreWithMiddleware(combineReducers({
        router: router5Reducer,
        /* your reducers */
    }), initialState)

    return store
}

const state = {
  name: 'posts',
  params: {},
  path: '/posts'
}

const router = createRouter()
const store = configureStore(router, { router: { route: state }})

router.start()
