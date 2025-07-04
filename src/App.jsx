import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Upload from './components/Upload';
import Chat from './components/Chat';
import Files from './components/Files';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">

        <div className="fixed top-0 left-0 h-screen w-60 z-10">
          <Navbar />
        </div>


        <div className="ml-60 w-[calc(100%-240px)] ">
          <Routes>
            <Route path="/" element={<Files />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
