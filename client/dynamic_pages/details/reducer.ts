const ACTIONS = {
  LOG_IN: 'login',
  LOG_OUT: 'logout',
  CHANGE_NAME: 'change name',
}

type UInfo = { isLogin: boolean }

export { ACTIONS }

export default function detailReducer(state: UInfo, action: string): UInfo {
  switch (action) {
    case ACTIONS.LOG_IN:
      return { isLogin: true }
    case ACTIONS.LOG_OUT:
      return { isLogin: false }
    default:
      return state
  }
}
