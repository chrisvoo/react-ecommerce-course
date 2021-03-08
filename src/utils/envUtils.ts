import Joi from 'joi';

export const schema = Joi.object({
    PORT: Joi.number().min(1025).max(65535),
    REACT_APP_STRIPE_PUBKEY: Joi.string().required(),
    NODE_ENV: Joi.string().valid('development', 'production', 'test'),
    PUBLIC_URL: Joi.string().uri().empty('')
});