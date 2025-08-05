import ChatLogic from "../logic/ChatLogic";
import { useState } from "react";

export default function Chat() {
  const {
    messages,
    input,
    setInput,
    handleSend,
    handleKeyDown,
    dropdownOpen,
    setDropdownOpen,
    messagesEndRef,
    queriedFiles,
  } = ChatLogic();

  const [selectedFile, setSelectedFile] = useState(
    queriedFiles.length > 0 ? queriedFiles[0] : null
  );

  const handleSelectFile = (file) => {
    setSelectedFile(file);
    setDropdownOpen(false);
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left PDF Section */}
      <div className="w-[55%] flex flex-col border-r-2">
        <div className="flex justify-between items-center px-5 py-3 mt-7 text-md text-gray-700 font-medium relative">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none bg-white"
            >
              <span>
                {selectedFile ? selectedFile.name : "No file selected"}
              </span>
              <img src="/DropdownIcon.svg" alt="dropdown" className="w-6 h-6" />
            </button>

            {dropdownOpen && queriedFiles.length > 0 && (
              <div className="absolute text-left left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                <ul className="text-sm text-gray-700">
                  {queriedFiles.map((file) => (
                    <li
                      key={file.id}
                      onClick={() => handleSelectFile(file)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {file.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <span className="text-lg text-black">Page 1/2</span>
        </div>

        <div className="flex-1 overflow-auto flex justify-center items-start p-4">
          <img
            src="/fingles/sample_pdf_preview.p"
            alt="PDF Page"
            className="rounded shadow max-w-full max-h-[90%]"
          />
        </div>
      </div>

      {/* Right Chat Panel */}
      <div className="w-[45%] flex flex-col bg-[url('/file1.svg')] bg-no-repeat bg-contain">
        <div className="px-5 py-6 text-left text-xl font-semibold text-gray-800">
          Chat
        </div>

        {/* Chat Bubbles */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`w-fit max-w-[85%] break-words whitespace-pre-wrap p-2 text-sm border border-[#D1E1FE] relative text-left shadow-sm ${
                msg.type === "question"
                  ? "ml-auto bg-[#D1E1FE] text-black rounded-s-lg rounded-br-lg"
                  : "bg-[#FFFFFF] text-[#000000] rounded-tr-lg rounded-b-lg"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4">
          <div className="relative w-full">
            <div className="w-full border rounded-full text-sm pl-4 pr-12 py-1.5">
              <textarea
                placeholder="Ask me here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                className="w-full p-1 resize-none bg-transparent focus:outline-none text-sm overflow-hidden whitespace-nowrap"
                style={{ height: "24px" }}
              />
            </div>
            <button
              onClick={handleSend}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 bg-[#1b6afc] text-white rounded-full hover:bg-[#1455c0]"
            >
              <img src="/SendIcon.svg" alt="Send" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
