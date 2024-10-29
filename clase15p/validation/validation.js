// https://joi.dev/api/?v=17.13.3

import Joi from "joi";

export const courseValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        description: Joi.string().min(10).required(),
        tags: Joi.array().items(Joi.string())
    })
    return schema.validate(data)
}