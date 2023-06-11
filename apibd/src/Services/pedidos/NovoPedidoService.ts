import prismaClient from "../../prisma";

interface NovoPedido {
  mesa: number;
  pizzas: string;
  valorTotal: number;
  estadoPronto: boolean;
  estadoEntregue: boolean;
  pagamento: boolean
}

class PedidosService {
  async createPedido(pedido: NovoPedido) {
    const novoPedido = await prismaClient.comanda.create({
      data: {
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
}

export { PedidosService };