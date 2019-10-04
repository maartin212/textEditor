import activeElParentNode from './activeElParentNode';
import pressedButtonHandler from './pressedButtonsHandler';
import isParentElSpan from './isParentElSpan';

const removeClickedButtons = () => {
    const buttonsList = document.getElementById('control-panel').firstChild.childNodes;
    Object.entries(buttonsList).map(button => button[1].classList.remove('clicked'));
};

const emptySynonymsSelect = () => {
    const synonymsSelect = document.getElementById('synonyms-select');
    const synonymsFirstItem = synonymsSelect.childNodes[0];
    synonymsSelect.innerHTML = '';
    synonymsSelect.appendChild(synonymsFirstItem);
};

const paintClickedButtons = (activeElContainer) => {
    if(isParentElSpan(activeElContainer)){
        pressedButtonHandler(activeElContainer.tagName.toLowerCase(), true);
        activeElContainer= activeElContainer.parentNode;
    }
    if(!activeElContainer.className) return;
    activeElContainer.className.split(' ').map(styleType => pressedButtonHandler(styleType));
};

const setSelects = (style) => {
    const key = style[0].slice(0,-1);
    document.getElementById(`${key}-select`).value = style[1];
};

const setSelectedOptions = (activeElContainer) => {
    if(isParentElSpan(activeElContainer)){
        activeElContainer = activeElContainer.parentNode;
    }
    const wordStyleAttribute = activeElContainer.getAttribute('style');
    if(!wordStyleAttribute) return;
    let styles = wordStyleAttribute.split(';').filter(style => style !== '');
    styles = styles.map(style => style.trim());
    styles = styles.map(style => style.split(' ')).filter(style => style !== '');
    styles.map(style => setSelects(style));
};

const wordSelectedHandler = () => {
    const activeElContainer = activeElParentNode();
    if(!activeElContainer){
        document.getElementById('color-select').getElementsByTagName('option')[0].selected = 'selected';
        document.getElementById('font-size-select').getElementsByTagName('option')[0].selected = 'selected';
        emptySynonymsSelect();
        removeClickedButtons();
        return;
    }
    paintClickedButtons(activeElContainer);
    setSelectedOptions(activeElContainer);
};


export default wordSelectedHandler;