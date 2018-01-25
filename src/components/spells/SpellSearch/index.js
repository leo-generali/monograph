import { h, Component } from 'preact';

import AutoCompleteSuggestions from '../AutoCompleteSuggestions';

class SpellSearch extends Component {
  state = {
    input: '',
    autoSuggestSelected: 0
  }

  render () {
    return (
      <form
        onSubmit={this.props.addSpellToTome}
      >
        <input
          type='text'
          list='names'
          value={this.props.input}
          onKeyUp={this.props.handleInput}
        />
        <AutoCompleteSuggestions
          filteredNames={this.props.filteredNames}
          addSpellToTome={this.props.addSpellToTome}
        />
        <input
          type='submit'
          value='Add to Tome'
        />
      </form>
    );
  }
}

export default SpellSearch;
