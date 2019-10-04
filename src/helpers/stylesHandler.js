import activeElParentNode from './activeElParentNode';
import pressedButtonHandler from './pressedButtonsHandler';
import isParentElSpan from './isParentElSpan';

const stylesHandler = (styleType) => {
    let activeElContainer = activeElParentNode();
    if(!activeElContainer) return;
    if(isParentElSpan(activeElContainer)){
        activeElContainer = activeElContainer.parentNode;
    }
    pressedButtonHandler(styleType);
    activeElContainer.classList.toggle(styleType);
};

export default stylesHandler;