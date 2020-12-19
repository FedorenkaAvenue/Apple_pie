import Mail from 'nodemailer/lib/mailer';

import { emailTransporter, MAILING_ACCOUNT} from '@servises/email/index';

interface IMailOptions extends Mail.Options {
    to: string | Array<string>
}

export default async function({ to, subject, html, text }: IMailOptions): Promise<void> {
    if (Array.isArray(to)) to = to.join(', '); // массовая рассылка

    try {
        await emailTransporter.sendMail({
            from: `"Apple Pie Testing👻" <${MAILING_ACCOUNT}>`,
            to, subject, text, html
        });
    } catch(err) {
        //TODO: админить ошибки
        console.log(err);
    }
}
