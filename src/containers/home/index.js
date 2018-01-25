import { h, Component } from 'preact'

import SpellSlotContainer from '../../components/spells/SpellSlotContainer'

class Home extends Component {
  render () {
    return (
      <div class='profile'>
        <SpellSlotContainer />
      </div>
    )
  }
}

export default Home
