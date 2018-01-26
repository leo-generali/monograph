import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

class Header extends Component {
  render () {
    return (
      <header class='header'>
        <h1 class='header-logo'>Monograph</h1>
        <nav class='link-container'>
          <Link class='link' activeClassName='link link--active' href='/'>Tome</Link>
          <Link class='link' activeClassName='link link--active' href='/about'>About</Link>
        </nav>
      </header>
    )
  }
}

export default Header;
