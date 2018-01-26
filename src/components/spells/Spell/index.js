import { h, Component } from 'preact';

class Spell extends Component {
  render () {
    return (
      <p
        class='spell'
        onClick={() => this.props.removeSpellFromTome(this.props.name)}
      >
        {this.props.name}
      </p>
    );
  }
}

export default Spell;
