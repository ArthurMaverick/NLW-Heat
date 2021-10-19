import "dotenv/config"
import express from "express";
import { Server as IOServer } from "socket.io";
import { createServer as createHttpServer} from "http";
import {router} from "../routes/routes"
import cors from "cors";

const app = express();
const serverHttp = createHttpServer(app)
const io = new IOServer(serverHttp, {cors: {origin: "*"}})

app.use(cors())
app.use(express.json())
app.use(router)

io.on("connection", socket => {
  console.log( 'user ' + socket.id + ' is connected') 
})

app.get('/github', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})
app.get('/signin/callback', (req, res) => {
 return res.json({code: req.query.code})
})

export {serverHttp, io}
