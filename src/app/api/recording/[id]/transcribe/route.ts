import { client } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { json } from "stream/consumers"

export async function POST (req : NextRequest, {params} : {params : {id : string}}){

    // WIP : Wire up AI Agent
    const body = await req.json()
    const {id} = params

    const content = JSON.parse(body.content)

    const transcribed = await client.video.update({
        where : {
            userId : id,
            source : body.filename
        },
        data : {
            title : content.title,
            description : content.summary,
            summary : body.transcript

        }
    }) 

if(transcribed) 
{
    console.log('🟢 Transcribed')
   return NextResponse.json({status : 200})
}

console.log('🔴 Transcription went wrong')
return NextResponse.json({status : 400})

}