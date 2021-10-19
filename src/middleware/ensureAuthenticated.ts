import {Request, Response, NextFunction} from "express";
import {verify} from "jsonwebtoken"

interface IPayLoad {
  sub: string;
}


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
  const authToken = request.headers.authorization;

  if(!authToken){
    return response.status(401).json({
      errorCode: "token.invalid"
    })
  }

  // Bearer 4456ads546sad456asdsa456das456d
  // [0] Bearer
  // [1] 4456ads546sad456asdsa456das456d

  const [, token] = authToken.split(" ")

  try {
    const {sub} = verify(token, process.env.JWT_SECRET) as IPayLoad

    request.user_id = sub

    return next()
  } 
  catch (error) {
   return response.status(401).json({errorCode: "token.expired"})   
  }
}