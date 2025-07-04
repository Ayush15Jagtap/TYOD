import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Files() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    setFiles(stored);
  }, []);

  return (
    <div className="w-full px-6 py-4 relative flex flex-col overflow-hidden">
      <div className="absolute top-0 right-0 w-[425px] h-[400px] bg-[url('/file1.svg')] bg-no-repeat bg-contain pointer-events-none z-0" />

  
      <div className="relative z-10">
        <h2 className="text-2xl text-left font-semibold text-gray-900">Hey</h2>
        <p className="text-2xl text-left text-gray-400 mt-3 mb-4">Good Morning!</p>

        <div className="flex justify-between items-center mb-4 mt-20">
          <h3 className="font-semibold text-lg">My Files</h3>
          <Link
            to="/upload"
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700"
          >
            Upload Files
            <img src="upload1.svg" alt="upload" className="w-5 h-5" />
          </Link>
        </div>

        {/* Table Section */}
        <div className="flex-1 max-h-[400px] overflow-auto bg-[#F6F9FC] rounded-xl p-2">
          <table className="w-full text-xs text-left text-gray-700">
            <thead className="text-gray-600 font-semibold border-b border-gray-300">
              <tr>
                <th className="px-2 py-1 w-1/4">File Name</th>
                <th className="px-2 py-1 w-1/4">Category</th>
                <th className="px-2 py-1 w-1/4">Uploaded On</th>
                <th className="px-2 py-1 w-1/4 text-center">Select</th>
              </tr>
            </thead>
            <tbody>
              {files.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-gray-500 px-2 py-3 text-center">
                    No files uploaded.
                  </td>
                </tr>
              ) : (
                files.map((file, idx) => (
                  <tr key={idx} className="border-t border-gray-200">
                    <td className="px-2 py-2">{file.name}</td>
                    <td className="px-2 py-2">{file.category}</td>
                    <td className="px-2 py-2">{file.date || "20th May 2025"}</td>
                    <td className="px-2 py-2 text-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded-full accent-blue-600"
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 px-2">
          <div className="text-sm text-gray-600"></div>
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700">
              <img src="arrow1.svg" alt="prev" className="w-2 h-5" />
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700">
              <img src="arrow2.svg" alt="next" className="w-2 h-5" />
            </button>
          </div>
        </div>

        {/* Query Button */}
        <div className="text-center flex justify-center mt-20">
          <button className="flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-3 rounded-md shadow-md hover:bg-blue-700 gap-2 text-sm">
            Query Documents
            <img src="query.svg" alt="query" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
