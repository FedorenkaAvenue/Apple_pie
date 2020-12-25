import { createTransport } from 'nodemailer';

export const { MAILING_ACCOUNT, MAILING_ACCOUNT_PASSWORD } = process.env;
export const emailTransporter = createTransport({
    service: "hotmail",
    auth: {
        user: MAILING_ACCOUNT,
        pass: MAILING_ACCOUNT_PASSWORD
    }
});
