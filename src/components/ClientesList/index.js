import React from 'react';
import { useSelector } from 'react-redux';

export default function ClientesList() {
    
    const clientes = useSelector(state=> state.data);
    return (
        <div className="container">
            <div className="row">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" >Nome</th>
                            <th scope="col" >Idade</th>
                            <th scope="col" >Local</th>
                        </tr>
                    </thead>
                    <tbody>
                        { clientes.map((cliente) => 
                            <tr key={cliente.Codigo}>
                                <td>{cliente.Nome}</td>
                                <td>{cliente.Idade}</td>
                                <td>{cliente.Local}</td>
                            </tr>
                        ) }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
