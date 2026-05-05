import Joi from 'joi';

export const stockSchema = Joi.object({
  stockName: Joi.string().required().messages({
    'string.empty': 'Stock name is required',
  }),
  quantity: Joi.number().integer().min(1).required().messages({
    'number.base': 'Quantity must be a number',
    'number.min': 'Quantity must be at least 1',
  }),
  buyPrice: Joi.number().min(0).required().messages({
    'number.base': 'Buy price must be a number',
  }),
  currentPrice: Joi.number().min(0).required().messages({
    'number.base': 'Current price must be a number',
  }),
});

export const updateStockSchema = Joi.object({
  stockName: Joi.string(),
  quantity: Joi.number().integer().min(1),
  buyPrice: Joi.number().min(0),
  currentPrice: Joi.number().min(0),
});
