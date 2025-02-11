import Sidebar from "@/components/shared/Sidebar";


const layout = async({ children }: Readonly<{ children: React.ReactNode }>) => {
  
  return <div className="flex min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
    <Sidebar/>
    {children}
    </div>;
};

export default layout;
