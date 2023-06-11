import { Request, Response } from 'express';
import { PedidosService } from '../../Services/pedidos/PedidosService';

class PedidosController {
  async getPedidoPorMesa(req: Request, res: Response) {
    const { mesa } = req.params;

    const pedidosService = new PedidosService();
    const pedido = await pedidosService.getPedidoPorMesa(Number(mesa));

    res.json(pedido);
  }

  async getPedidos(req: Request, res: Response) {
    const pedidosService = new PedidosService();
    const pedidos = await pedidosService.getPedidos();
    res.json(pedidos);
  }
}

export { PedidosController };
