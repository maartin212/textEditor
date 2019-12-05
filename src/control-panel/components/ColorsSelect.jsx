import React from 'react';
import {colorHandler} from '../../helpers/controlPanelHelpers';

const ColorsSelect = (props) => {
    const {state, dispatch} = props;
    const selectedColor = (e) => {
        colorHandler(state, dispatch, e.target.value);
    };

    return (
        <select className='format-action' onChange={selectedColor}>
            {props.colors.map(color =>
                <option key={color} value={color} selected={color===props.activeColor}>{color}</option>
            )}
        </select>
    );
};

export default ColorsSelect;