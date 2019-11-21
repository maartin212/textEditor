import React from 'react'
import {changeWord, setSelectedWord} from "../../helpers/stateHelper";

const Modal = (props) => {
    const onClose = e => {
        props.onClose && props.onClose(e)
    };

    const getSelectedSynonym = () => {
        const list = document.getElementsByName('synonym')
        for(const el of list){
            if(el.checked) {
                return el.value
            }
        }
    }

    changeWord(props.state, props.dispatch, getSelectedSynonym)

    if(!props.show) return null
    return <div className={'synonyms-modal-container'}>
        <div className={'synonyms-modal'}>
        <div className={'synonyms-list'} id={'synonyms-list'}>{props.children}</div>
        <button onClick={changeWord}>Change</button>
        <button onClick={onClose}>Close</button>
        </div>
    </div>
}

export default Modal