import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div
      className="w-60 h-screen bg-[#ECF3FE] flex flex-col justify-between py-3 px-4 bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('./nav1.svg')" }}
    >
      <div>
        <div className="flex items-center justify-center gap-2 mb-16 mt-1">
          <img src="tyod1.svg" alt="Logo" className="w-6 h-6" />
          <h1 className="text-xl font-bold text-blue-600 tracking-wide">BYOD</h1>
        </div>

        <div className="flex flex-col gap-3">
       
          <button
            onClick={() => handleClick("/")}
            className={`flex items-center gap-3 px-4 py-2 text-base transition-all duration-150 ${
              activeTab === "/"
                ? "bg-white text-black font-semibold rounded-r-[39px] shadow"
                : "bg-transparent text-gray-500"
            }`}
          >
            <img
              src={activeTab === "/" ? "file2.svg" : "file.svg"}
              alt="My Files"
              className="w-5 h-5"
            />
            <span>My Files</span>
          </button>

          
          <button
            onClick={() => handleClick("/upload")}
            className={`flex items-center gap-3 px-4 py-2 text-base transition-all duration-150 ${
              activeTab === "/upload"
                ? "bg-white text-black font-semibold rounded-r-[39px] shadow"
                : "bg-transparent text-gray-500"
            }`}
          >
            <img
              src={activeTab === "/upload" ? "upload2.svg" : "upload.svg"}
              alt="Upload Files"
              className="w-5 h-5"
            />
            <span>Upload Files</span>
          </button>

          <button
            onClick={() => handleClick("/chat")}
            className={`flex items-center gap-3 px-4 py-2 text-base transition-all duration-150 ${
              activeTab === "/chat"
                ? "bg-white text-black font-semibold rounded-r-[39px] shadow"
                : "bg-transparent text-gray-500"
            }`}
          >
            <img
              src={activeTab === "/chat" ? "chat2.svg" : "chat.svg"}
              alt="Chat"
              className="w-5 h-5"
            />
            <span>Chat</span>
          </button>
        </div>
      </div>

  
      <div className="flex items-center gap-3 text-gray-700 cursor-pointer px-4 mb-4">
        <img src="logout.svg" alt="Logout" className="w-5 h-5" />
        <span className="text-sm font-medium">Logout</span>
      </div>
    </div>
  );
}
