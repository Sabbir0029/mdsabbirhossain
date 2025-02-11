
import { connectDB } from "@/lib/connectDB";
import { Blog } from "@/models/blogs/Blog.model";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
  await connectDB();

  try {
    const result = await Blog.find({});
    return NextResponse.json(
      { message: "Get All Blogs", result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error: (error as Error).message },
      { status: 500 }
    );
  }
};

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  await connectDB();

  try {
    const blogData = await request.json();
    const result = await Blog.create(blogData);
    return NextResponse.json(
      { message: "Blog Created", result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error: (error as Error).message },
      { status: 500 }
    );
  }
};
