import {activeElNode} from "./fileHelpers";

export const setSelectedWord = (state, dispatch, wordId = getSelectedWordId()) => {
    dispatch({type:'SET_SELECTED_WORD', payload:wordId})
}

export const getSelectedWord = (state, dispatch, wordId = getSelectedWordId()) => {
    dispatch({type:'SET_SELECTED_WORD', payload:wordId})
}

export const getSelectedWordId = () => {
    let activeElContainer = activeElNode();
    if(!activeElContainer) return;
    return activeElContainer.getAttribute('id')
}

export const addText = (state, dispatch, text) => {
    if(!text) return
    text = text.trim()
    const words = text.split(' ')
    words.map((word, index) => dispatch({type: 'ADD_WORD', payload: {classes:[], styles:{}, tag:'', key:index, value:word}}))
}

export const addClass = (state, dispatch, classToAdd) => {
    const wordId = getSelectedWordId()
    const word = state.text[wordId]
    const wordClasses = word.classes
    const index = wordClasses.indexOf(classToAdd)
    index !== -1 ? wordClasses.splice(index, 1) : wordClasses.push(classToAdd)
    dispatch({type:'ADD_CLASS', payload:{key: wordId, classes: wordClasses}})
}

export const addTag = (state, dispatch, tagToAdd) => {

    const el = activeElNode()
    const el_id = el.getAttribute('id')
    console.log(el_id)
    console.log(window.getSelection())
    const range = document.createRange();
    console.log("tyep", range.startContainer)
    // range.setStart(el, el.)
    const selection = window.getSelection();



    const wordId = getSelectedWordId()
    const word = state.text[wordId]
    const wordTag = word.tag
    const finalTag = wordTag !== tagToAdd ? tagToAdd : ''
    dispatch({type:'ADD_TAG', payload:{key:wordId, tag:finalTag}})

    const final_el = document.getElementById(el_id)
    console.log(final_el)
    range.selectNodeContents(document.getElementById(el_id));
    selection.removeAllRanges();
    selection.addRange(range);
    // selection.addRange(range.startContainer = `${word.tag}#${el_id}`;
    console.log(selection)
    console.log(range)
}

export const addStyle = (state, dispatch, stylesToAdd) => {
    const wordId = getSelectedWordId()
    const word = state.text[wordId]
    const wordStyles = word.styles

    dispatch({type:'ADD_STYLE', payload:{key:wordId, styles:{...wordStyles, ...stylesToAdd}}})
}

export const changeWord = (state, dispatch, value) => {
    const wordId = getSelectedWordId()
    if(!wordId) return;
    dispatch({type:'CHANGE_WORD', payload:{key:wordId, value:value}})
}

export const removeStyles = (state, dispatch) => {
    state.text.map((word, index) => dispatch({type: 'ADD_WORD', payload: {classes:[], styles:{}, tag:'', key:index, value:word.value}}))
}

export const deleteState = (state, dispatch) => {
    dispatch({type:'SET_STATE', payload:[]})
}

export const saveState = (state) => {
    window.localStorage.setItem('savedState', JSON.stringify(state.text))
}

export const loadState = (dispatch) => {
    const loadedState = window.localStorage.getItem('savedState')
    loadedState && dispatch({type:'SET_STATE', payload:JSON.parse(loadedState)})
    return loadedState
}

export const clearState = (state, dispatch) => {
    window.localStorage.removeItem('savedState');
    removeStyles(state, dispatch)
}