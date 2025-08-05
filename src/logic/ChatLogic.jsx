import { useEffect, useRef, useState, useContext } from "react";
import { FileContext } from "../context/FileContext";

export default function ChatLogic() {
  const [messages, setMessages] = useState([
    {
      type: "question",
      text: "What specific clinical criteria define the boxed warning for Cytokine Release Syndrome in section WARNING: CYTOKINE RELEASE SYNDROME?",
    },
    {
      type: "answer",
      text: "The early morning fog clung to the quiet streets like a memory refusing to fade. Birds stirred in the trees, their songs muffled by the damp air, while a gentle breeze nudged fallen leaves across the pavement. Somewhere in the distance, a train rumbled past, its whistle slicing through the stillness like a reminder that the world was waking up. In that moment, everything felt suspended—time, noise, urgency—leaving only the hush of dawn and the promise of a new day.",
    },
  ]);

  const [input, setInput] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const { queriedFiles } = useContext(FileContext); // ✅ access selected files for dropdown

  const handleSend = () => {
    const trimmed = input.trim();
    if (trimmed) {
      setMessages((prev) => [...prev, { type: "question", text: trimmed }]);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return {
    messages,
    input,
    setInput,
    handleSend,
    handleKeyDown,
    dropdownOpen,
    setDropdownOpen,
    messagesEndRef,
    queriedFiles, // ✅ include in return so Chat.jsx can access
  };
}
