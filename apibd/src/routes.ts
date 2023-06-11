import { AuthUserController } from "./Controllers/user/AuthUserController";
import { CreateUserController } from "./Controllers/user/CreateUserController";
import { Router, Request, Response } from 'express';
import { ChefController } from './Controllers/chef/ChefController';
import { CardapioController } from './Controllers/cardapio/CardapioController';
import { ComandaController } from './Controllers/comanda/ComandaController';
import { PedidosController } from './Controllers/pedidos/PedidosController';
import { NovoPedidoController } from './Controllers/pedidos/NovoPedidoController';
import { ReservaController } from './Controllers/reservas/ReservasController';

const router = Router();

// Rotas USER ------------
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);

// Rotas CHEF
const chefController = new ChefController();
router.put('/laveneta/chef/pedidos/entregue/:id', chefController.alterarEstadoEntregueParaTrue);
router.put('/laveneta/chef/pedidos/pronto/:id', chefController.alterarEstadoPedidoParaPronto);
router.get('/laveneta/chef/pedidos/entregues', chefController.getPedidosEntregues);
router.get('/laveneta/chef/pedidos/prontos', chefController.getPedidosProntos);

// Rotas CARDAPIO
const cardapioController = new CardapioController();
router.get('/laveneta/cardapio', cardapioController.getCardapio);

// Rotas COMANDA
const comandaController = new ComandaController();
router.get('/laveneta/comandas/pagas', comandaController.getComandasPagas);
router.put('/laveneta/comandas/pagamento/:id', comandaController.efetuarPagamento);

// Rotas PEDIDOS
const pedidosController = new PedidosController();
const novoPedidoController = new NovoPedidoController();
router.post('/laveneta/pedidos', novoPedidoController.createPedido);
router.get('/laveneta/pedidos/mesa/:mesa', pedidosController.getPedidoPorMesa);
router.get('/laveneta/pedidos', pedidosController.getPedidos);

// Rotas RESERVAS
const reservaController = new ReservaController();
router.post("/laveneta/reservas", reservaController.criarReserva);
router.put("/reservas/:id", reservaController.alterarReserva);
router.delete("/laveneta/reservas/:id", reservaController.deletarReserva);
router.get("/laveneta/reservas", reservaController.consultarReservas);
router.get("/reservas/por-cpf", reservaController.consultarReservaPorCPF);

export { router };
