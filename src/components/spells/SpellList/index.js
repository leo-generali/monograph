import { h, Component } from 'preact';

import SpellSlotContainer from '../SpellSlotContainer';
import Spell from '../Spell';

class SpellList extends Component {
  render () {
    let spellsInLevel = [];

    for (let i = 0; i < this.props.spells.length; i++) {
      const currentSpell = this.props.spells[i];
      spellsInLevel.push(<Spell
        castingTime={currentSpell.casting_time}
        classes={currentSpell.classes}
        components={currentSpell.components}
        description={currentSpell.description}
        duration={currentSpell.duration}
        name={currentSpell.name}
        range={currentSpell.range}
        ritual={currentSpell.ritual}
        school={currentSpell.school}
        removeSpellFromTome={this.props.removeSpellFromTome}
      />);
    }

    const headerText = this.props.level !== 0 ? `Level ${this.props.level}` : 'Cantrips';
    const hasSpellSlot = this.props.level !== 0 ? <SpellSlotContainer /> : '';

    return (
      <div class='spell-list'>
        <p class='text text--header text--spell-name'>{headerText}</p>
        {hasSpellSlot}
        {spellsInLevel}
      </div>
    );
  }
}

export default SpellList;
