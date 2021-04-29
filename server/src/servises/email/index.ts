import { createTransport } from 'nodemailer';

const { MAIL_SMTP_HOST, MAIL_SMTP_PORT } = process.env;

export const emailTransporter = createTransport({
    host: MAIL_SMTP_HOST,
    secure: false,
    port: Number(MAIL_SMTP_PORT),
    // auth: {
    //     user: 'support',
    //     pass: MAIL_PASSWORD
    // }
});

// DEV: test SMTP server connection
// emailTransporter.verify(error => {
//     error ?
//         console.log(error):
//         console.log("Server connection ok.");
// });
