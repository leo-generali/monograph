import { h, Component } from 'preact';
import names from './spell-names.json';

import Spell from '../Spell';
import AutoCompleteSuggestions from '../AutoCompleteSuggestions';

class SpellList extends Component {
  constructor () {
    super();
    this.removeSpellFromTome = this.removeSpellFromTome.bind(this);
    this.addSpellToTome = this.addSpellToTome.bind(this);
  }

  state = {
    input: '',
    tome: [],
    filteredNames: []
  }

  componentDidMount = () => {
    this.setState({
      names
    })
  }

  handleInput = (e) => {
    const input = e.target.value;
    // const regex = new RegExp(`/${input}/gi`);
    const regex = new RegExp(`${input}`, `gi`);

    //Check to see if the spell name exists in our Array
    //If the input is blank don't show the user all the suggestions either 👍
    const filteredNames = input === '' ? [] : names.filter( name => regex.test(name) );

    this.setState({ input, filteredNames });
  }

  addSpellToTome = (evt) => {
    evt.preventDefault();
    const input = '';
    const tome = this.state.tome;

    //Determine if the spell came from autosuggest. If
    //it did, use the auto suggested name of the spell
    const fromAutoSuggest = evt.target.nodeName === 'P';
    const spell = fromAutoSuggest ? evt.target.innerHTML : this.state.input;

    //Escape if input is zero or if the spell doesn't exist in the list
    if (spell === '') return;
    if (!names.includes(spell)) return;
    if (tome.includes(spell)) return;

    const filteredNames = [];

    this.setState({
      tome: [...this.state.tome, spell],
      input,
      filteredNames
    });
  }

  removeSpellFromTome = (spellToRemove) => {
    const tome = this.state.tome.filter(spell => {
      return spell !== spellToRemove;
    });
    this.setState({ tome });
  }

  render () {
    const spellList = [];
    for (let i = 0; i < this.state.tome.length; i++) {
      spellList.push(
        <Spell
          index={i}
          removeSpellFromTome={this.removeSpellFromTome}
          spellName={this.state.tome[i]}
        />
      );
    }

    return (
      <div class='spell-list'>
        <p>Spell List:</p>
        <form
          onSubmit={this.addSpellToTome}
        >
          <input
            type='text'
            list='names'
            value={this.state.input}
            onKeyUp={this.handleInput}
          />
          <AutoCompleteSuggestions
            filteredNames={this.state.filteredNames}
            addSpellToTome={this.addSpellToTome}
          />
          <input
            type='submit'
            value='Add to Tome'
          />
        </form>
        {spellList}
      </div>
    );
  }
}

export default SpellList;
