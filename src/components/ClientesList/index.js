import React from 'react';
import { useSelector } from 'react-redux';

export default function ClientesList() {
    
    const clientes = useSelector(state=> state.data);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Local</th>
                    </tr>
                </thead>
                <tbody>
                    { clientes.map((cliente) => 
                        
                        <tr key={cliente.Codigo} >
                            <td>{cliente.Nome}</td>
                            <td>{cliente.Idade}</td>
                            <td>{cliente.Local}</td>
                        </tr>
                    ) }
                </tbody>
            </table>
        </div>
    );
}
