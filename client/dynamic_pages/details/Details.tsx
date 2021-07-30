import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from 'react'
import './index.css'
import { AppContext } from '../../App'
import detailReducer, { ACTIONS } from './reducer'

export default function Details() {
  const { uid: user } = useContext(AppContext)
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `hello ${user}, click ${count} times`
    return () => {
      document.title = 'hello react'
    }
  }, [count, user])

  const [{ isLogin }, dispatch] = useReducer(detailReducer, { isLogin: false })

  // const result = useMemo(() => {
  //   let i
  //   for(i = 0; i < 10000; ++i) {
  //     console.log(i, isLogin)
  //   }
  //   return i
  // }, [isLogin])

  // console.log('~~~~', result)

  // const mCB = useCallback(() => {
  //   console.log(count)
  // }, [isLogin])

  // mCB()

  return (
    <div className="detail">
      <p>
        hello, {user}, click {count} times
      </p>
      <p>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount + 1)
          }}
        >
          click + 1
        </button>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount - 1)
          }}
        >
          click - 1
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch(isLogin ? ACTIONS.LOG_OUT : ACTIONS.LOG_IN)
          }}
        >
          log {isLogin ? 'out' : 'in'}
        </button>
      </p>
    </div>
  )
}
