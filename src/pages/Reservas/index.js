import React, { useState } from "react";

function Reservas() {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    date: "",
    time: "",
    tableNumber: ""
  });

  const [reservas, setReservas] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setReservas([...reservas, formData]);
    setFormData({
      cpf: "",
      date: "",
      time: "",
      tableNumber: ""
    });
  };

  return (
    <section>
      <div>
        <h2>Faça sua reserva</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
            />
          </label>
          <br />
          <label>
            CPF:
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={(event) =>
                setFormData({ ...formData, cpf: event.target.value })
              }
            />
          </label>
          <br />
          <label>
            Data:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={(event) =>
                setFormData({ ...formData, date: event.target.value })
              }
            />
          </label>
          <br />
          <label>
            Horário:
            <select
              name="time"
              value={formData.time}
              onChange={(event) =>
                setFormData({ ...formData, time: event.target.value })
              }
            >
              <option value="">Selecione</option>
              <option value="Almoço">Almoço</option>
              <option value="Janta">Janta</option>
            </select>
          </label>
          <br />
          <label>
            Número da mesa:
            <input
              type="number"
              name="tableNumber"
              value={formData.tableNumber}
              onChange={(event) =>
                setFormData({ ...formData, tableNumber: event.target.value })
              }
            />
          </label>
          <br />
          <button type="submit">Reservar</button>
        </form>
        <br />
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
            {reservas.map((reserva, index) => (
              <tr key={index}>
                <td>{reserva.name}</td>
                <td>{reserva.cpf}</td>
                <td>{reserva.date}</td>
                <td>{reserva.time}</td>
                <td>{reserva.tableNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
        </section>
    )
}

export default Reservas;