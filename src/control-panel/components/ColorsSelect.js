import React, {Component} from 'react';
import colorHandler from '../../helpers/colorHandler';

export default class ColorsSelect extends Component {
    selectedColor = (e) => {
        colorHandler(e.target.value);
    };

    render(){
        return <select id='color-select' className='format-action' onChange={this.selectedColor}>
            {this.props.colors.map(color => <option key={color} value={color}>{color}</option>)}
        </select>
    };
};