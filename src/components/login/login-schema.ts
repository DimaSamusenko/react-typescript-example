import * as yup from 'yup';
import passwordValidator from 'password-validator';

const passwordSchema = new passwordValidator();
passwordSchema
    .is().min(7)
    .has().letters()
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().not().spaces()
    .not(/[`~\!@#\$%\^\&\*\(\)\-\=\+\[\{\}\]\\\|;:'",<.>\/\?€£¥₹]+/);

const messages = {
    email: 'Введите корректный email',
    required: 'Обязательное поле',
    passwordChars: 'Должны быть цифры и латинские буквы (верхний и нижний' +
        ' регистр). Не меньше 7 символов'
};


export const validationSchema = yup.object().shape({
    login: yup.string().email(messages.email).required(messages.required),
    password: yup.string()
        .required(messages.required)
        // @ts-ignore
        .test('password', messages.passwordChars, (value) => {
            return passwordSchema.validate(value)
        })
});
