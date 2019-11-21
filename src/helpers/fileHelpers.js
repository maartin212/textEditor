import {addText, deleteState, setSelectedWord} from "./stateHelper";

export const activeElNode = () => {
    const activeEl = window.getSelection();

    if(!activeEl || !activeEl.anchorNode || !activeEl.toString()) return;
    return activeEl.anchorNode.parentElement;
};

export const textInputHandler = (state, dispatch) => {
    const text = document.getElementById('text-input');
    deleteState(state, dispatch)
    addText(state, dispatch, text.value)
};

export const wordSelectedHandler = (state, dispatch) => {
    const activeElContainer = activeElNode();
    if(!activeElContainer){
        setSelectedWord(state, dispatch, '')
        return
    }
    setSelectedWord(state, dispatch)
};