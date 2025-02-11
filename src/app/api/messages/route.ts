import { connectDB } from "@/lib/connectDB";
import { Message } from "@/models/messages/messages.model";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
  await connectDB();

  try {
    const result = await Message.find({});
    return NextResponse.json(
      { message: "Get All Messages", result },
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
    const messageData = await request.json();
    const result = await Message.create(messageData);
    return NextResponse.json(
      { message: "Message Created", result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error: (error as Error).message },
      { status: 500 }
    );
  }
};
