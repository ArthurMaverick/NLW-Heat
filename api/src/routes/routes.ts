import { Router } from "express";
import { AuthenticateUserController } from "../controller/AuthenticateUserController";
import { CreateMessageController } from "../controller/CreateMessageController";
import { GetLastMessagesController } from "../controller/GetLastMessagesController";
import { ProfileUserContorller } from "../controller/ProfileUserController";
import auth from '../middleware/ensureAuthenticate'
const router = Router()

router.get("/profile/", auth,  new ProfileUserContorller().handle)
router.post("/messages", auth,  new CreateMessageController().handle)
router.post("/authenticate", new AuthenticateUserController().handle)
router.get("/messages/last3",  new GetLastMessagesController().handle)


export {router}