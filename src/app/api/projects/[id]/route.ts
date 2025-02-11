import { connectDB } from "@/lib/connectDB";
import { Project } from "@/models/projects/Projects.model";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export const GET = async (
  req: NextRequest,
  { params }: Params
): Promise<NextResponse> => {
  await connectDB();

  try {
    const result = await Project.findOne({ _id: params.id });

    if (!result) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Get single Project", result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error: (error as Error).message },
      { status: 500 }
    );
  }
};
