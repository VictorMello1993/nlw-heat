// Conexão com banco de dados com Prisma Client

import {PrismaClient} from "@prisma/client"

const prismaClient = new PrismaClient();

export default prismaClient;