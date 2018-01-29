import { h, Component } from 'preact';

import SpellComponents from '../SpellComponents';
import DeleteIcon from '../../shared/Icons/Delete';
import ClassIcon from '../../shared/Icons/Class';
import SchoolIcon from '../../shared/Icons/School';

class Spell extends Component {
  state = {
    showingDescription: false,
    keyframes: ''
  }

  showDescription = () => {
    this.setState({
      showingDescription: !this.state.showingDescription
    });
  }

  render () {
    const showingDescription = this.state.showingDescription ? { description: '', icon: 'nav-indicator--active' } : { description: 'spell__description--hidden', icon: '' };

    return (
      <article
        class='spell card has-shadow'
      >
        <div class='spell__row'>
          <p class='text text--bold spell__name'>{this.props.name}</p>
          <SpellComponents components={this.props.components}/>
          <p class='text text--regular spell__range'>{this.props.range}</p>
          <p class='text text--regular spell__casting-time'>{this.props.castingTime}</p>
          <p class='text text--regular spell__duration'>{this.props.duration}</p>
          <button class='btn icon__delete' onClick={() => this.props.removeSpellFromTome(this.props.name)}>
            <DeleteIcon />
          </button>
        </div>
        <div class='spell__description-container'>
          <svg class={`nav-indicator ${showingDescription.icon}`} width='22' height='22' viewbox='0 0 26 26' onClick={() => this.showDescription()}>
            <path d='M11,1 L21,11 L11,21 L1,11'></path>
          </svg>
          <p class={`text text--regular spell__description ${showingDescription.description}`}>{this.props.description}</p>
          <div class={`text text--regular spell__school ${showingDescription.description}`}>
            <SchoolIcon />
            <p class='text text--regular text--class'>{this.props.school}</p>
          </div>
          <div class={`spell__classes ${showingDescription.description}`}>
            <ClassIcon />
            {this.props.classes.map(dndClass => <p class='text text--regular text--class'>{dndClass}</p>)}
          </div>
        </div>
      </article>
    );
  }
}

export default Spell;
