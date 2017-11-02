import { createStore, combineReducers } from 'redux';

const setLanguage = (state = 'en', action) => {
    var nuevoEstado = Object.assign({}, state);
    
    switch (action.type) {
        case 'SET_LANGUAGE':
            nuevoEstado = action.language;
            return nuevoEstado;
        default:
            return state;
    }
}


const reducer = combineReducers({
    setLanguage: setLanguage
});

const store = createStore(reducer);

export default store;