import { Request, Response } from "express";
import { CardapioService } from "../../Services/cardapio/CardapioService";

class CardapioController {
  async getCardapio(req: Request, res: Response) {
    const cardapioService = new CardapioService();
    const cardapio = await cardapioService.getCardapio();
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Especifique a origem permitida
    res.json(cardapio);
  }
}

export { CardapioController };