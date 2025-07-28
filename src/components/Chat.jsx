import { useEffect, useRef, useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      type: "question",
      text:
        "What specific clinical criteria define the boxed warning for Cytokine Release Syndrome in section WARNING: CYTOKINE RELEASE SYNDROME?",
    },
    {
      type: "answer",
      text:
        "The early morning fog clung to the quiet streets like a memory refusing to fade. Birds stirred in the trees, their songs muffled by the damp air, while a gentle breeze nudged fallen leaves across the pavement. Somewhere in the distance, a train rumbled past, its whistle slicing through the stillness like a reminder that the world was waking up. In that moment, everything felt suspended—time, noise, urgency—leaving only the hush of dawn and the promise of a new day.",
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { type: "answer", text: input }]);
      setInput("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-screen w-full">
      {/* Left Panel - PDF Viewer */}
      <div className="w-[55%] flex flex-col border-r">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-3 text-sm text-gray-700 font-medium">
          <span>File1234.pdf</span>
          <span className="text-lg text-black">Page 1/2</span>
        </div>

        {/* PDF Image */}
        <div className="flex-1 overflow-auto flex justify-center items-start p-4">
          <img
            src="/files/sample_pdf_preview.png"
            alt="PDF Page"
            className="rounded shadow max-w-full max-h-[90%]"
          />
        </div>
      </div>

      {/* Right Panel - Chat */}
      <div className="w-[45%] flex flex-col bg-[url('/file1.svg')] bg-no-repeat bg-contain">
        {/* Chat Header */}
        <div className="px-5 py-3 text-left text-base font-semibold text-gray-800">
          Chat
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`w-fit max-w-[85%] p-3 text-sm rounded-xl relative shadow-sm ${
                msg.type === "question"
                  ? "ml-auto bg-[#e5edff] text-black"
                  : "bg-[#f2f2f2] text-gray-700"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {/* Auto scroll anchor */}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask me here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 px-4 py-2 border rounded-full text-sm focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-[#1b6afc] rounded-full text-white hover:bg-[#1455c0] flex items-center justify-center"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
