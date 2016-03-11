import {combineReducers} from 'redux'
import app from './app'
import auth from './auth'
import rooms from './rooms'
import viewer from './viewer'
import messages from './messages'
import settings from './settings'
import realtime from './realtime'
import navigation from './navigation'


const rootReducer = combineReducers({
  app,
  auth,
  rooms,
  viewer,
  messages,
  settings,
  realtime,
  navigation
})

export default rootReducer
