import activeElParentNode from './activeElParentNode';
import {addStyle} from "./stateHelper";

const sizeHandler = (state, dispatch, size) => {
    let activeElContainer = activeElParentNode();
    if(!activeElContainer) return;

    const wordId = activeElContainer.getAttribute('id')
    if(size === 'select size'){
        size = ''
    }
    addStyle(state, dispatch, {fontSize:size}, wordId)
};

export default sizeHandler;