import fs from 'fs'
import "dotenv/config"
import express from "express";
import { Server as IOServer } from "socket.io";
import { createServer as createHttpServer, ServerOptions} from "https";
import {router} from "../routes/routes"
import cors from "cors";

const options: ServerOptions = {
  key: fs.readFileSync('./certs/agent2-k.pem'),
  cert: fs.readFileSync('./certs/agent2-c.pem'),
}

const app = express();
const serverHttp = createHttpServer(options,app)
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
