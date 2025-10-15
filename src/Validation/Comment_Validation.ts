import {z} from 'zod';

//Create Anew Comment Validation
export const CreateAnewCommentValidation = z.object({
    id:z.number(),
    name:z.string(),
    date:z.string(),
    image:z.string().optional(),
    comment:z.string().min(5).max(250),
})