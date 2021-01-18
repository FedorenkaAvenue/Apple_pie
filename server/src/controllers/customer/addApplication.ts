import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import postHostingItem from '@servises/image/postHostingItem';
import { ADD_APPLICATION_QUERY } from '@db/postgres/queries/application';
import { FolderTypes } from '@servises/image/index';
import IApplication from '@interfaces/Application';
import { IMulterFile } from '@middleWares/parseFormDataFiles';

export default async function({ files, body }: Request<any, any, IApplication>, res: Response, next: NextFunction) {
    const { userId } = res.locals.userTokenPayload;
    const applId = uuidv4();
    
    try {
        const { title, descr } = body;
        
        if (!files.length && !title && !descr) throw new Error();

        try {
            const imageHrefArr = await postHostingItem(
                FolderTypes.APPLICATION_HOSTING_FOLDER,
                applId,
                files as Array<IMulterFile>
            );

            await ADD_APPLICATION_QUERY({
                id: applId,
                author: userId,
                images: imageHrefArr,
                created_at: Date.now(),
                title, descr
            });
            
            res.sendStatus(201);
        } catch(err) {
            next(err);
        }
    } catch(err) {
        res.sendStatus(400);
    }
}
