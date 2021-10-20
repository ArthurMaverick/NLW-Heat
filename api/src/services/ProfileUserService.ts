import PrismaClient from '../prisma'

export class ProfileUserService {
  async execute(user_id: string) {
    const user = await PrismaClient.message.findFirst({
      where: {
        id: user_id,
      },
      include : {
        user: true
      }
      
    })

    return user
  }

}

