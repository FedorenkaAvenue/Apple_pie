import { promises } from 'fs';

import { IMAGE_HOSTING_FOLDER } from '@servises/image/index';
import { IMulterFile } from '@middleWares/parseFormDataFiles';

export default async function(type: string, folderId: string, files: Array<IMulterFile>): Promise<Array<string>> {
    const itemDirPath = `${IMAGE_HOSTING_FOLDER}/${type}/${folderId}`;

    try {
        await promises.mkdir(itemDirPath, { recursive: true });

        return await Promise.all(files.map(async ({ originalname, buffer }: IMulterFile) => {
            const imageHref = `${type}/${folderId}/${originalname}`;

            await promises.appendFile(`${IMAGE_HOSTING_FOLDER}/${imageHref}`, buffer);

            return imageHref;
        }));
    } catch(err) {
        await promises.rmdir(itemDirPath, { recursive: true });
        throw new Error(err);
    }
}
