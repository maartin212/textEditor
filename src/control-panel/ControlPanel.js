import React from 'react';
import './ControlPanel.scss';
import saveFileHandler from '../helpers/saveFileHandler';
import clearFileHandler from '../helpers/clearFileHandler';
import ColorsSelect from './components/ColorsSelect';
import ControlPanelButton from './components/ControlPanelButton';
import * as config from '../config';
import synonymsSelectHelper from '../helpers/synonymsSelectHelper';
import SynonymsSelect from './components/SynonymsSelect';
import SizeSelect from './components/SizeSelect';

const ControlPanel = () => {

    const {colorsList, stylesModifiers, tagsModifiers, textSizes} = config

    return (
        <div id='control-panel'>
            <div id='format-actions'>
                    {Object.entries(stylesModifiers).map((modifier, index) => <ControlPanelButton key={index} type={'style'} styleType={modifier[0]} symbol={modifier[1]}/>)}
                    {Object.entries(tagsModifiers).map((modifier, index) => <ControlPanelButton key={index} type={'tag'} styleType={modifier[0]} symbol={modifier[1]}/>)}
                    <ColorsSelect colors={colorsList}/>
                    <SizeSelect {...textSizes}/>
                    <button className='format-action' type='button' id={'synonymsButton'} onClick={synonymsSelectHelper}><span>Synonyms</span></button>
                    <SynonymsSelect/>
                    <button className='format-action' type='button' id={'saveButton'} onClick={saveFileHandler}><span>Save File</span></button>
                    <button className='format-action' type='button' id={'saveButton'} onClick={clearFileHandler}><span>Clear File</span></button>
            </div>
        </div>
    );
};

export default ControlPanel;
