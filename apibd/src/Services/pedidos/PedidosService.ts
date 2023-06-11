import prismaClient from "../../prisma";
import { Comanda } from "@prisma/client";

class PedidosService {
  async createPedido(pedido: Comanda) {
    const novoPedido = await prismaClient.comanda.create({
      data: {
        id: pedido.id,
        mesa: pedido.mesa,
        pizzas: pedido.pizzas,
        valorTotal: pedido.valorTotal,
        estadoPronto: pedido.estadoPronto,
        estadoEntregue: pedido.estadoEntregue,
        pagamento: pedido.pagamento
      }
    });
    return novoPedido;
  }

  async getPedidos() {
    const pedidos = await prismaClient.comanda.findMany({
      where: {
        estadoPronto: false,
        estadoEntregue: false,
        pagamento: false
      },
      select: {
        id: true,
        mesa: true,
        pizzas: true,
        valorTotal: true,
        pagamento: true
      }
    });

    return pedidos;
  }

  async getPedidoPorMesa(mesa: number) {
    const pedido = await prismaClient.comanda.findFirst({
      where: {
        mesa: mesa
      }
    });

    if (!pedido) {
      throw new Error("Pedido não encontrado");
    }

    return pedido;
  }
}

export { PedidosService };
