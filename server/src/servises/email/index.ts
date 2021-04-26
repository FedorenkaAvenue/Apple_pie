import { createTransport } from 'nodemailer';

const { MAIL_ACCOUNT, MAIL_PASSWORD, MAIL_SMTP_HOST, MAIL_SMTP_PORT } = process.env;

export const emailTransporter = createTransport({
    host: MAIL_SMTP_HOST,
    secure: false,
    port: Number(MAIL_SMTP_PORT),
    auth: {
        user: MAIL_ACCOUNT,
        pass: MAIL_PASSWORD
    },
    tls: { rejectUnauthorized: false }
});

// DEV: test SMTP server connection
// emailTransporter.verify(error => {
//     error ?
//         console.log(error):
//         console.log("Server connection ok.");
// });
