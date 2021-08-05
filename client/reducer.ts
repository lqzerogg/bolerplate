import { User } from '../models'
import { Action, Reducer } from 'redux'

const ACTIONS_TYPES = {
  LOG_IN: 'login',
  LOG_OUT: 'logout',
  CHANGE_NAME: 'change name',
}
const defaultState: User = { isLogin: false } as User

export default function appReducer(state = defaultState, action: Action): User {
  switch (action.type) {
    case ACTIONS_TYPES.LOG_IN: {
      return { ...state, isLogin: true }
    }
    case ACTIONS_TYPES.LOG_OUT: {
      return { ...state, isLogin: false }
    }
    default: {
      return state
    }
  }
}
