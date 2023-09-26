import { NextResponse } from "next/server";
import DbConnect from "../../../../../server/db"
import Blog from "../../../../../server/src/model/schema"


export const GET = async (req:Request) => {
  try {
    await DbConnect();
    const blogs = await Blog.find()
    return new NextResponse(JSON.stringify(blogs), {status:200})
  } catch(err){
    console.log(err)
  }
}