import React, { useState } from 'react';

function Table() {

    const [pedidoFeito, setPedidoFeito] = useState(false);

    const handlePedido = () => {
            setPedidoFeito(true);
    }

    const [items, setItems] = useState([
        { id: 1, nome: "Pizza Mussarela", ingredientes: "Queijo mussarela, azeite e orégano.", valor: 26 },
        { id: 2, nome: "Pizza Calabresa", ingredientes: "Queijo mussarela, calabresa fatiada, cebola e azeitona.", valor: 27.8 },
        { id: 3, nome: "Pizza Frango com Catupiry", ingredientes: "Queijo mussarela, frango desfiado, catupiry, milho e ervilha.", valor: 30.2 }
    ]);

    const [valorTotal, setValorTotal] = useState(0);

    const [itensAdicionados, setItensAdicionados] = useState([]);


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


    return (
        <section>
            <div>
                <h1>Cardárpio</h1>
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
                                    <td>{item.nome}</td>
                                    <td>{item.ingredientes}</td>
                                    <td>{item.valor}</td>
                                    <td><AddButton onClick={() => handleItemAdicionado(item)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br/>
                    <div>
                        <h2>Comanda</h2>
                        <ul className='item-adicionado'>
                            {itensAdicionados.map((item, index) => (
                                <li key={index}>
                                    {item.nome} - R$ {item.valor.toFixed(2)}
                                    <RemoveButton onClick={() => handleRemoveItem(index)} />
                                </li>
                            ))}
                            <br></br>
                            <li>Total - R$ {valorTotal.toFixed(2)}</li>
                        </ul>
                        <label htmlFor="tableNumber">Número da mesa:</label>
                        <input type="number" id="tableNumber" name="tableNumber" />
                        <input type="button" value="Pedido" className="submit" onClick={handlePedido} />
                        {pedidoFeito && <p>Pedido feito!</p>}
                    </div>
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


function Pedidos() {
    return (
        <div>
            <Table />
        </div>
    );
}

export default Pedidos;