import { all } from 'redux-saga/effects'
import initialActions from '../containers/initial/initial.model'
import homeActions from '../containers/home/home.model'

function* allSaga() {
  yield all([initialActions(), homeActions()]);
}

export default allSaga
