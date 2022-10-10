const schema = Joi.object({
  fname: Joi
    .string()
    .min(3)
    .max(30)
    .required()
    .messages({"string.min": minChar("Prénom", 3)})
    .messages({"string.empty": notEmpty("Prénom")}),
  lname: Joi.string().min(3).max(30).required()
    .messages({"string.min": minChar("Nom", 3)})
    .messages({"string.empty": notEmpty("Nom")}),
  phone: Joi.string().regex(/^[0-9]+/).min(8).max(10).optional()
    .messages({"string.pattern.base": "Le numéro de tél doi contenir 8 à 10 chiffres"}),
  email: Joi.string().email({ tlds: { allow: ['com'] } }).optional(),
  condition: Joi.boolean().invalid(false)
});

function minChar(field, minChar) {
  return `Le champ ${field} doit comporter au moins de ${minChar} caractères`;
}

function notEmpty(field) {
  return `Le champ ${field} ne doit pas être vide`;
}

export function validateData(jsonData) {
  return schema.validate(jsonData, { abortEarly: false });
}
