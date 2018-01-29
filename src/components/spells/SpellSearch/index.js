import { h, Component } from 'preact';

import AutoCompleteSuggestions from '../AutoCompleteSuggestions';
import Arrow from '../../shared/Icons/Arrow';

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
        <button
          class='spell-search-btn'
          type='submit'
        >
          <div class='spell-search-btn__text-container'>
            <p class='text text--header'>Add to</p>
            <p class='spell-search-btn__tome'>Tome</p>
          </div>
          <Arrow />
        </button>
      </form>
    );
  }
}

export default SpellSearch;
