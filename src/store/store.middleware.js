import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers'
import actions from './actions'

const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(actions)
  return store
}

export default configureStore
