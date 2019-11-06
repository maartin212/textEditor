import React from 'react';
import colorHandler from '../../helpers/colorHandler';

const ColorsSelect = (props) => {
    const selectedColor = (e) => {
        colorHandler(e.target.value);
    };

    return <select id='color-select' className='format-action' onChange={selectedColor}>
        {props.colors.map(color => <option key={color} value={color}>{color}</option>)}
    </select>
}

export default ColorsSelect