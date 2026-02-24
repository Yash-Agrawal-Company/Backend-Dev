import joi from "joi";
import { StatusCodes } from "http-status-pro-js";

function signupMidd(req, res, next) {
    const schema = joi.object({
        name: joi.string().trim().min(3).required(),
        email: joi.string().trim().email().required(),
        password: joi.string().min(4).max(10).required()
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
        return res.status(StatusCodes.BAD_REQUEST.code).json({
            code: StatusCodes.BAD_REQUEST.code,
            message: error.details[0].message,
            data: null
        });
    }

    req.body = value;
    next();
}

export default signupMidd;