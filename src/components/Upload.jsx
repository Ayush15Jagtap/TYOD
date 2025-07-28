import { useRef, useState, useContext } from "react";


export default function Upload() {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef();
  

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


  return (
    <div className="p-6 w-full h-[100dvh] flex flex-col overflow-hidden">
      <h2 className="text-xl text-left font-semibold mb-4">Upload Files</h2>

      <div
        className="border-2 border-dashed border-gray-300 bg-[#F6F9FC] rounded-md py-4 text-center text-sm text-gray-600"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div onClick={() => fileInputRef.current.click()} className="flex flex-col justify-between items-center cursor-pointer h-[130px]">
          <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={handleFileInput}
          className="hidden"
        />
          <div className="flex flex-col items-center gap-2">
            <img src="plus.svg"  alt="plus" className="w-6 h-6 mt-4 " />
            <p className="text-black font-extrabold font-medium">
              Drag and Drop
            </p>
          </div>
          <p className="text-xs text-black">Max file size - 10 MB</p>
        </div>
      </div>

      

      <div className="rounded-xl bg-[#F6F9FC] p-4 mt-6 mb-10 overflow-y-auto max-h-[260px]">
        <div className="grid grid-cols-[2fr_1.5fr_1fr] font-semibold text-left text-blue-600 text-sm mb-2">
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
              <div className="flex ">
                <h2
                
                  className="text-black "
                >
                  {file.name}
                </h2>
              </div>

              <select
                value={file.category}
                onChange={(e) => handleCategoryChange(file.id, e.target.value)}
                className="border px-2 py-1 rounded-md text-sm bg-[#F5F7FB] w-full"
              >
                <option value="Prescribing Information">
                  Prescribing Information
                </option>
                <option value="Treatment Journey">Treatment Journey</option>
                <option value="Lab Report">Lab Report</option>
              </select>

              <button
                onClick={() => handleRemove(file.id)}
                className="text-red-600 font-medium flex items-center hover:underline ml-4"
              >
                <img src="cross.svg" alt="Remove" className="w-5 h-5 mr-1" />
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="mt-auto pt-2 pb-4 flex items-center justify-center">
        <button
          
          disabled={files.length === 0}
          className="flex bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 rounded-[9.18px] shadow-blue-500 hover:bg-blue-700 gap-[7.65px] text-md disabled:opacity-50"
        >
          Upload
          <img src="upload1.svg" alt="query" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
