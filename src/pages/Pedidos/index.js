import React, { useState, useEffect } from 'react';

function Pedidos() {
    const [pedidoFeito, setPedidoFeito] = useState(false);
    const [items, setItems] = useState([]);
    const [valorTotal, setValorTotal] = useState(0);
    const [itensAdicionados, setItensAdicionados] = useState([]);
    const [mesa, setMesa] = useState('');
    const [mesaValida, setMesaValida] = useState(true);

    useEffect(() => {
        // Função para obter os dados do cardápio do servidor
        const getCardapio = async () => {
            try {
                const response = await fetch('http://localhost:3333/laveneta/cardapio'); // Substitua "/api/cardapio" pela rota correta da sua API
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Erro ao obter o cardápio:', error);
            }
        };

        getCardapio();
    }, []);

    const handleItemAdicionado = (item) => {
        setItensAdicionados([...itensAdicionados, item]);
        setValorTotal(valorTotal + item.valor);
    };

    const handleRemoveItem = (index) => {
        const itemRemovido = itensAdicionados[index];
        const novoItem = [...itensAdicionados];
        novoItem.splice(index, 1);
        setItensAdicionados(novoItem);
        setValorTotal(valorTotal - itemRemovido.valor);
    };

    const handlePedido = async () => {
        if (mesa > 0) {
            setMesaValida(true);
            try {
                const pizzas = itensAdicionados.map((item) => item.sabor).join(', ');
                const novoPedido = {
                    mesa: Number(mesa),
                    pizzas,
                    valorTotal,
                    estadoPronto: false,
                    estadoEntregue: false,
                    pagamento: false
                };

                const response = await fetch('http://localhost:3333/laveneta/pedidos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(novoPedido)
                });

                if (response.ok) {
                    setPedidoFeito(true);
                } else {
                    console.error('Erro ao criar o pedido:', response.status);
                    setPedidoFeito(false);
                }
            } catch (error) {
                console.error('Erro ao criar o pedido:', error);
            }
        } else {
            setMesaValida(false);
        }
    };

    return (
        <section>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Ingrediente</th>
                                <th>Preço</th>
                                <th>Adicionar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.sabor}</td>
                                    <td>{item.ingredientes}</td>
                                    <td>{item.valor}</td>
                                    <td><AddButton onClick={() => handleItemAdicionado(item)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    <div>
                        <h2>Comanda</h2>
                        <ul className='item-adicionado'>
                            {itensAdicionados.map((item, index) => (
                                <li key={index}>
                                    {item.sabor} - R$ {item.valor.toFixed(2)}
                                    <RemoveButton onClick={() => handleRemoveItem(index)} />
                                </li>
                            ))}
                            <br />
                            <li>Total - R$ {valorTotal.toFixed(2)}</li>
                        </ul>
                    <label htmlFor="tableNumber">Número da mesa:</label>
                    <input type="number" id="tableNumber" name="tableNumber" value={mesa} onChange={(e) => setMesa(e.target.value)} />
                    {!mesaValida && <p>O número da mesa deve ser maior que 0</p>}
                    <button type="submit" className="submit" onClick={handlePedido} >Pedido</button>
                    {pedidoFeito && <p>Pedido feito!</p>}
                </div>
            </div>
        </section>
    );
}

function AddButton(props) {
    return (
        <img className='button-pedidos' src="images/adicionar.png" alt="Adicionar" onClick={props.onClick} />
    );
}

function RemoveButton(props) {
    return (
        <img className='button-pedidos' src="images/remove.png" alt="Remover" onClick={props.onClick} />
    );
}


export default Pedidos;
