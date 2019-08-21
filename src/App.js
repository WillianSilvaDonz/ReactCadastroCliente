import React from 'react';
import {  Provider } from "react-redux";

import store from './store';
import ClientesList from './components/ClientesList';
import ClientesForm from './components/ClientesForm';

function App() {
    return (
        <Provider store={store} >
            <ClientesForm />
            <ClientesList />
        </Provider>
    );
}

export default App;
