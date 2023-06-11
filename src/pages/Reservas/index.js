import React, { useState, useEffect } from "react";

function Reservas() {
  const [formData, setFormData] = useState({
    nomeCliente: "",
    cpf: "",
    data: "",
    hora: "",
    mesaReservada: ""
  });

  const [reservas, setReservas] = useState([]);
  const [cpfValido, setCpfValido] = useState(true);
  const [nomeValido, setNomeValido] = useState(true);
  const [dataValida, setDataValida] = useState(true);

  const fetchReservas = async () => {
    try {
      const response = await fetch("http://localhost:3333/laveneta/reservas");
      const data = await response.json();
      setReservas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReservas();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validação de CPF
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const isCpfValid = cpfRegex.test(formData.cpf);
    setCpfValido(isCpfValid);

    // Validação de Nome
    const nomeRegex = /^[A-Za-z\s]+$/;
    const isNomeValido = nomeRegex.test(formData.nomeCliente);
    setNomeValido(isNomeValido);

    // Validação de Data
    const today = new Date();
    const selectedDate = new Date(formData.data);
    const isDataValida = selectedDate > today;
    setDataValida(isDataValida);

    if (isCpfValid && isNomeValido && isDataValida) {
      try {
        const response = await fetch("http://localhost:3333/laveneta/reservas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const data = await response.json();
          setReservas([...reservas, data]);
          setFormData({
            nomeCliente: "",
            cpf: "",
            data: "",
            hora: "",
            mesaReservada: ""
          });
        } else {
          console.log("Erro ao criar reserva");
        }
        fetchReservas();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3333/laveneta/reservas/${id}`, {
        method: "DELETE"
      });

      if (response.ok) {
        fetchReservas();
      } else {
        console.log("Erro ao deletar reserva");
      }
    } catch (error) {
      console.log(error);
    }
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
              name="nomeCliente"
              value={formData.nomeCliente}
              onChange={(event) =>
                setFormData({ ...formData, nomeCliente: event.target.value })
              }
            />
            {!nomeValido && <span>Nome inválido</span>}
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
            {!cpfValido && <span>CPF inválido</span>}
          </label>
          <br />
          <label>
            Data:
            <input
              type="date"
              name="data"
              value={formData.data}
              onChange={(event) =>
                setFormData({ ...formData, data: event.target.value })
              }
            />
            {!dataValida && <span>Data inválida</span>}
          </label>
          <br />
          <label>
            Horário:
            <select
              name="hora"
              value={formData.hora}
              onChange={(event) =>
                setFormData({ ...formData, hora: event.target.value })
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
              name="mesaReservada"
              value={formData.mesaReservada}
              onChange={(event) =>
                setFormData({ ...formData, mesaReservada: event.target.value })
              }
            />
          </label>
          <br />
          <button type="submit" onClick={handleSubmit} >Reservar</button>
        </form>
        <br />
        <h2>Reservas</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Número da mesa</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.id}</td>
                <td>{reserva.nomeCliente}</td>
                <td>{reserva.cpf}</td>
                <td>{reserva.data}</td>
                <td>{reserva.hora}</td>
                <td>{reserva.mesaReservada}</td>
                <td>
                  <button onClick={() => handleDelete(reserva.id)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Reservas;
