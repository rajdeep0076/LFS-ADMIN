
import "./App.css";
import Navbar from './components/Navbar';
import SideBar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Footer from "./components/Footer";
import AddItem from "./pages/AddItem";
import ViewItem from "./pages/ViewItem";
function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/additems" element={<AddItem />} />
            <Route path="/viewitems" element={<ViewItem />} />
            {/* <Route path="*" element={<> not found</>} /> */}
          </Routes>
        </SideBar>
        <Footer />
      </Router>
    </>
  );
}

export default App;
