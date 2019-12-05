import React, {useState, useEffect} from 'react';
import './ControlPanel.scss';
import ColorsSelect from './components/ColorsSelect';
import ControlPanelButton from './components/ControlPanelButton';
import * as config from '../config';
import SynonymsSelect from './components/SynonymsSelect';
import SizeSelect from './components/SizeSelect';
import {removeStyles, saveState, clearState} from "../helpers/stateHelper";

const ControlPanel = (props) => {
    const {colorsList, Modifiers, textSizes} = config;
    const {state, dispatch} = {...props};
    const {wordId, text} = {...state};
    const [classes, setClasses] = useState([]);
    const [styles, setStyles] = useState({});
    const [tag, setTag] = useState('');

    useEffect(() => {
        const emptyStyles = {classes:[], styles:{}, tag:''};
        const word = text[wordId];
        const {classes, styles, tag} = word || emptyStyles;
        setClasses(classes);
        setStyles(styles);
        setTag(tag);
    }, [state]);

    return (
        <div id='control-panel'>
            <div id='format-actions'>
                {Modifiers.map(({styleType, symbol, type}, index) => <ControlPanelButton key={index} type={type} activeStyles={classes} activeTag={tag} styleType={styleType} symbol={symbol} {...{state, dispatch}}/>)}
                <ColorsSelect colors={colorsList} activeColor={styles.color ? styles.color : 'colors'} {...{state, dispatch}}/>
                <SizeSelect {...textSizes} activeSize={styles.fontSize} {...{state, dispatch}}/>
                <SynonymsSelect {...{state, dispatch}}/>
                <button className='format-action' type='button' id={'removeButton'} onClick={() => removeStyles(state, dispatch)}><span>Remove Styles</span></button>
                <button className='format-action' type='button' id={'saveButton'} onClick={() => saveState(state)}><span>Save File</span></button>
                <button className='format-action' type='button' id={'clearButton'} onClick={() => clearState(state, dispatch)}><span>Clear File</span></button>
            </div>
        </div>
    );
};

export default ControlPanel;
