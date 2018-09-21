import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.scss'
import Profile from './components/Profile'

const App = () =>
  <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container">  
        <div className="profile">
          <div className="columns">
            <div className="column is-one-third is-offset-one-third has-text-centered">
              { Profile() }
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(App(), document.getElementById('root'))