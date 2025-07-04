import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div
      className="w-60 h-screen bg-[#ECF3FE] flex flex-col justify-between py-3 px-4 bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('./nav1.svg')" }}
    >
  
      <div>
        <h1 className="text-lg text-center font-bold text-blue-700 mb-16">BYOD</h1>

  
        <div className="flex flex-col gap-3">
          <button
            onClick={()=>navigate("/")}
            className="flex items-center gap-3 bg-white !text-black font-medium py-2 px-4 rounded-l-md rounded-r-2xl shadow "
          >
            <img src="file.svg" alt="My Files" className="w-5 h-5" />
            <span>My Files</span>
          </button>

          <button
            onClick={()=>navigate("/upload")}
            className="flex items-center gap-3 !text-black py-2 px-4 rounded-full "
          >
            <img src="upload.svg" alt="Upload Files" className="w-5 h-5" />
            <span>Upload Files</span>
          </button>

          <button
            onClick={()=>navigate("/chat")}
            className="flex items-center gap-3 !text-black  py-2 px-4 rounded-full "
          >
            <img src="chat.svg" alt="Chat" className="w-5 h-5" />
            <span>Chat</span>
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="flex items-center gap-3 text-gray-700 cursor-pointer px-4">
        <img src="logout.svg" alt="Logout" className="w-5 h-5" />
        <span className="text-sm font-medium">Logout</span>
      </div>
    </div>
  );
}
