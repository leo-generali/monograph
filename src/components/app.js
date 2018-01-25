import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './shared/Header'
import Home from '../containers/home'
import About from '../containers/about'

export default class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url
  };

  render () {
    return (
      <div id='app'>
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path='/' />
          <About path='/about/' />
        </Router>
      </div>
    )
  }
}
