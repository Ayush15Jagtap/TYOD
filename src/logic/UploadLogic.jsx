import { useRef, useState, useContext } from "react";
import { FileContext } from "../context/FileContext";

export const UploadLogic = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef();
  const { addFile } = useContext(FileContext);

  const handleFileUpload = (selectedFiles) => {
    const newFiles = Array.from(selectedFiles).map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      category: "Prescribing Information",
      date: new Date().toLocaleDateString(),
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files.length) {
      handleFileUpload(e.target.files);
    }
  };

  const handleCategoryChange = (id, newCategory) => {
    const updated = files.map((f) =>
      f.id === id ? { ...f, category: newCategory } : f
    );
    setFiles(updated);
  };

  const handleRemove = (id) => {
    const updated = files.filter((f) => f.id !== id);
    setFiles(updated);
  };

  const handleUpload = () => {
    files.forEach((file) => {
      addFile(file);
    });
    setFiles([]);
  };

  return {
    files,
    fileInputRef,
    handleDrop,
    handleFileInput,
    handleCategoryChange,
    handleRemove,
    handleUpload,
  };
};
