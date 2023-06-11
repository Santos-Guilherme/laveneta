import { Request, Response } from "express";
import { ReservaService } from "../../Services/reservas/ReservaService";

class ReservaController {
  async criarReserva(req: Request, res: Response) {
    const nomeCliente = req.body.nomeCliente;
    const cpf = req.body.cpf;
    const data = req.body.data;
    const hora = req.body.hora;
    const mesaReservada = req.body.mesaReservada;
  
    const reservaService = new ReservaService();
  
    const novaReserva = await reservaService.criarReserva({
      nomeCliente,
      cpf,
      data,
      hora,
      mesaReservada,
    });
  
    res.json(novaReserva);
  }

    async alterarReserva(req: Request, res: Response) {
        const { id } = req.params;
        const { data, hora } = req.body;

        const reservaService = new ReservaService();
        const reservaAtualizada = await reservaService.alterarReserva(id, data, hora);

        res.json(reservaAtualizada);
    }

    async deletarReserva(req: Request, res: Response) {
        const { id } = req.params;

        const reservaService = new ReservaService();
        const reservaDeletada = await reservaService.deletarReserva(id);

        res.json(reservaDeletada);
    }

    async consultarReservaPorCPF(req: Request, res: Response) {
        const { cpf } = req.query;

        const reservaService = new ReservaService();
        const reserva = await reservaService.consultarReservaPorCPF(cpf as string);

        res.json(reserva);
    }
    async consultarReservas(req: Request, res: Response) {
      const reservaService = new ReservaService();
      const reservas = await reservaService.consultarReservas();
      res.json(reservas);
    }
}

export { ReservaController };
