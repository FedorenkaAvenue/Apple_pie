import { createTransport } from 'nodemailer';

export const { MAIL_ACCOUNT, MAIL_PASSWORD } = process.env;
export const emailTransporter = createTransport({
    service: "hotmail",
    auth: {
        user: MAIL_ACCOUNT,
        pass: MAIL_PASSWORD
    }
});
