import { RequestHandler } from 'express';
import multer, { memoryStorage } from 'multer';

export type IMulterFile = Express.Multer.File;

// export function diskStorageFileUpload(maxFileCount = 3): RequestHandler {
//     return multer({
//         dest: '/image_hosting',
//         limits: {
//             files: maxFileCount,
//             fileSize: 5242880, // 5MB
//         }
//     }).array('images', maxFileCount)
// }

export function memoryStorageFileUpload(maxFileCount = 3): RequestHandler {
    return multer({
        storage: memoryStorage(),
        limits: {
            files: maxFileCount,
            fileSize: 5242880, // 5MB
        }
    }).array('images', maxFileCount);
}
