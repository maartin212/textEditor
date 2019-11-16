import React from 'react';
import './ControlPanel.scss';
import ColorsSelect from './components/ColorsSelect';
import ControlPanelButton from './components/ControlPanelButton';
import * as config from '../config';
import synonymsSelectHelper from '../helpers/synonymsSelectHelper';
import SynonymsSelect from './components/SynonymsSelect';
import SizeSelect from './components/SizeSelect';
import {clearState, removeStyles, saveState} from "../helpers/stateHelper";

const ControlPanel = (props) => {
    const {colorsList, stylesModifiers, tagsModifiers, textSizes} = config

    return (
        <div id='control-panel'>
            <div id='format-actions'>
                    {Object.entries(stylesModifiers).map((modifier, index) => <ControlPanelButton key={index} type={'style'} styleType={modifier[0]} symbol={modifier[1]} state={props.state} dispatch={props.dispatch}/>)}
                    {Object.entries(tagsModifiers).map((modifier, index) => <ControlPanelButton key={index} type={'tag'} styleType={modifier[0]} symbol={modifier[1]} state={props.state} dispatch={props.dispatch}/>)}
                    <ColorsSelect colors={colorsList} state={props.state} dispatch={props.dispatch}/>
                    <SizeSelect {...textSizes} state={props.state} dispatch={props.dispatch}/>
                    <button className='format-action' type='button' id={'synonymsButton'} onClick={synonymsSelectHelper}><span>Synonyms</span></button>
                    <SynonymsSelect/>
                    <button className='format-action' type='button' id={'saveButton'} onClick={() => removeStyles(props.state, props.dispatch)}><span>Remove Styles</span></button>
                    <button className='format-action' type='button' id={'saveButton'} onClick={() => saveState(props.state)}><span>Save File</span></button>
                    <button className='format-action' type='button' id={'saveButton'} onClick={clearState}><span>Clear File</span></button>
            </div>
        </div>
    );
};

export default ControlPanel;
