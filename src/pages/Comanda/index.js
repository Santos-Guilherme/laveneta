import React, { useState, useEffect } from 'react';

function Comanda() {
    const [pedidos, setPedidos] = useState([]);
    const [itemsProntos, setItemsProntos] = useState([]);

    useEffect(() => {
        fetchPedidosEntregues();
        fetchComandasPagas();
    }, []);

    async function fetchPedidosEntregues() {
        try {
            const response = await fetch("http://localhost:3333/laveneta/chef/pedidos/entregues");
            const data = await response.json();
            setPedidos(data);
        } catch (error) {
            console.error("Falha ao obter os pedidos entregues:", error);
        }
    }

    async function fetchComandasPagas() {
        try {
            const response = await fetch("http://localhost:3333/laveneta/comandas/pagas");
            const data = await response.json();
            setItemsProntos(data);
        } catch (error) {
            console.error("Falha ao obter as comandas pagas:", error);
        }
    }

    async function efetuarPagamento(id) {
        try {
            await fetch(`http://localhost:3333/laveneta/comandas/pagamento/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setItemsProntos(itemsProntos.filter(item => item.id !== id));
            fetchPedidosEntregues();
            fetchComandasPagas();
        } catch (error) {
            console.error("Falha ao efetuar o pagamento da comanda:", error);
        }
    }

    return (
        <section>
            <div>
                <h2>A fazer pagamento:</h2>
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
                                <td>{pedido.pizzas}</td>
                                <td>{pedido.valorTotal}</td>
                                <td><button onClick={() => efetuarPagamento(pedido.id)}>Efetuar Pagamento</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <h2>Pagamentos efetuados:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Mesa</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsProntos.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.mesa}</td>
                                <td>{item.valorTotal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Comanda;
