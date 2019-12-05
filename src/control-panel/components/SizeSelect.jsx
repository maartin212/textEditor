import React from 'react';
import {sizeHandler} from '../../helpers/controlPanelHelpers';

const SizeSelect = (props) => {
    const {state, dispatch, min, max} = props;
    const selectedSize = (e) => {
        sizeHandler(state, dispatch, e.target.value);
    };
    const createSizesList = (min, max) => {
        let sizesList = [];
        for (let i = min; i <= max; i++){
            sizesList.push(i);
        }
        return sizesList;
    };
    const sizesList = createSizesList(min, max);

    return (
        <select className='format-action' onChange={selectedSize}>
            <option>select size</option>
            {sizesList.map(size =>
                <option key={size} value={`${size}px`} selected={`${size}px`===props.activeSize}>{`${size}px`}</option>
            )}
        </select>
    );
};

export default SizeSelect;