import { h, Component } from 'preact';

import AutoCompleteSuggestions from '../AutoCompleteSuggestions';
import Arrow from '../../shared/Icons/Arrow';

class SpellSearch extends Component {
  state = {
    input: ''
  }

  render () {
    return (
      <div class='spell-search-container'>
        <form
          class='spell-search'
          onSubmit={this.props.addSpellToTome}
        >
          <input
            class='spell-search__input'
            type='text'
            list='names'
            value={this.props.input}
            onKeyUp={this.props.handleInput}
          />
          <button
            class='spell-search-btn'
            type='submit'
          >
            <div class='spell-search-btn__text-container'>
              <p class='text text--header spell-search-btn__add-to'>Add to</p>
              <p class='spell-search-btn__tome'>Tome</p>
            </div>
            <Arrow />
          </button>
        </form>
        <AutoCompleteSuggestions
          input={this.props.input}
          filteredNames={this.props.filteredNames}
          addSpellToTome={this.props.addSpellToTome}
          autoSuggestSelected={this.props.autoSuggestSelected}
        />
      </div>
    );
  }
}

export default SpellSearch;
