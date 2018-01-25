import { h, Component } from 'preact'

import SpellLevel from '../../components/spells/SpellLevel'

class Home extends Component {
  render () {
    var spellLevels = [];
    for (let i = 0; i <= 8; i++) {
      spellLevels.push(<SpellLevel key={i} level={i+1} />);
    }

    return (
      <div class='profile'>
        {spellLevels}
      </div>
    )
  }
}

export default Home
