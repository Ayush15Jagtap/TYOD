import { UploadLogic } from "../logic/UploadLogic";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const {
    files,
    fileInputRef,
    handleDrop,
    handleFileInput,
    handleCategoryChange,
    handleRemove,
    handleUpload,
  } = UploadLogic();
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  }

  return (
    <div className="p-6 w-full h-[100dvh] flex flex-col overflow-hidden">
      <h2 className="text-xl text-left font-semibold mb-4">Upload Files</h2>

      <div
        className="border-2 border-dashed border-gray-300 bg-[#F6F9FC] rounded-md py-4 text-center text-sm text-gray-600"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div
          onClick={() => fileInputRef.current.click()}
          className="flex flex-col justify-between items-center cursor-pointer h-[130px]"
        >
          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={handleFileInput}
            className="hidden"
          />
          <div className="flex flex-col items-center gap-2">
            <img src="plus.svg" alt="plus" className="w-6 h-6 mt-4 " />
            <p className="text-black font-extrabold font-medium">Drag and Drop</p>
          </div>
          <p className="text-xs text-black">Max file size - 10 MB</p>
        </div>
      </div>

      <div className="rounded-xl mt-6 mb-6 overflow-y-auto max-h-[260px]">
  <table className="w-full text-sm font-bold text-left text-gray-700">
    <thead className="sticky top-0 bg-white z-10">
      <tr className="grid grid-cols-[2fr_1.5fr_1fr] text-blue-600 font-semibold py-2">
        <th className="pl-2">File Name</th>
        <th>Select Category</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      {files.length === 0 ? (
        <tr>
          <td colSpan="3" className="text-gray-500 text-center text-sm mt-2 pl-2 py-2">
            No files selected.
          </td>
        </tr>
      ) : (
        files.map((file) => (
          <tr
            key={file.id}
            className="grid grid-cols-[2fr_1.5fr_1fr] items-center border-t-2 border-[#F5F7FB] py-3"
          >
            <td className="pl-2">{file.name}</td>
            <td>
              <select
                value={file.category}
                onChange={(e) => handleCategoryChange(file.id, e.target.value)}
                className="border px-2 py-2 rounded-md text-sm bg-[#F5F7FB] w-full"
              >
                <option value="Prescribing Information">Prescribing Information</option>
                <option value="Treatment Journey">Treatment Journey</option>
                <option value="Lab Report">Lab Report</option>
              </select>
            </td>
            <td>
              <button
                onClick={() => handleRemove(file.id)}
                className="text-red-600 font-medium flex items-center hover:underline bg-white ml-4"
              >
                <img src="cross.svg" alt="Remove" className="w-5 h-5 mr-1" />
                Remove
              </button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>


      <div className="mt-auto pt-2 pb-4 flex items-center justify-center">
        <button
          onClick={()=>{
            handleUpload();
            handleNavigate("/");
          }}
          disabled={files.length === 0}
          className="flex bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 rounded-[9.18px] shadow-[0_4px_12px_rgba(27,106,252,0.26)] hover:bg-blue-700 gap-[7.65px] text-md disabled:opacity-50"
        >
          Upload
          <img src="upload1.svg" alt="query" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
