import { h, Component } from 'preact';
import names from './spell-names.json';

import Spell from '../Spell';
import AutoCompleteSuggestions from '../AutoCompleteSuggestions';

import { handleArrowKeys } from '../../../helpers/form';

class SpellList extends Component {
  constructor () {
    super();
    this.removeSpellFromTome = this.removeSpellFromTome.bind(this);
    this.addSpellToTome = this.addSpellToTome.bind(this);
  }

  state = {
    input: '',
    tome: [],
    filteredNames: [],
    autoSuggestSelected: 0
  }

  // componentDidMount = () => {
  //   this.setState({
  //     names
  //   })
  // }

  // handleInput = (evt) => {
  //   const input = evt.target.value;
  //   const regex = new RegExp(`${input}`, `gi`);
  //   // const autoSuggestSelected = handleArrowKeys(evt.keyCode, this.state.autoSuggestSelected);

  //   // Check to see if the spell name exists in our Array
  //   // If the input is blank don't show the user all the suggestions either 👍
  //   const filteredNames = input === '' ? [] : names.filter( name => regex.test(name) );

  //   this.setState({ input, filteredNames });
  // }

  // addSpellToTome` = (evt) => {
  //   evt.preventDefault();
  //   const input = '';
  //   const tome = this.state.tome;
  //   const autoSuggestSelected = tome.length;

  //   //Determine if the spell came from autosuggest. If
  //   //it did, use the auto suggested name of the spell
  //   const fromAutoSuggest = evt.target.nodeName === 'P';
  //   const spell = fromAutoSuggest ? evt.target.innerHTML : names.includes(spell) ?
  //     this.state.input :
  //     this.state.filteredNames[0];

  //   //Escape if input is zero or if the spell doesn't exist in the list or if its already in our list
  //   if (spell === '') return;
  //   // if (!names.includes(spell)) return;
  //   if (tome.includes(spell)) return;

  //   const filteredNames = [];

  //   this.setState({
  //     input,
  //     tome: [...this.state.tome, spell],
  //     filteredNames,
  //     autoSuggestSelected
  //   });
  // }

  // removeSpellFromTome = (spellToRemove) => {
  //   const tome = this.state.tome.filter(spell => {
  //     return spell !== spellToRemove;
  //   });
  //   this.setState({ tome });
  // }

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
        {spellList}
      </div>
    );
  }
}

export default SpellList;
