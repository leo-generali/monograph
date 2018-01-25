import { h, Component } from 'preact';

import Spell from '../Spell';

class SpellList extends Component {
  constructor () {
    super();
    this.removeSpellFromTome = this.removeSpellFromTome.bind(this);
  }

  state = {
    input: 'test',
    tome: []
  }

  handleInput = (e) => {
    const input = e.target.value;
    this.setState({ input });
  }

  addSpellToTome = (evt) => {
    evt.preventDefault();
    const input = '';
    if (this.state.input === '') return;
    this.setState({
      tome: [...this.state.tome, this.state.input],
      input
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
            value={this.state.input}
            onKeyUp={this.handleInput}
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
