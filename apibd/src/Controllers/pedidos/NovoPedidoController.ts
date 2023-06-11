import { Request, Response } from "express";
import { PedidosService } from "../../Services/pedidos/NovoPedidoService";

class NovoPedidoController {
  async createPedido(req: Request, res: Response) {
    const { mesa, pizzas, ingredientes, valorTotal } = req.body;

    const pedidosService = new PedidosService();
    const novoPedido = await pedidosService.createPedido({
      mesa,
      pizzas,
      valorTotal,
      estadoPronto: false,
      estadoEntregue: false,
      pagamento: false
    });

    res.json(novoPedido);
  }
}

export { NovoPedidoController };