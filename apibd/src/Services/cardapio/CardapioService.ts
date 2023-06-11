import prismaClient from "../../prisma";
import { Cardapio } from "@prisma/client";

class CardapioService {
  async getCardapio() {
    const cardapio = await prismaClient.cardapio.findMany();
    return cardapio;
  }
}

export { CardapioService };