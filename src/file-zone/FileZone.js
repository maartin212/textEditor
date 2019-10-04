import React from 'react';
import './FileZones.scss';
import './styles.scss';
import FileText from './components/FileText';
import wordSelectedHandler from '../helpers/wordSelectedHandler';
import textareaHandler from '../helpers/textInputHandler';

const FileZone = () => {
    document.addEventListener('selectionchange', wordSelectedHandler);

    return (
        <div id='file-zone' className={'file-background'}>
            <div id='file'>
                <FileText/>
            </div>
            <textarea id='text-input' placeholder='Text Input'/>
            <button className='format-action' type='button' id={'textAreaButton'} onClick={textareaHandler}>Edit Text</button>
        </div>
    );
};

export default FileZone;