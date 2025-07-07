import { Link } from "react-router-dom";
import { useState } from "react";

export default function Files() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1; 

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="w-full px-6 py-4 relative flex flex-col overflow-hidden">
      <div className="absolute top-0 right-0 w-[425px] h-[400px] bg-[url('/file1.svg')] bg-no-repeat bg-contain pointer-events-none z-0" />

      <div className="relative z-10">
        <h2 className="text-2xl text-left font-semibold text-gray-900">Hey</h2>
        <p className="text-2xl text-left text-gray-400 mt-2 mb-4">Good Morning!</p>

        <div className="flex justify-between items-center mb-4 mt-20">
          <h3 className="font-semibold text-lg">My Files</h3>
          <Link
            to="/upload"
            className="bg-blue-600 !text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700"
          >
            Upload Files
            <img src="upload1.svg" alt="upload" className="w-5 h-5" />
          </Link>
        </div>


        <div className="flex-1 max-h-[400px] overflow-auto bg-[#F6F9FC] rounded-xl p-2">
          <table className="w-full text-xs text-left text-gray-700">
            <thead className="text-[#1B6AFC] font-semibold  border-gray-300">
              <tr>
                <th className="px-2 py-1 w-1/4">File Name</th>
                <th className="px-2 py-1 w-1/4">Category</th>
                <th className="px-2 py-1 w-1/4">Uploaded On</th>
                <th className="px-2 py-1 w-1/4 text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" className="text-gray-500 px-2 py-3 text-center">
                  No Files added.
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="flex justify-end items-center mt-4 px-2">
          <div className="flex gap-2 items-center">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="bg-blue-600 text-white px-3 py-1 rounded-[6.33px] hover:bg-blue-700 disabled:opacity-50"
            >
              <img src="arrow1.svg" alt="prev" className="w-2 h-5" />
            </button>

            <div className="text-sm text-gray-600">
               {currentPage}-{totalPages}
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="bg-blue-600 text-white px-3 py-1 rounded-[6.33px] hover:bg-blue-700 disabled:opacity-50"
            >
              <img src="arrow2.svg" alt="next" className="w-2 h-5" />
            </button>
          </div>
        </div>

        <div className="text-center flex justify-center mt-20">
          <button className="flex items-center bg-gradient-to-r from-[#1B6AFC] to-[#103F96] text-white px-[14px] py-[9px] rounded-[9.18px] shadow-blue-500 hover:bg-blue-700 gap-[12px] text-sm">
            Query Documents
            <img src="query.svg" alt="query" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
