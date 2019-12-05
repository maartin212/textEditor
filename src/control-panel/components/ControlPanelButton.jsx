import React from 'react';
import {buttonHandler} from '../../helpers/controlPanelHelpers';

const ControlPanelButton = (props) => {
    const {activeStyles, activeTag, styleType, symbol, type, state, dispatch} = props;
    const isClicked = activeStyles.includes(styleType) || activeTag === styleType;
    const clicked = isClicked ? 'clicked' : '';
    const cls = `format-action ${clicked}`;

    return (
        <button className={cls} onClick={() => buttonHandler(state, dispatch, type, styleType)}>{symbol}</button>
    );
};

export default ControlPanelButton;