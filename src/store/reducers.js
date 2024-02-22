import { combineReducers } from 'redux'
import initialReducer from './initial.reducer'
import homeReducer from './home.reducer'

const appReducer = combineReducers({
  initial: initialReducer,
  home: homeReducer
})

export default appReducer
