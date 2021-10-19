import {Response, Request} from 'express'
import { GetLastMessageService } from '../services/GetLastMessageService'

export class GetLastMessagesController {
async handle (request: Request, response: Response) {
  const service = new GetLastMessageService()

  const result = await service.execute()
  return response.json(result)
}
}

