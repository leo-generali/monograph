import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './shared/Header';
import Tome from '../containers/tome';
import About from '../containers/about';

class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render () {
    return (
      <div class='app'>
        <Header />
        <Router onChange={this.handleRoute}>
          <Tome path='/' />
          <About path='/about/' />
        </Router>
      </div>
    );
  }
}

export default App;
