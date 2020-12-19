import { CREATE_VERIFY_ITEM_QUERY } from '@db/postgres/queries/verifyMail';
import { getSaltedVerifyHash } from '@crypto/satl';
import sendEmail from '@servises/email/sendEmail';
import renderPug from '@utils/renderPugFile';

export default async function(userId: string, email: string) {
    const verifyHash = getSaltedVerifyHash(userId);

    try {
        await CREATE_VERIFY_ITEM_QUERY({ id: userId, hash: verifyHash });

        sendEmail({
            to: email,
            subject: 'Подтверди свою почту, сука!',
            html: renderPug(
                'verifyEmail',
                {
                    verifyHref: `http://localhost/api/user/verify?hash=${verifyHash}`
                }
            )
        });
    } catch(err) {
        //TODO: подумать как обрабатывать ошибки
        console.log(err);
    }
}
