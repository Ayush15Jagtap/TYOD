import { Link, useNavigate } from "react-router-dom";
import { FilesLogic } from "../logic/FilesLogic";

export default function Files() {
  const {
    currentPage,
    totalPages,
    selectedFiles,
    currentFiles,
    goToPrevPage,
    goToNextPage,
    toggleSelectFile,
    queryDocuments,
  } = FilesLogic();
  const navigate = useNavigate();

  const handleQuery = () => {
    queryDocuments();
    navigate("/chat");
  };
  

  return (
    <div className="w-full h-screen px-6 py-4 relative flex flex-col overflow-hidden">
      <div className="absolute top-0 right-0 w-[350px] h-[400px] bg-[url('/file1.svg')] bg-no-repeat bg-contain pointer-events-none z-0" />
      <div className="relative z-10 flex flex-col flex-grow">
        <div>
          <h2 className="text-2xl text-left font-semibold text-gray-900">Hey</h2>
          <p className="text-2xl text-left text-gray-400 mt-2 mb-2">Good Morning!</p>
        </div>

        <div className="flex justify-between items-center mb-4 mt-6">
          <h3 className="font-semibold text-lg">My Files</h3>
          <Link
            to="/upload"
            className="bg-blue-600 !text-white text-sm px-[7px] py-[10px] rounded-md flex items-center gap-2 hover:bg-blue-700"
          >
            Upload Files
            <img src="upload1.svg" alt="upload" className="w-5 h-5" />
          </Link>
        </div>

        {/* Table Container */}
        <div className="max-h-[400px] overflow-auto bg-[#F6F9FC] rounded-xl p-2">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm font-bold text-left text-gray-700">
              <thead className="text-[#1B6AFC] font-semibold border-gray-300">
                <tr>
                  <th className="px-2 py-1 w-1/3">File Name</th>
                  <th className="px-2 py-1 w-1/3">Category</th>
                  <th className="px-2 py-1 w-1/4">Uploaded On</th>
                  <th className="px-2 py-1 w-1/4 text-center"></th>
                </tr>
              </thead>
              <tbody>
                {currentFiles.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-gray-500 px-2 py-3 text-center">
                      No Files added.
                    </td>
                  </tr>
                ) : (
                  currentFiles.map((file) => (
                    <tr key={file.id} className="border-t">
                      <td className="px-2 py-2 whitespace-nowrap">{file.name}</td>
                      <td className="px-2 py-2">{file.category}</td>
                      <td className="px-2 py-2">{file.date}</td>
                      <td className="px-2 text-center">
                        <button
                          onClick={() => toggleSelectFile(file.id)}
                          className="focus:outline-none"
                        >
                          <img
                            src={
                              selectedFiles.includes(file.id)
                                ? "/Checkbox2.svg"
                                : "/Checkbox1.svg"
                            }
                            alt="select"
                            className="w-4 h-4"
                          />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
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

        {/* Query Button */}
        <div className="mt-auto pt-6 pb-4 flex justify-center">
           <button
          disabled={selectedFiles.length === 0}
          onClick={handleQuery}
          className="flex items-center bg-gradient-to-r from-[#1B6AFC] to-[#103F96] text-white px-2 py-2 rounded-lg shadow hover:bg-blue-700 gap-2 disabled:opacity-50"
        >
          Query Documents
          <img src="query.svg" alt="query" className="w-6 h-6" />
        </button>
        </div>
      </div>
    </div>
  );
}
