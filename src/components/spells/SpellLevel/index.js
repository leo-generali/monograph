import { h, Component } from 'preact';

import SpellSlotContainer from '../SpellSlotContainer';
import SpellList from '../SpellList';

class SpellLevel extends Component {
  render () {
    return (
      <div class='spell-level'>
        <p>{`Level: ${this.props.level}`}</p>
        <SpellSlotContainer />
        {/* <SpellList /> */}
      </div>
    );
  }
}

export default SpellLevel;
