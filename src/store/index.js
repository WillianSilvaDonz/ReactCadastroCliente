import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [
        {
            Codigo: 1,
            Nome: 'Willian',
            Idade: '24',
            Local: 'Chapeco'
        }
    ]
}

function clientes(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_CLIENTE':
            action.cliente.Codigo = state.data[state.data.length-1].Codigo + 1;
            return { ...state, data: [ ...state.data, action.cliente ] };
        default:
            return state;
    }
}

const store = createStore(clientes);

export default store;