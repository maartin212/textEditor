export const addText = (state, dispatch, text) => {
    if(!text) return
    text = text.trim()
    const words = text.split(' ')
    words.map((word, index) => dispatch({type: 'ADD_WORD', payload: {classes:[], styles:{}, tag:'', key:index, value:word}}))
}

export const setSelectedWord = (state, dispatch, wordId) => {
    // if(state.wordId === wordId) return
    dispatch({type:'SET_SELECTED_WORD', payload:wordId})
}

export const addClass = (state, dispatch, classToAdd, wordId) => {
    const word = state.text[wordId]
    const wordClasses = word.classes
    const index = wordClasses.indexOf(classToAdd)
    index !== -1 ? wordClasses.splice(index, 1) : wordClasses.push(classToAdd)
    dispatch({type:'ADD_CLASS', payload:{key: wordId, classes: wordClasses}})
}

export const addTag = (state, dispatch, tagToAdd, wordId) => {
    const word = state.text[wordId]
    const wordTag = word.tag
    const finalTag = wordTag !== tagToAdd ? tagToAdd : ''
    dispatch({type:'ADD_TAG', payload:{key:wordId, tag:finalTag}})
}

export const addStyle = (state, dispatch, stylesToAdd, wordId) => {
    const word = state.text[wordId]
    const wordStyles = word.styles

    dispatch({type:'ADD_STYLE', payload:{key:wordId, styles:{...wordStyles, ...stylesToAdd}}})

}

export const removeStyles = (state, dispatch) => {
    console.log("dis", dispatch)
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

export const clearState = (dispatch) => {
    window.localStorage.removeItem('savedState');
    document.location.reload();
}