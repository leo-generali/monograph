import { h, Component } from 'preact';
import names from './spell-names.json';
import spells from './spells.json';

import SpellLevel from '../../components/spells/SpellLevel';
import SpellSearch from '../../components/spells/SpellSearch';

class Tome extends Component {
  constructor () {
    super();
    this.addSpellToTome = this.addSpellToTome.bind(this);
    this.removeSpellFromTome = this.removeSpellFromTome.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  state = {
    input: '',
    tome: [],
    filteredNames: [],
    names: []
  }

  componentDidMount = () => {
    this.setState({
      names
    })
  }

  handleInput = (evt) => {
    const input = evt.target.value;
    const regex = new RegExp(`${input}`, `gi`);
    // const autoSuggestSelected = handleArrowKeys(evt.keyCode, this.state.autoSuggestSelected);

    // Check to see if the spell name exists in our Array
    // If the input is blank don't show the user all the suggestions either 👍
    const filteredNames = input === '' ? [] : this.state.names.filter(name => regex.test(name));

    this.setState({ input, filteredNames });
  }

  addSpellToTome = (evt) => {
    evt.preventDefault();
    const input = '';
    const tome = this.state.tome;
    const autoSuggestSelected = tome.length;

    // Determine if the spell came from autosuggest. If
    // it did, use the auto suggested name of the spell
    const fromAutoSuggest = evt.target.nodeName === 'P';
    const spellInput = fromAutoSuggest ? evt.target.innerHTML : this.state.filteredNames[0];

    const regex = new RegExp(`${spellInput}`, `gi`);
    const spell = spells.filter(spell => regex.test(spell.name))[0];

    // Escape if input is zero or if the spell doesn't exist in the list or if its already in our list
    if (spell === '') return;
    // if (!names.includes(spell)) return;
    if (tome.includes(spell)) return;

    const filteredNames = [];

    this.setState({
      input,
      tome: [...this.state.tome, spell],
      filteredNames,
      autoSuggestSelected
    });
  }

  removeSpellFromTome = (spellToRemove) => {
    const tome = this.state.tome.filter(spell => {
      return spell.name !== spellToRemove;
    });
    this.setState({ tome });
  }

  render () {
    let spellLevels = [];
    const tome = this.state.tome;

    for (let i = 0; i <= 8; i++) {
      spellLevels.push(<SpellLevel  
        level={i}
        spells={tome.filter(spell => parseInt(spell.level) === i)} 
        removeSpellFromTome={this.removeSpellFromTome}
      />);
    }

    return (
      <div class='profile'>
        <SpellSearch 
          addSpellToTome={this.addSpellToTome}
          handleInput={this.handleInput}
          input={this.state.input}
          names={this.state.names}
          filteredNames={this.state.filteredNames}
        />
        {spellLevels}
      </div>
    )
  }
}

export default Tome;
