import React, { ErrorInfo } from 'react'
import './index.css'

type errorState = {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<
  ReactProps,
  errorState
> {
  constructor(props: { children: JSX.Element }) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(): errorState {
    return { hasError: true }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo)
  }
  render(): JSX.Element {
    if (this.state.hasError) {
      return (
        <div className="container">
          <div className="error-box">
            <div className="dot"></div>
            <div className="dot two"></div>
            <div className="face2">
              <div className="eye"></div>
              <div className="eye right"></div>
              <div className="mouth sad"></div>
            </div>
            <div className="shadow move"></div>
            <div className="message">
              <h1 className="alert">Error!</h1>
              <p>oh no, something went wrong.</p>
            </div>
            <button className="button-box">
              <span className="red btn-text">try again</span>
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
