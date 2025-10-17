import { prisma } from "@/Lib/Prisma/Prisma_Client";
import { NextRequest, NextResponse } from "next/server";

/**
 * @method GET
 * @Path '/api/comments'
 * @access All Users
 * @returns All Comments
 */

export async function GET(){
    try {
        //Check If User Loged In 
        const comments = await prisma.comments.findMany({})
        return NextResponse.json({message:'Get All Comment Successfully',comments,status:200},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Something Went Wrong',status:500,error},{status:500})
    }
}


/**
 * @method POST
 * @Path '/api/comments'
 * @access All Users
 * @returns New Comment
 */

export async function POST(request:NextRequest){
    try {
        const {name,body} = await request.json() 

        // [--- Steps Before Create Anew Comment In Real Projects ----]
        /*[1] check If User Loged In Or Not
          [2] Checked If User has Permiation To Comment On This Course Or Not
          [3] Checked Comment Validation 
        */
        
        //[4] Create A new Comment
         await prisma.comments.create(
            {data:{name,body}}
        )
        return NextResponse.json({message:'Created A New Comment Successfully',status:201},{status:201})
    } catch (error) {
     return NextResponse.json({message:'Something Went Wrong',status:500,error},{status:500})
    }
}