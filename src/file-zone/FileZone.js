import React, {useEffect} from 'react';
import './FileZones.scss';
import './styles.scss';
import FileText from './components/FileText';
import {wordSelectedHandler} from '../helpers/fileHelpers';
import EditableTextInput from './components/EditableTextInput'

const FileZone = (props) => {

    const {state, dispatch} = props

    useEffect(() => {
    }, [])

    document.addEventListener('selectionchange', () => wordSelectedHandler(state, dispatch));

    return (
        <div id='file-zone' className={'file-background'}>
            {/*<div onClick={() => getSelectedWordId()}>*/}
            {/*    wordId*/}
            {/*</div>*/}
            {/*<div onClick={() => props.dispatch({type:'PRINT'})}>*/}
            {/*    print*/}
            {/*</div>*/}
            <FileText {...{state, dispatch}}/>
            <EditableTextInput {...{state, dispatch}}/>
        </div>
    );
};

export default FileZone;