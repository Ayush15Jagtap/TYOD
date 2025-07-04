import { useEffect, useRef, useState } from "react";

export default function Upload() {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    setFiles(stored);
  }, []);

  const saveFiles = (updated) => {
    setFiles(updated);
    localStorage.setItem("uploadedFiles", JSON.stringify(updated));
  };

  const handleFileUpload = (selectedFiles) => {
    const newFiles = Array.from(selectedFiles).map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      fileBlob: URL.createObjectURL(file),
      category: "Prescribing Information",
    }));
    saveFiles([...files, ...newFiles]);
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
    saveFiles(updated);
  };

  const handleRemove = (id) => {
    const updated = files.filter((f) => f.id !== id);
    saveFiles(updated);
  };

  return (
    <div className="p-6 w-full overflow-y-auto">
      <h2 className="text-xl text-left font-semibold mb-4">Upload Files</h2>

  
      <div
        className="border-2 border-dashed border-gray-300 bg-[#F6F9FC] rounded-md p-6 text-center text-sm text-gray-600"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="flex flex-col items-center gap-2">
          <img src="plus.svg" alt="plus" className="w-6 h-6" />
          <p className="font-medium">Drag and Drop</p>
          <p className="text-xs">Max file size - 10 MB</p>
        </div>
      </div>


      <div className="mt-4 flex justify-end">
        <button
          onClick={() => fileInputRef.current.click()}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
        >
          Select files from device
        </button>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={handleFileInput}
          className="hidden"
        />
      </div>


      <div className=" rounded-xl bg-[#F6F9FC] p-4 mt-6">
        <div className="grid grid-cols-[2fr_1.5fr_1fr] font-semibold text-blue-600 text-sm mb-2">
          <div>File Name</div>
          <div>
            Select Category <span className="text-red-500">*</span>
          </div>
        </div>

        {files.length === 0 ? (
          <p className="text-gray-500 text-sm mt-2">No files selected.</p>
        ) : (
          files.map((file) => (
            <div
              key={file.id}
              className="grid grid-cols-[2fr_1.5fr_1fr] items-center border-t-2 border-[#F5F7FB] py-3 text-sm"
            >
              <div>
                <a
                  href={file.fileBlob}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  {file.name}
                </a>
              </div>

              <select
                value={file.category}
                onChange={(e) =>
                  handleCategoryChange(file.id, e.target.value)
                }
                className="border px-2 py-1 rounded-md text-sm bg-[#F5F7FB] w-full"
              >
                <option value="Prescribing Information">
                  Prescribing Information
                </option>
                <option value="Treatment Journey">Treatment Journey</option>
                <option value="Lab Report">Lab Report</option>
              </select>
              <span className="ml-25">
              <button
                onClick={() => handleRemove(file.id)}
                className="text-red-600 font-medium flex  hover:underline ml-4"
                >
                <img src="cross.svg" alt="query" className="w-6 h-6" />
                 Remove
              </button>
                  </span>
            </div>
          ))
        )}
      </div>


      <div className="text-center mt-8">
        <button
          disabled={files.length === 0}
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 disabled:opacity-50"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
