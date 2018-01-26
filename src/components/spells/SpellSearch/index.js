import { h, Component } from 'preact';

import AutoCompleteSuggestions from '../AutoCompleteSuggestions';

class SpellSearch extends Component {
  state = {
    input: ''
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
          input={this.props.input}
          filteredNames={this.props.filteredNames}
          addSpellToTome={this.props.addSpellToTome}
          autoSuggestSelected={this.props.autoSuggestSelected}
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
