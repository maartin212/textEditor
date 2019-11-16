import React from 'react';
import './FileZones.scss';
import './styles.scss';
import FileText from './components/FileText';
import wordSelectedHandler from '../helpers/wordSelectedHandler';
import textareaHandler from '../helpers/textInputHandler';
import {removeStyles} from "../helpers/stateHelper";

const FileZone = (props) => {
    document.addEventListener('selectionchange', () => wordSelectedHandler(props.state, props.dispatch));

    return (
        <div id='file-zone' className={'file-background'}>
            <div onClick={() => removeStyles(props.state, props.dispatch)}>
                delete styles
            </div>
            <div onClick={() => props.dispatch({type:'ADD_WORD', payload:{classes:'',tag:{}, key:3, value:"pedo"}})}>
                remove class
            </div>
            <div onClick={() => props.dispatch({type:'PRINT'})}>
                print
            </div>
            <div id='file'>
                <FileText dispatch={props.dispatch} state={props.state}/>
            </div>
            <textarea id='text-input' placeholder='Text Input'/>
            <button className='format-action' type='button' id={'textAreaButton'} onClick={() => textareaHandler(props.state, props.dispatch)}>Edit Text</button>
        </div>
    );
};

export default FileZone;