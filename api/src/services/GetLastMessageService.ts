import PrismaClient from '../prisma'

export class GetLastMessageService {
  async execute() {
    const messages = await PrismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: 'desc' 
      },
      include: {
        user: true
      }
    })

    return messages
  }

}

