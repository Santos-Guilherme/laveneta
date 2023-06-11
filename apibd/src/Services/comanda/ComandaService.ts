import prismaClient from "../../prisma";
import { Comanda } from "@prisma/client";

class ComandaService {
  async efetuarPagamento(comandaId: string) {
    const comanda = await prismaClient.comanda.update({
      where: {
        id: comandaId,
      },
      data: {
        pagamento: true,
      },
    });

    return comanda;
  }

  async getComandasPagas() {
    const comandas = await prismaClient.comanda.findMany({
      where: {
        pagamento: true
      },
      select: {
        id: true,
        mesa: true,
        pizzas: true,
        valorTotal: true,
        pagamento: true
      }
    });

    return comandas;
  }
}

export { ComandaService };
