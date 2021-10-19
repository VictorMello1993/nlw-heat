import prismaClient from '../prisma'

class GetLast3MessagesService{
  async execute()  {
    const messages = await prismaClient.message.findMany({
      take: 3, //take => Limite de registros a serem consultados (equivalente a LIMIT no SQL)
      orderBy: {
        created_at: "desc"
      },
      include: {
        user: true
      }
    })

    return messages
  }
}

export {GetLast3MessagesService};