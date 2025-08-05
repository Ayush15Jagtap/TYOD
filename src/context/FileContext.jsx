// FileContext.jsx
import { createContext, useState } from "react";

export const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const [queriedFiles, setQueriedFiles] = useState([]); // Stores selected files for chat dropdown

  const addFile = (file) => {
    setFiles((prev) => [...prev, file]);
  };

  return (
    <FileContext.Provider
      value={{
        files,
        addFile,
        queriedFiles,
        setQueriedFiles,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};
