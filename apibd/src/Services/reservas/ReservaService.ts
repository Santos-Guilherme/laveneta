import prismaClient from "../../prisma";
import { Reserva } from "@prisma/client";

interface NovaReserva {
    nomeCliente: string;
    cpf: string;
    data: string;
    hora: string;
    mesaReservada: string;
}

class ReservaService {
    async criarReserva(reserva: NovaReserva) {
        const novaReserva = await prismaClient.reserva.create({
            data: reserva,
        });

        return novaReserva;
    }

    async alterarReserva(id: string, data: string, hora: string) {
        const reservaAtualizada = await prismaClient.reserva.update({
            where: {
                id: id,
            },
            data: {
                data: data,
                hora: hora,
            },
        });

        return reservaAtualizada;
    }

    async deletarReserva(id: string) {
        const reservaDeletada = await prismaClient.reserva.delete({
            where: {
                id: id,
            },
        });

        return reservaDeletada;
    }


    async consultarReservaPorCPF(cpf: string) {
        const reserva = await prismaClient.reserva.findFirst({
            where: {
                cpf: cpf,
            },
        });

        return reserva;
    }
    async consultarReservas() {
        const reservas = await prismaClient.reserva.findMany({
        });

        return reservas;
    }
}

export { ReservaService };