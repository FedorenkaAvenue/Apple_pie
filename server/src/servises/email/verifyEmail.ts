import sendEmail from '@servises/email/sendEmail';
import renderPug from '@utils/renderPugFile';
import { generateAccessEmailVerifyToken } from '@crypto/jwt';

const { APP_DOMAIN } = process.env;

export default async function(userId: string, email: string): Promise<void> {
    const verifyHashToken = generateAccessEmailVerifyToken(userId);

    try {
        sendEmail({
            to: email,
            subject: 'Подтверди свою почту, гнида!',
            html: renderPug(
                'verifyEmail',
                {
                    verifyHref: `${APP_DOMAIN}/api/user/verify?key=${encodeURIComponent(verifyHashToken)}`
                }
            )
        });
    } catch(err) {
        //TODO: придумать как обрабатывать ошибки
        console.log('ошибка отправки верификации почты: ',err);
    }
}
