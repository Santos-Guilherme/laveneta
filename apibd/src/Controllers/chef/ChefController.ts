import { Request, Response } from 'express';
import { ChefService } from '../../Services/chef/ChefService';

class ChefController {
  async alterarEstadoEntregueParaTrue(req: Request, res: Response) {
    const { id } = req.params;

    const chefService = new ChefService();
    const pedido = await chefService.alterarEstadoEntregueParaTrue(id);

    res.json(pedido);
  }

  async alterarEstadoPedidoParaPronto(req: Request, res: Response) {
    const { id } = req.params;

    const chefService = new ChefService();
    const pedido = await chefService.alterarEstadoPedidoParaPronto(id);

    res.json(pedido);
  }

  async getPedidosEntregues(req: Request, res: Response) {
    const chefService = new ChefService();
    const pedidosEntregues = await chefService.getPedidosEntregues();

    res.json(pedidosEntregues);
  }

  async getPedidosProntos(req: Request, res: Response) {
    const chefService = new ChefService();
    const pedidosProntos = await chefService.getPedidosProntos();

    res.json(pedidosProntos);
  }
}

export { ChefController };
