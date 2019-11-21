import {activeElNode} from './fileHelpers';
import {addClass, addStyle, addTag} from "./stateHelper";

export const buttonHandler = (state, dispatch, type, value) => {
    let activeElContainer = activeElNode();
    if(!activeElContainer) return;
    type === 'tag' ? addTag(state, dispatch, value) : addClass(state, dispatch, value)
};

export const colorHandler = (state, dispatch, color) => {
    let activeElContainer = activeElNode();
    if(!activeElContainer) return;

    if(color === 'colors'){
        color = ''
    }
    addStyle(state, dispatch, {color:color})
};

export const sizeHandler = (state, dispatch, size) => {
    let activeElContainer = activeElNode();
    if(!activeElContainer) return;

    if(size === 'select size'){
        size = ''
    }
    addStyle(state, dispatch, {fontSize:size})
};