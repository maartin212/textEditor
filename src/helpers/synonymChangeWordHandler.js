import activeElParentNode from './activeElParentNode';

const synonymChangeWordHandler = (value) => {
    const activeEl = window.getSelection();
    const activeElContainer = activeElParentNode();
    if(!activeElContainer) return;
    let excessiveStr = '';
    if(activeEl.toString().length !== activeElContainer.innerText.length){
        const lengthDiff = activeElContainer.innerText.length - activeEl.toString().length;
        excessiveStr = activeElContainer.innerText[activeElContainer.innerText.length - lengthDiff];
    }
    activeElContainer.innerText = value + excessiveStr;
};

export default synonymChangeWordHandler;