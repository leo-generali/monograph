import { h, Component } from 'preact';

class SpellComponents extends Component {
  render() {
    const hasMaterial = this.props.components.material ? 'spell-components__material--required' : '';
    const hasSomatic = this.props.components.somatic ? 'spell-components__somatic--required' : '';
    const hasVerbal = this.props.components.verbal ? 'spell-components__verbal--required' : '';

    return (
      <div class='spell-components'>
        <span class={`spell-components__component spell-components__material ${hasMaterial}`}>M</span>
        <span class={`spell-components__component spell-components__somatic ${hasSomatic}`}>S</span>
        <span class={`spell-components__component spell-components__verbal ${hasVerbal}`}>V</span>
      </div>
    );
  }
}

export default SpellComponents;
