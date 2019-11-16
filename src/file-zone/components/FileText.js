import React, {useEffect} from 'react';
import getMockText from '../../text.service';
import TextFactory from './TextFactory'
import {addText, loadState} from '../../helpers/stateHelper'

const FileText = (props) => {

    useEffect(() => {
        loadState(props.dispatch) ||
        getMockText()
            .then(res => addText(props.state, props.dispatch, res))
            .catch(e => addText(props.state, props.dispatch, 'Error: ' + e));
        }, [])

    return <TextFactory state={props.state}/>
};

export default FileText;