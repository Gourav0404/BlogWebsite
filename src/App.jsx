import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CppBlogDetail from './components/CppDSA/CppBlogDetail';
import CppDsa from './components/CppDSA/CppDsa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactBlogDetail from './components/CppDSA/ReactBlogDetail';
import OopsBlogDetail from './components/CppDSA/OopsBlogDetail';
import GitGithubDetail from './components/CppDSA/GitGithubDetail'
import FrontendBlogDetail from './components/CppDSA/FrontendBlogDetail';
import PythonBlogDetail from './components/CppDSA/PythonBlogDetail'
import BCAdetail from './components/CppDSA/BCAdetail';
import SEdetail from './components/CppDSA/SEdetail';
import WebdevDetail from './components/CppDSA/WebdevDetail';




function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-gray-800 text-white">
        <Routes>
          {/* C++ DSA Routes */}
          <Route path="/" element={<CppDsa />} />
          <Route path="/cpp-blog" element={<CppBlogDetail />} />

          {/* React Blog Routes */}
          <Route path="/react-blog" element={<ReactBlogDetail />} />

          {/* OOPS Blog Routes */}
          <Route path="/oops-blog" element={<OopsBlogDetail />} />
          {/* Git & Github Routes */}
          <Route path="/git-github" element={<GitGithubDetail />} />

          {/* frontend Routes */}
          <Route path="/frontend" element={<FrontendBlogDetail />} />
          {/* python programming */}
          <Route path="/python" element={<PythonBlogDetail />} />

          {/* BCA  Blog */}
          <Route path="/bca" element={<BCAdetail />} />

          {/* SE Blog */}
          <Route path="/SE" element={<SEdetail />} />
          {/* Morden web Dev  */}
          <Route  path='/web-dev' element={<WebdevDetail />}/>
        </Routes>

        <Routes>

        </Routes>


        {/* ✅ Toast Container to display notifications */}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </Router>
  );
}

export default App;
