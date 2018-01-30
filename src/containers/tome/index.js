import { h, Component } from 'preact';

import names from '../../data/spell-names.json';
import spells from '../../data/spells.json';

import SpellList from '../../components/spells/SpellList';
import SpellSearch from '../../components/spells/SpellSearch';
import SpellLevel from '../../components/spells/SpellLevel';

class Tome extends Component {
  constructor () {
    super();
    this.addSpellToTome = this.addSpellToTome.bind(this);
    this.removeSpellFromTome = this.removeSpellFromTome.bind(this);
    this.increaseSpellLevel = this.increaseSpellLevel.bind(this);
    this.decreaseSpellLevel = this.decreaseSpellLevel.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  state = {
    input: '',
    tome: [],
    filteredNames: [],
    autoSuggestSelected: -1,
    spellLevel: 0
  }

  handleInput = (evt) => {
    const input = evt.target.value;
    const regex = new RegExp(`${input}`, `gi`);
    let autoSuggestSelected = this.state.autoSuggestSelected;
    // const autoSuggestSelected = handleArrowKeys(evt.keyCode, this.state.autoSuggestSelected);

    // Check to see if the spell name exists in our Array
    // If the input is blank don't show the user all the suggestions either 👍
    const filteredNames = input === '' ? [] : names.filter(name => regex.test(name));

    // This needs to be refactored
    if (evt.keyCode === 38 && autoSuggestSelected > -1) {
      autoSuggestSelected--
    } else if (evt.keyCode === 40 && filteredNames.length - 1 > autoSuggestSelected) {
      autoSuggestSelected++;
    }

    this.setState({ input, filteredNames, autoSuggestSelected });
  }

  addSpellToTome = (evt) => {
    evt.preventDefault();
    const input = '';
    const tome = this.state.tome;
    const autoSuggestSelected = -1;
    const selectionToAdd = this.state.autoSuggestSelected !== -1 ? this.state.autoSuggestSelected : 0;

    // Determine if the spell came from autosuggest. If
    // it did, use the auto suggested name of the spell
    const fromAutoSuggest = evt.target.nodeName === 'P';
    const spellInput = fromAutoSuggest ? evt.target.innerHTML : this.state.filteredNames[selectionToAdd];

    const regex = new RegExp(`${spellInput}`, `gi`);
    const spell = spells.filter(spell => regex.test(spell.name))[0];

    // Escape if input is zero or if the spell doesn't exist in the list or if its already in our list
    if (spell === '') return;
    // if (!names.includes(spell)) return;
    if (this.state.input === '') return;
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

  decreaseSpellLevel = () => {
    const spellLevel = this.state.spellLevel > 0 ? this.state.spellLevel - 1 : 0;
    this.setState({
      spellLevel
    });
  };

  increaseSpellLevel = () => {
    const spellLevel = this.state.spellLevel < 9 ? this.state.spellLevel + 1 : 9;
    this.setState({
      spellLevel
    });
  };

  render () {
    let spellLists = [];
    const tome = this.state.tome;

    for (let i = 0; i <= this.state.spellLevel; i++) {
      spellLists.push(<SpellList
        level={i}
        spells={tome.filter(spell => parseInt(spell.level) === i)}
        removeSpellFromTome={this.removeSpellFromTome}
      />);
    }

    return (
      <div class='container card has-shadow tome'>
        <div class='tome__info-row'>
          <SpellSearch
            addSpellToTome={this.addSpellToTome}
            handleInput={this.handleInput}
            input={this.state.input}
            names={names}
            filteredNames={this.state.filteredNames}
            autoSuggestSelected={this.state.autoSuggestSelected}
          />
          <SpellLevel 
            decreaseSpellLevel={this.decreaseSpellLevel}
            increaseSpellLevel={this.increaseSpellLevel}
            spellLevel={this.state.spellLevel}
          />
        </div>
        {spellLists}
      </div>
    )
  }
}

export default Tome;
