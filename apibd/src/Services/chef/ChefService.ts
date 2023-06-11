import prismaClient from "../../prisma";
import { Comanda } from "@prisma/client";


class ChefService {
  async alterarEstadoEntregueParaTrue(idPedido: string) {
    const pedido = await prismaClient.comanda.update({
      where: {
        id: idPedido
      },
      data: {
        estadoEntregue: true
      }
    });

    return pedido;
  }

  async alterarEstadoPedidoParaPronto(idPedido: string) {
    const pedido = await prismaClient.comanda.update({
      where: {
        id: idPedido
      },
      data: {
        estadoPronto: true
      }
    });

    return pedido;
  }

  async getPedidosEntregues() {
    const pedidosEntregues = await prismaClient.comanda.findMany({
      where: {
        estadoEntregue: true,
        pagamento: false
      },
      select: {
        id: true,
        mesa: true,
        pizzas: true,
        valorTotal: true
      }
    });

    return pedidosEntregues;
  }

  async getPedidosProntos() {
    const pedidosProntos = await prismaClient.comanda.findMany({
      where: {
        estadoPronto: true,
        estadoEntregue: false,
        pagamento: false
      },
      select: {
        id: true,
        mesa: true,
        pizzas: true,
        valorTotal: true
      }
    });

    return pedidosProntos;
  }
}

export { ChefService };
