import React, { useState } from 'react';

function Comanda() {
    const [pedidos, setPedidos] = useState([
        { id: 3, mesa: 4, nome: "Frango com Catupiry, Mussarela, Calabresa", valor: 84},
        { id: 2, mesa: 5, nome: "Mussarela", valor: 26.0},
        { id: 1, mesa: 1, nome: "Calabresa", valor: 27.8}
    ]);
    const [itemsProntos, setItemsProntos] = useState([]);

    function PedidoPago(id) {
        const pedidoIndex = pedidos.findIndex(pedido => pedido.id === id);
        const pedido = pedidos[pedidoIndex];

        setItemsProntos([...itemsProntos, pedido]);
        setPedidos(pedidos.filter(pedido => pedido.id !== id));
    }

    function PedidoFechado(id) {
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
                        <th>Preço</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map(pedido => (
                        <tr key={pedido.id}>
                            <td>{pedido.id}</td>
                            <td>{pedido.mesa}</td>
                            <td>{pedido.nome}</td>
                            <td>{pedido.valor}</td>
                            <td><button onClick={() => PedidoPago(pedido.id)}>Pagamento efetuado</button></td>
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
                        <th>Mesa</th>
                        <th>Preço</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsProntos.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.mesa}</td>
                            <td>{item.valor}</td>
                            <td><button onClick={() => PedidoFechado(item.id)}>Verificado. Fechar Comanda</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </section>
    );
}

export default Comanda;