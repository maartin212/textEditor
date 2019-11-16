import activeElParentNode from "./activeElParentNode";
import {addStyle} from "./stateHelper";

const colorHandler = (state, dispatch, color) => {
    let activeElContainer = activeElParentNode();
    if(!activeElContainer) return;

    const wordId = activeElContainer.getAttribute('id')
    if(color === 'colors'){
        color = ''
    }
    addStyle(state, dispatch, {color:color}, wordId)
};

export default colorHandler;