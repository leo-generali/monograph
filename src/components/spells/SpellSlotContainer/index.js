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
    var spells = [];
    for (let i = 0; i < this.state.spellSlots; i++) {
      spells.push(<SpellSlot key={i} />);
    }

    return (
      <div class='spell-slot-container'>
        <button onClick={this.decreaseSpellSlot}>-</button>
        <div class='spells-container'>
          {spells}
        </div>
        <button onClick={this.increaseSpellSlot}>+</button>
      </div>
    );
  }
}

export default SpellSlotContainer;
