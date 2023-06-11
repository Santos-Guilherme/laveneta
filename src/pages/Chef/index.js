import React, { useState, useEffect } from 'react';

function Chef() {
    const [pedidos, setPedidos] = useState([]);
    const [itemsProntos, setItemsProntos] = useState([]);

    useEffect(() => {
        fetchPedidos();
        fetchPedidosProntos();
    }, []);

    async function fetchPedidos() {
        try {
            const response = await fetch("http://localhost:3333/laveneta/pedidos");
            const data = await response.json();
            setPedidos(data);
        } catch (error) {
            console.error("Falha ao obter os pedidos:", error);
        }
    }

    async function fetchPedidosProntos() {
        try {
            const response = await fetch("http://localhost:3333/laveneta/chef/pedidos/prontos");
            const data = await response.json();
            setItemsProntos(data);
        } catch (error) {
            console.error("Falha ao obter os pedidos prontos:", error);
        }
    }

    async function PedidoPronto(id) {
        try {
            await fetch(`http://localhost:3333/laveneta/chef/pedidos/pronto/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const pedidoIndex = pedidos.findIndex((pedido) => pedido.id === id);
            const pedido = pedidos[pedidoIndex];

            setItemsProntos([...itemsProntos, pedido]);
            setPedidos(pedidos.filter((pedido) => pedido.id !== id));
            fetchPedidos();
            fetchPedidosProntos();
        } catch (error) {
            console.error("Falha ao marcar o pedido como pronto:", error);
        }
    }

    async function PedidoEntregado(id) {
        try {
            await fetch(`http://localhost:3333/laveneta/chef/pedidos/entregue/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setItemsProntos(itemsProntos.filter((item) => item.id !== id));
            fetchPedidos();
            fetchPedidosProntos();
        } catch (error) {
            console.error("Falha ao marcar o pedido como entregue:", error);
        }
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
                        {pedidos.map((pedido) => (
                            <tr key={pedido.id}>
                                <td>{pedido.id}</td>
                                <td>{pedido.mesa}</td>
                                <td>{pedido.pizzas}</td>
                                <td>
                                    <button onClick={() => PedidoPronto(pedido.id)}>Pronto</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
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
                        {itemsProntos.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.pizzas}</td>
                                <td>
                                    <button onClick={() => PedidoEntregado(item.id)}>Bom apetite!</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Chef;
