import { h, Component } from 'preact';

class AutoCompleteSuggestions extends Component {
  render() {
    const suggestedSpells = [];
    for (let i = 0; i < this.props.filteredNames.length; i++) {
      suggestedSpells.push(
        <p onClick={this.props.addSpellToTome}>{this.props.filteredNames[i]}</p>
      )
    }

    return (
      <div>
        {suggestedSpells}
      </div>
    );
  }
}

export default AutoCompleteSuggestions;
