import Mail from 'nodemailer/lib/mailer';

import { emailTransporter, MAILING_ACCOUNT } from '@servises/email/index';

const { APP_NAME } = process.env;

type IMailOptions = Mail.Options & {
    to: string | Array<string>
}

export default async function({ to, subject, html, text }: IMailOptions): Promise<void> {
    if (Array.isArray(to)) to = to.join(', '); // массовая рассылка

    emailTransporter.sendMail({
        from: `${APP_NAME} <${MAILING_ACCOUNT}>`,
        to, subject, text, html
    });
}
