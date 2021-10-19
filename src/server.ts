import {serverHttp} from './config/app'
const port = process.env.PORT || 8080

serverHttp.listen(port , () => console.log(`run in port ${port}`))