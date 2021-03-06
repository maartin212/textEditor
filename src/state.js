export const initialState = {wordId:'', text:[]};

function reducer (state, action) {
    switch (action.type) {
        case 'ADD_WORD':
            state.text[action.payload.key] = {...action.payload};
            return {...state};
        case 'ADD_CLASS':
            state.text[action.payload.key].classes = action.payload.classes;
            return {...state};
        case 'ADD_TAG':
            state.text[action.payload.key].tag = action.payload.tag;
            return {...state};
        case 'ADD_STYLE':
            state.text[action.payload.key].styles = action.payload.styles;
            return {...state};
        case 'CHANGE_WORD':
            state.text[action.payload.key].value = action.payload.value;
            return {...state};
        case 'SET_SELECTED_WORD':
            if(state.wordId === action.payload) return state;
            return {...state, wordId:action.payload};
        case 'SET_STATE':
            return {wordId:'', text:action.payload};
        case 'PRINT':
            console.log(state);
            return {...state};
        default:
            return state;
    }
}

export default reducer;
