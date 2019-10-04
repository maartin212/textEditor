import stylesHandler from '../../helpers/stylesHandler';
import React from 'react';
import tagsHandler from '../../helpers/tagsHandler';

const ControlPanelButton = (modifier) => {
    const {styleType, symbol, type} = modifier;
    let buttonFunction =  type === 'tag' ? tagsHandler : stylesHandler;
    return <button className='format-action' type='button' id={`${styleType}Button`} onClick={() => buttonFunction(styleType)}>{symbol}</button>
};

export default ControlPanelButton;