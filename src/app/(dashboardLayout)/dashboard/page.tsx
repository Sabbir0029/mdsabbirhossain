import { authOptions } from "@/util/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const dashboard = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen mx-auto mt-8">
      {session?.user?.image ? (
        <Image
          src={session?.user?.image}
          alt="Dynamic Image"
          className="rounded-full mt-8"
          width={160}
          height={160}
        />
      ) : (
        <p>No image available</p>
      )}
      <h1 className="text-2xl font-bold mt-2">
        {" "}
        welcome {session?.user?.name}
      </h1>
      <h1> {session?.user?.email}</h1>
    </div>
  );
};

export default dashboard;
