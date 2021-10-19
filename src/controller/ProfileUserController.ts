import {Response, Request} from 'express'
import { ProfileUserService } from '../services/ProfileUserService'

export class ProfileUserContorller {
async handle (request: Request, response: Response) {
  const {user_id} = request.body
  const service = new ProfileUserService()

  const result = await service.execute(user_id)
  return response.json(result)
}
}

