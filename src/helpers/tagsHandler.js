import activeElParentNode from './activeElParentNode';
import pressedButtonHandler from './pressedButtonsHandler';
import isParentElSpan from "./isParentElSpan";
import {addTag} from "./stateHelper";

// const appendTaggedChild = (parentNode, tagName, activeElContainer) => {
//     const taggedtext = document.createElement(tagName);
//     taggedtext.innerHTML = activeElContainer.innerHTML;
//     parentNode.innerHTML = '';
//     parentNode.appendChild(taggedtext);
// };

const saveSelectedText = (finalContainer, wordId) => {
    console.log(finalContainer)
    const range = document.createRange();
    const selection = window.getSelection();
    console.log(selection)
    range.selectNodeContents(finalContainer);
    selection.removeAllRanges();
    selection.addRange(range);
};

const tagsHandler = (state, dispatch, tagName) => {
    console.log(state)
    let activeElContainer = activeElParentNode();
    if(!activeElContainer) return;
    const wordId = activeElContainer.getAttribute('id')
    addTag(state, dispatch, tagName, wordId)

    // saveSelectedText(activeElContainer, wordId);

    // if(!isParentElSpan(activeElContainer)){
    //     activeElContainer = activeElContainer.parentNode;
    // }
    //
    // let finalContainer = activeElContainer;
    // const activeElContainerTagName = activeElContainer.tagName.toLowerCase();
    // if(activeElContainerTagName !== 'span') {
    //     finalContainer = activeElContainer.parentNode;
    //     pressedButtonHandler(activeElContainer.tagName.toLowerCase());
    //     if(activeElContainerTagName === tagName){
    //         finalContainer.innerHTML = activeElContainer.innerHTML;
    //         saveSelectedText(finalContainer);
    //         return;
    //     }
    // }
    // pressedButtonHandler(tagName);
    // appendTaggedChild(finalContainer, tagName, activeElContainer);
};

export default tagsHandler;