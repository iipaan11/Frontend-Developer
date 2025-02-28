import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserAdd from "./pages/UserAdd";
import UserEdit from "./pages/UserEdit";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/add" element={<UserAdd />} />
          <Route path="/user/edit/:id" element={<UserEdit />} />
          <Route path="/user/:id" element={<UserDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
