import joi from "joi";
import { StatusCodes } from "http-status-pro-js";

function userUpdate(req, res, next) {
    try{
        let schema = joi.object({
            id: joi.number(),
            name:joi.string().trim().lowercase().min(3).max(30).required(),
            email:joi.string().trim().lowercase().min(6).max(200).required()
        })
        let {error, value} = schema.validate(req.body);
        if(error){
            res.status(StatusCodes.BAD_REQUEST.code).json({
                code : StatusCodes.BAD_REQUEST.code,
                message : error.details[0].message,
                data : null
            })
            return 
        }
        req.body = value
        next();
    }catch(error){
        console.log("user mid",error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json({
            code : StatusCodes.INTERNAL_SERVER_ERROR.code,
            message : StatusCodes.INTERNAL_SERVER_ERROR.message,
            data : null
        })
        return
    }
}