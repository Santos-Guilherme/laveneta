-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cardapio` (
    `id` VARCHAR(191) NOT NULL,
    `sabor` VARCHAR(191) NOT NULL,
    `ingredientes` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comanda` (
    `id` VARCHAR(191) NOT NULL,
    `mesa` INTEGER NOT NULL,
    `pizzas` VARCHAR(191) NOT NULL,
    `valorTotal` DOUBLE NOT NULL,
    `estadoPronto` BOOLEAN NOT NULL,
    `estadoEntregue` BOOLEAN NOT NULL,
    `pagamento` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reserva` (
    `id` VARCHAR(191) NOT NULL,
    `nomeCliente` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `data` VARCHAR(191) NOT NULL,
    `hora` VARCHAR(191) NOT NULL,
    `mesaReservada` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
