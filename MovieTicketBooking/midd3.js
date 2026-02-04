import joi from 'joi';
import {StatusCodes} from 'http-status-pro-js'
import logger from './logger/logger.js';

function usermidd3(req, res, next) {
    try{
        let schema = joi.object({
            name: joi.string().trim().lowercase().min(2).max(200).required(),
            email: joi.string().trim().lowercase().email().min(8).max(200).required(),
            password : joi.string().trim().min(8).max(10).required()
        })
       
        let {error,value} = schema.validate(req.body)
        if(error){
            res.status(StatusCodes.BAD_REQUEST.code).json({
                code: StatusCodes.BAD_REQUEST.code,
                message: error.message,
                data: null
            })
            return
        }
        req.body = value
        next()
    }catch(error){
        console.log(error);
        logger('error','Server error')
        res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
            code: StatusCodes.INTERNAL_SERVER_ERROR.code,
            message: StatusCodes.INTERNAL_SERVER_ERROR.message,
            data: null
        })
    }
  };

  export default usermidd3;



