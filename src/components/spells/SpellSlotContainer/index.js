import { h, Component } from 'preact';

import SpellSlot from '../SpellSlot';
import PlusIcon from '../../shared/Icons/Plus';
import MinusIcon from '../../shared/Icons/Minus';

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
        <button class='spell-slots__button spell-slots__button--minus' onClick={this.decreaseSpellSlot}><MinusIcon /></button>
        <div class='spell-slots__spells'>
          {spells}
        </div>
        <button class='spell-slots__button spell-slots__button--plus' onClick={this.increaseSpellSlot}><PlusIcon /></button>
      </div>
    );
  }
}

export default SpellSlotContainer;
