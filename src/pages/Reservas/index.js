import React, { useState } from "react";

function Reservas() {
    const [formData, setFormData] = useState({
        name: "",
        cpf: "",
        date: "",
        time: "",
        tableNumber: ""
    });

    return (
        <div>
            <h2>Faça sua reserva</h2>
            <form>
                <label>
                    Nome:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                    />
                </label>
                <br />
                <label>
                    CPF:
                    <input
                        type="text"
                        name="cpf"
                        value={formData.cpf}
                    />
                </label>
                <br />
                <label>
                    Data:
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                    />
                </label>
                <br />
                <label>
                    Horário:
                    <select name="time" value={formData.time}>
                        <option value="">Selecione</option>
                        <option value="Almoço">Almoço</option>
                        <option value="Janta">Janta</option>
                    </select>
                </label>
                <br />
                <label>
                    Número da mesa:
                    <input
                        type="text"
                        name="tableNumber"
                        value={formData.tableNumber}
                    />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
            <h2>Reservas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Data</th>
                        <th>Horário</th>
                        <th>Número da mesa</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
)}

export default Reservas;