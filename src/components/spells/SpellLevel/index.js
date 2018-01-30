import { h, Component } from 'preact';

import PlusIcon from '../../shared/Icons/Plus';
import MinusIcon from '../../shared/Icons/Minus';

class SpellLevel extends Component {
  render () {
    const spellLevel = this.props.spellLevel === 0 ? 'Cantrip' : this.props.spellLevel;

    return (
      <div class='spell-level'>
        <p class='text text--header'>Max Spell Level</p>
        <div class='spell-level__container'>
          <button class='spell-level__button spell-level__button--minus' onClick={this.props.decreaseSpellLevel}><MinusIcon /></button>
          <p class='spell-level__level text text--bold'>{spellLevel}</p>
          <button class='spell-level__button spell-level__button--plus' onClick={this.props.increaseSpellLevel}><PlusIcon /></button>
        </div>
      </div>
    )
  }
}

export default SpellLevel;
