import { Request, Response } from 'express';
import { ComandaService } from '../../Services/comanda/ComandaService';

class ComandaController {
  async getComandasPagas(req: Request, res: Response) {
    const comandaService = new ComandaService();
    const comandasPagas = await comandaService.getComandasPagas();

    res.json(comandasPagas);
  }

  async efetuarPagamento(req: Request, res: Response) {
    const { id } = req.params;
    const comandaService = new ComandaService();

    try {
      const comanda = await comandaService.efetuarPagamento(id);
      res.json(comanda);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao efetuar o pagamento da comanda.' });
    }
  }
}

export { ComandaController };
