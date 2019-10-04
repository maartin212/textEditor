import activeElParentNode from './activeElParentNode';
import pressedButtonHandler from './pressedButtonsHandler';

const appendTaggedChild = (parentNode, tagName, activeElContainer) => {
    const taggedtext = document.createElement(tagName);
    taggedtext.innerHTML = activeElContainer.innerHTML;
    parentNode.innerHTML = '';
    parentNode.appendChild(taggedtext);
};

const saveSelectedText = (finalContainer) => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(finalContainer);
    selection.removeAllRanges();
    selection.addRange(range);
};

const tagsHandler = (tagName) => {
    let activeElContainer = activeElParentNode();
    if(!activeElContainer) return;

    let finalContainer = activeElContainer;
    const activeElContainerTagName = activeElContainer.tagName.toLowerCase();
    if(activeElContainerTagName !== 'span') {
        finalContainer = activeElContainer.parentNode;
        pressedButtonHandler(activeElContainer.tagName.toLowerCase());
        if(activeElContainerTagName === tagName){
            finalContainer.innerHTML = activeElContainer.innerHTML;
            saveSelectedText(finalContainer);
            return;
        }
    }
    pressedButtonHandler(tagName);
    appendTaggedChild(finalContainer, tagName, activeElContainer);
    saveSelectedText(finalContainer);
};

export default tagsHandler;