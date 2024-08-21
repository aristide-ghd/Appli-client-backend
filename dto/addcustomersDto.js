const {object, string, number, date, Infertype} = require('yup');

exports.addcustomersDto = object({
    body: object({
        first_name: string(),
        last_name: string().uppercase(),
        mail_address: string().email().trim().lowercase().required("Votre e-mail est requis"),
        phone_number: string().required('Votre numéro de téléphone est requis'),
        data: object({
            card_number: number().required('Votre numéro de carte est requis'),
            city: string(),
            country: string(),
            birthday: date(),
        }),
        additionnal_data: object({
            customer_cat: string().oneOf(['GOLD', 'PREMIUM', 'SILVER', 'IRON']),
            family: object({
                father: string(),
                mother: string(),
                sister: string(),
            }),
        }),
    }),
});