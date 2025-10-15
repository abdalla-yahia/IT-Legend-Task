import {z} from 'zod';

//Create Anew Question Validation
export const CreateAnewQuestionValidation = z.object({
    id:z.number(),
    name:z.string(),
    date:z.string(),
    image:z.string().optional(),
    question:z.string().min(5).max(250),
})