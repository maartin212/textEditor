const activeElParentNode = () => {
    const activeEl = window.getSelection();

    if(!activeEl || !activeEl.anchorNode || !activeEl.toString()) return;
    let activeElContainer = activeEl.anchorNode.parentElement;
    const nodeTextSelection = activeEl.focusNode;
    if(nodeTextSelection.tagName){
        activeElContainer = nodeTextSelection.firstChild.tagName ? nodeTextSelection.firstChild : nodeTextSelection;
    }
    return activeElContainer;
};

export default activeElParentNode;