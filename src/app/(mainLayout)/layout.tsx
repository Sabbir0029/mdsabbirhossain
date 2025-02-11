import Footer from "@/components/shared/Footer";
import Navber from "@/components/shared/Navber";
import { authOptions } from "@/util/authOptions";
import { getServerSession } from "next-auth";

const layout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 text-black dark:text-white transition-colors">
      <Navber session={session} />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
