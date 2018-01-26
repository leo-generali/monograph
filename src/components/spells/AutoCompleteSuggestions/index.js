import { h, Component } from 'preact';

class AutoCompleteSuggestions extends Component {
  addSelectedState = (num) => {
    const isSelected = this.props.autoSuggestSelected === num ? 'auto-complete__selected-spell' : '';
    return isSelected;
  }

  render () {
    const suggestedSpells = [];
    const filteredNames = this.props.filteredNames;
    const asOn = this.props.input.length >= 2 ? filteredNames.length > 0 ? 'auto-complete--on' : 'auto-complete--off' : 'auto-complete--off';

    for (let i = 0; i < filteredNames.length; i++) {
      suggestedSpells.push(
        <p class={`text text--bold ${this.addSelectedState(i)}`}  onClick={this.props.addSpellToTome}>{filteredNames[i]}</p>
      )
    }

    return (
      <div class={`card has-shadow ${asOn}`} >
        {suggestedSpells}
      </div>
    );
  }
}

export default AutoCompleteSuggestions;
