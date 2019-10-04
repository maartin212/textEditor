import activeElParentNode from './activeElParentNode';
import isParentElSpan from './isParentElSpan';

const sizeHandler = (size) => {
    let activeElContainer = activeElParentNode();
    if(!activeElContainer) return;
    if(isParentElSpan(activeElContainer)){
        activeElContainer = activeElContainer.parentNode;
    }
    if(size === 'select size'){
        activeElContainer.style.fontSize = null;
        return;
    }
    activeElContainer.style.fontSize = size;
};

export default sizeHandler;