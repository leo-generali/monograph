import { h, Component } from 'preact';

class Spell extends Component {
  render () {
    return (
      <p
        class='spell'
        onClick={() => this.props.removeSpellFromTome(this.props.spellName)}
      >
        {this.props.name}
      </p>
    );
  }
}

export default Spell;
