import { useState, useContext } from "react";
import { FileContext } from "../context/FileContext";

export const FilesLogic = () => {
  const { files, setQueriedFiles } = useContext(FileContext);
  const filesPerPage = 5;

  const totalPages = Math.ceil(files.length / filesPerPage) || 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const startIndex = (currentPage - 1) * filesPerPage;
  const endIndex = startIndex + filesPerPage;
  const currentFiles = files.slice(startIndex, endIndex);

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const toggleSelectFile = (fileId) => {
    setSelectedFiles((prev) =>
      prev.includes(fileId)
        ? prev.filter((id) => id !== fileId)
        : [...prev, fileId]
    );
  };

  
  const queryDocuments = () => {
    const selected = files.filter((file) => selectedFiles.includes(file.id));
    setQueriedFiles(selected);
  };

  return {
    files,
    currentPage,
    totalPages,
    selectedFiles,
    currentFiles,
    goToPrevPage,
    goToNextPage,
    toggleSelectFile,
    queryDocuments,
  };
};
