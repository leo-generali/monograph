import { h, Component } from 'preact'

import SpellSlotContainer from '../../components/spells/SpellSlotContainer'

class Home extends Component {
  render () {
    var spellSlots = [];
    for (let i = 0; i <= 8; i++) {
      spellSlots.push(<SpellSlotContainer key={i} level={i+1} />);
    }

    return (
      <div class='profile'>
        {spellSlots}
      </div>
    )
  }
}

export default Home
