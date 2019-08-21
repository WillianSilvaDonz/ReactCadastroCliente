import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function addClienteAction(cliente){
    return { type: 'ADD_CLIENTE', cliente };
}

export default function ClientesForm() {
    const dispatch = useDispatch();
    const [ Nome, setNome ] = useState("");
    const [ Idade, setIdade ] = useState(0);
    const [ Local, setLocal ] = useState("Chapeco");
    const [ cliente, setCliente] = useState({});

    function addCliente(event){
        event.preventDefault();
        setCliente({ 
            Nome,
            Idade,
            Local
        });

        dispatch(addClienteAction(cliente));
    }

    return (
        <div>
            <h2>Cadastro !</h2>
            <form onSubmit={addCliente} >
                <label>
                    Nome:
                    <input type="text" value={Nome} onChange={ (e)=>setNome(e.target.value) } />
                </label>
                <label>
                    Idade:
                    <input type="number" value={Idade} onChange={ (e)=>setIdade(e.target.value) } />
                </label>
                <label>
                    Local:
                    <input type="text" value={Local} onChange={ (e)=>setLocal(e.target.value) } />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}
