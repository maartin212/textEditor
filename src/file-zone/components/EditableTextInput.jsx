import React from "react";
import {textInputHandler} from "../../helpers/fileHelpers";

const EditableTextInput = (props) => {
    const {state, dispatch} = props;

    return (
        <>
            <textarea id='text-input' placeholder='Text Input'/>
            <button className='format-action' onClick={() => textInputHandler(state, dispatch)}>Edit Text</button>
        </>
    );
};

export default EditableTextInput;