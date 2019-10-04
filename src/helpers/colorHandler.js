import activeElParentNode from "./activeElParentNode";
import isParentElSpan from "./isParentElSpan";

const colorHandler = (color) => {
    let activeElContainer = activeElParentNode();
    if(!activeElContainer) return;
    if(isParentElSpan(activeElContainer)){
        activeElContainer = activeElContainer.parentNode;
    }
    if(color === 'colors'){
        activeElContainer.style.color = null;
        return;
    }
    activeElContainer.style.color = color;

};

export default colorHandler;