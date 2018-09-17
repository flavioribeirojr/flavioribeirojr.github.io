import React from 'react'
import ReactDOM from 'react-dom'
import './App.scss'

const App = () => <h1>Hello, world</h1>

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(App(), document.getElementById('root'))