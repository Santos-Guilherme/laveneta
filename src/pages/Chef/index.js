import React, { useState } from 'react';

function Chef() {
    const [pedidos, setPedidos] = useState([
        { id: 1, mesa: 4, nome: "Frango com Catupiry"},
        { id: 2, mesa: 5, nome: "Mussarela"},
        { id: 3, mesa: 1, nome: "Calabresa"}
    ]);
    const [itemsProntos, setItemsProntos] = useState([]);

    function PedidoPronto(id) {
        const pedidoIndex = pedidos.findIndex(pedido => pedido.id === id);
        const pedido = pedidos[pedidoIndex];

        setItemsProntos([...itemsProntos, pedido]);
        setPedidos(pedidos.filter(pedido => pedido.id !== id));
    }

    function PedidoEntregado(id) {
        setItemsProntos(itemsProntos.filter(item => item.id !== id));
    }

    return (
        <section>
        <div>
            <h2>Pedidos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mesa</th>
                        <th>Nome</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map(pedido => (
                        <tr key={pedido.id}>
                            <td>{pedido.id}</td>
                            <td>{pedido.mesa}</td>
                            <td>{pedido.nome}</td>
                            <td><button onClick={() => PedidoPronto(pedido.id)}>Pronto</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <h2>Itens prontos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsProntos.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td><button onClick={() => PedidoEntregado(item.id)}>Bom apetite!</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </section>
    );
}

export default Chef;