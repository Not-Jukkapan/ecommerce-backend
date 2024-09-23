import { Request, Response, NextFunction } from "express";
import { HttpException } from "./exceptions/root";

export const errorHandler = (func:Function) => {
  return (req:Request, res:Response, next:NextFunction) => {
    try {
        func(req, res, next)
    } catch (error:any) {
        let exception: HttpException;
        if(error instanceof HttpException) {
            exception = error;
        } else{
            
        }

    }
  }
}