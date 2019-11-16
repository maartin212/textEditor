import activeElParentNode from './activeElParentNode';
import pressedButtonHandler from './pressedButtonsHandler';
import {addClass} from '../helpers/stateHelper'

const stylesHandler = (state, dispatch, styleType) => {
    let activeElContainer = activeElParentNode();
    if(!activeElContainer) return;

    const wordId = activeElContainer.getAttribute('id')
    pressedButtonHandler(styleType);
    addClass(state, dispatch, styleType, wordId)
};

export default stylesHandler;