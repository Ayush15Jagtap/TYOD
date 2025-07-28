import { createContext, useState } from "react";

export const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [files, setFiles] = useState([]);

  const addFile = (file) => {
    setFiles((prev) => [...prev, file]);
  };

  return (
    <FileContext.Provider value={{ files, addFile }}>
      {children}
    </FileContext.Provider>
  );
};
