import { h, Component } from 'preact';

class Spell extends Component {
  render () {
    return (
      <p
        class='spell'
        onClick={() => this.props.removeSpellFromTome(this.props.spellName)}
      >
        {this.props.spellName}
      </p>
    );
  }
}

export default Spell;
