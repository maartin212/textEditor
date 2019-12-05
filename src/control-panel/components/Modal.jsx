import React from 'react';
import {synonymsHandler} from '../../helpers/controlPanelHelpers';

const Modal = (props) => {
    const closeButton = e => {
        props.onClose && props.onClose(e);
    };
    const changeButton = e => {
        synonymsHandler(props.state, props.dispatch);
        closeButton(e);
    };

    if(!props.show) return null;

    return (
        <div className={'synonyms-modal-container'}>
            <div className={'synonyms-modal'}>
                <div className={'synonyms-list'} id={'synonyms-list'}>{props.children}</div>
                <button onClick={changeButton}>Change</button>
                <button onClick={closeButton}>Close</button>
            </div>
        </div>
    );
};

export default Modal;