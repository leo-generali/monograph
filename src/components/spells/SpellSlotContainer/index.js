import { h, Component } from 'preact';

import SpellSlot from '../SpellSlot';

class SpellSlotContainer extends Component {
  state = {
    spellSlots: 0
  }

  decreaseSpellSlot = () => {
    const spellSlots = this.state.spellSlots > 0 ? this.state.spellSlots - 1 : 0;
    this.setState({
      spellSlots
    });
  };

  increaseSpellSlot = () => {
    const spellSlots = this.state.spellSlots < 7 ? this.state.spellSlots + 1 : 7;
    this.setState({
      spellSlots
    });
  };

  render () {
    const spells = [];
    for (let i = 0; i < this.state.spellSlots; i++) {
      spells.push(<SpellSlot key={i} />);
    }

    return (
      <div class='spell-slots'>
        <button onClick={this.decreaseSpellSlot}>-</button>
        <div class='spell-slots__spells'>
          {spells}
        </div>
        <button onClick={this.increaseSpellSlot}>+</button>
      </div>
    );
  }
}

export default SpellSlotContainer;
