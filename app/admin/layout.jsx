import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
        <ToastContainer theme="dark"/>
      <Sidebar />
      
      <div className="flex flex-col flex-grow overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <h1 className="text-2xl font-semibold text-gray-900">Admin Panel</h1>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    className="h-10 w-10 rounded-full border-2 border-gray-200"
                    src={assets.profile_icon}
                    alt="Profile"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Admin </div>
               
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>

        <footer className="bg-white border-t border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              © 2024 Blogger App. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}