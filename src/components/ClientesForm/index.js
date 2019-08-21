import React, { useState, useEffect, useCallback } from 'react';
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

    const addCliente = (event) =>{
        event.preventDefault();

        dispatch(addClienteAction({ Nome, Idade, Local }));
    };

    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4 text-center">Cadastro!</h1>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <form onSubmit={addCliente} >
                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" id="nome" className="form-control" value={Nome} onChange={ (e)=>setNome(e.target.value) } aria-describedby="nomeHelp" placeholder="Nome" />
                            </div>
                            <div className="form-group">
                                <label>Idade</label>
                                <input type="number" id="idade" className="form-control" value={Idade} onChange={ (e)=>setIdade(e.target.value) } aria-describedby="nomeHelp" placeholder="Idade" />
                            </div>
                            <div className="form-group">
                                <label>Local</label>
                                <input type="text" className="form-control" value={Local} onChange={ (e)=>setLocal(e.target.value) } aria-describedby="nomeHelp" placeholder="Local" />
                            </div>
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
