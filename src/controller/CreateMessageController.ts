import {Response, Request} from 'express'
import { CreateMessageService } from '../services/CreateMessageService'

class CreateMessageController {
async handle (request: Request, response: Response) {
  const {message, user_id} = request.body
  
  const service = new CreateMessageService()
  
  try {
  const result = await service.execute(message, user_id)
 
  
  return response.json(result)
   
  
  } catch (error: any) {
    response.json(error.message)
  }
}
}


export {CreateMessageController}