import React, {Component} from 'react';
import sizeHandler from '../../helpers/sizeHandler';

export default class sizeSelect extends Component {
    selectedSize = (e) => {
        sizeHandler(e.target.value);
    };

    createSizesList = (min, max) => {
        let sizesList = [];
        for (let i = min; i <= max; i++){
            sizesList.push(i);
        }
        return sizesList;
    };

    render(){
        const {min, max} = this.props;
        const sizesList = this.createSizesList(min, max);

        return <select id='font-size-select' className='format-action' onChange={this.selectedSize}>
            <option>select size</option>
            {sizesList.map(size => <option key={size} value={`${size}px`}>{`${size}px`}</option>)}
        </select>
    };
};