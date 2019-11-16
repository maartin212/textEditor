import stylesHandler from '../../helpers/stylesHandler';
import React from 'react';
import tagsHandler from '../../helpers/tagsHandler';

const ControlPanelButton = (props) => {
    const {styleType, symbol, type, state, dispatch} = props;
    let buttonFunction =  type === 'tag' ? tagsHandler : stylesHandler;
    return <button className='format-action' type='button' id={`${styleType}Button`} onClick={() => buttonFunction(state, dispatch, styleType)}>{symbol}</button>
};

export default ControlPanelButton;