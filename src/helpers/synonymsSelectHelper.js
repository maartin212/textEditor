import activeElParentNode from './activeElParentNode';
import {synonymsAPI} from '../config';

const createOptionElement = (value) => {
    const optionEl = document.createElement('option');
    optionEl.setAttribute('value', value);
    optionEl.innerText = value;
    return optionEl;
};

const populateSynonymsSelect = (synonymsObject) => {
    const synonymsSelect = document.getElementById('synonyms-select');
    const synonymsFirstItem = synonymsSelect.childNodes[0];
    synonymsSelect.innerHTML = '';
    synonymsSelect.appendChild(synonymsFirstItem);
    synonymsObject.map(synonymObj => synonymsSelect.appendChild(createOptionElement(synonymObj.word)));
};

const synonymsSelectHelper = () => {
    const activeEl = window.getSelection();
    if(!activeElParentNode()) return;
    fetch(synonymsAPI+activeEl.toString())
        .then(res => res.json())
        .then(jsonRes => populateSynonymsSelect(jsonRes));
};

window.addEventListener('load', synonymsSelectHelper);

export default synonymsSelectHelper;