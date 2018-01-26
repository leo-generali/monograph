import { h, Component } from 'preact';

class Spell extends Component {
  render () {
    return (
      <div
        class='spell card has-shadow'
        onClick={() => this.props.removeSpellFromTome(this.props.name)}
      >
        <p class='text text--regular'>{this.props.name}</p>
        <p class='text text--regular'>{this.props.castingTime}</p>
        <p class='text text--regular'>{this.props.classes}</p>
        <p class='text text--regular'>{this.props.description}</p>
        <p class='text text--regular'>{this.props.duration}</p>
        <p class='text text--regular'>{this.props.range}</p>
        <p class='text text--regular'>{this.props.school}</p>
      </div>
    );
  }
}

export default Spell;
