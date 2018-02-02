import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

class Header extends Component {
  render () {
    return (
      <header class='header'>
        <h1 class='header-logo'>Monograph</h1>
        <Link class='link link--tome' activeClassName='link link--active' href='/'>Tome</Link>
        <Link class='link link--about' activeClassName='link link--active' href='/about'>About</Link>
      </header>
    )
  }
}

export default Header;
