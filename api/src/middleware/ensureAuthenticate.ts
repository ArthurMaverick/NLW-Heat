import {verify} from 'jsonwebtoken'



  export default (req: any, res:any, next: any ) => {
  const authToken = req.headers.authorization
  console.log(authToken)

  if(!authToken) {
    return res.status(401).json({ 
      errorCode: "invalid token"
    })
  }

  const [,token] = authToken.split(' ')
  try {
  const value = verify(token, process.env.JWT as string)
  req.user_id = value.sup
  console.log("passo");
  return next()
    
  } catch (error: any) {
    res.status(401).json({ errorCode: error.message})
  }
}