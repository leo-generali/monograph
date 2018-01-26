import { h, Component } from 'preact';

import SpellSlotContainer from '../SpellSlotContainer';
import Spell from '../Spell';

class SpellLevel extends Component {
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
        // spellInfo={this.props.spell[i] ? this.props.spell[i] : {}}
        // removeSpellFromTome={this.props.removeSpellFromTome}
      />);
    }

    return (
      <div class='spell-level'>
        <p>{`Level: ${this.props.level}`}</p>
        <SpellSlotContainer />
        {spellsInLevel}
      </div>
    );
  }
}

export default SpellLevel;
