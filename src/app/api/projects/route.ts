import { connectDB } from "@/lib/connectDB";
import { Project } from "@/models/projects/Projects.model";
import {  NextResponse } from "next/server";

export const GET = async (): Promise<NextResponse> => {
  await connectDB();

  try {
    const result = await Project.find({});
    return NextResponse.json(
      { message: "Get All Projects", result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error: (error as Error).message },
      { status: 500 }
    );
  }
};

// export const POST = async (request: NextRequest): Promise<NextResponse> => {
//   await connectDB();

//   try {
//     const projectData = await request.json();
//     const result = await Project.create(projectData);
//     return NextResponse.json(
//       { message: "Project Created", result },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Something went wrong", error: (error as Error).message },
//       { status: 500 }
//     );
//   }
// };
