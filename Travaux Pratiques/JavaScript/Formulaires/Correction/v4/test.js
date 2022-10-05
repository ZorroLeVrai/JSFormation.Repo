const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
});

const { value, error } = schema.validate({ username: "to"});
console.log({ value, error });