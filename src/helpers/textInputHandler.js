import {addText, deleteState} from "./stateHelper";

const textInputHandler = (state, dispatch) => {
    const text = document.getElementById('text-input');
    deleteState(state, dispatch)
    addText(state, dispatch, text.value)
};

export default textInputHandler;