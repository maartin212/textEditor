import React from 'react';
import sizeHandler from '../../helpers/sizeHandler';

const SizeSelect = (props) => {
    const {min, max} = props;

    const selectedSize = (e) => {
        sizeHandler(props.state, props.dispatch, e.target.value);
    };

    const createSizesList = (min, max) => {
        let sizesList = [];
        for (let i = min; i <= max; i++){
            sizesList.push(i);
        }
        return sizesList;
    };

    const sizesList = createSizesList(min, max)

    return <select id='font-size-select' className='format-action' onChange={selectedSize}>
        <option>select size</option>
        {sizesList.map(size => <option key={size} value={`${size}px`}>{`${size}px`}</option>)}
    </select>
}

export default SizeSelect