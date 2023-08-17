import { NextResponse } from "next/server";
import { dbConnect } from "../../../../config/dbConnect";
dbConnect();

//get one post
export async function GET(request, { params }) {
  return NextResponse.json({
    message: "Get one blog post API endpoint", 
    blogid: params.blogid
  });
}

export async function PUT(request, { params }) {
  return NextResponse.json({
    message: "Edit one blog post API endpoint", 
    blogid: params.blogid
  });
}

export async function DELETE(request, { params }) {
  return NextResponse.json({
    message: "Delete one blog post by id API endpoint", 
    blogid: params.blogid
  });
}