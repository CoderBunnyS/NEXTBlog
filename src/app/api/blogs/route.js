import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    message: "Get all blog posts API endpoint",
  });
}

export async function POST(request) {
    const reqBody = await request.json();
    return NextResponse.json({
      message: "Add new blog post API endpoint",
      body: reqBody,
    });
  }

