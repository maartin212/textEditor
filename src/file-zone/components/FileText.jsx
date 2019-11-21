import React, {useEffect} from 'react';
import getMockText from '../../text.service';
import TextFactory from './TextFactory'
import {addText, loadState} from '../../helpers/stateHelper'

const FileText = (props) => {

    const {state, dispatch} = props

    useEffect(() => {
        loadState(dispatch) ||
        getMockText()
            .then(res => addText(state, dispatch, res))
            .catch(e => addText(state, dispatch, 'Error: ' + e));
        }, [])

    return <div id='file'>
        <TextFactory {...{state}}/>
    </div>
};

export default FileText;