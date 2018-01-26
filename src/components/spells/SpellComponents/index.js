import { h, Component } from 'preact';

class SpellComponents extends Component {
  render() {
    const hasMaterial = this.props.components.material ? 'spell-components__material--required' : '';
    const hasSomatic = this.props.components.somatic ? 'spell-components__somatic--required' : '';
    const hasVerbal = this.props.components.verbal ? 'spell-components__verbal--required' : '';

    return (
      <div class='spell-components'>
        <span class={`spell-components__component spell-components__material has-shadow ${hasMaterial}`}>M</span>
        <span class={`spell-components__component spell-components__somatic has-shadow ${hasSomatic}`}>S</span>
        <span class={`spell-components__component spell-components__verbal has-shadow ${hasVerbal}`}>V</span>
      </div>
    );
  }
}

export default SpellComponents;
