import { h, Component } from 'preact';

class Spell extends Component {
  render () {
    return (
      <div
        class='spell has-shadow'
        onClick={() => this.props.removeSpellFromTome(this.props.name)}
      >
        <p>{this.props.name}</p>
        <p>{this.props.castingTime}</p>
        <p>{this.props.classes}</p>
        <p>{this.props.description}</p>
        <p>{this.props.duration}</p>
        <p>{this.props.range}</p>
        <p>{this.props.school}</p>
      </div>
    );
  }
}

export default Spell;
