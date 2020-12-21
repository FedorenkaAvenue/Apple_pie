import Mail from 'nodemailer/lib/mailer';

import { emailTransporter, MAILING_ACCOUNT} from '@servises/email/index';
import { IS_DEV } from '@src/index';

type IMailOptions = Mail.Options & {
    to: string | Array<string>
}

export default async function({ to, subject, html, text }: IMailOptions): Promise<void> {
    if (Array.isArray(to)) to = to.join(', '); // массовая рассылка

    emailTransporter.sendMail({
        from: `${ IS_DEV ? "Apple_pie test mailer👳🏿" : "Apple Pie🥧"} <${MAILING_ACCOUNT}>`,
        to, subject, text, html
    });
}
