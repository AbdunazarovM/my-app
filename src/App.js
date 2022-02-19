import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import MainB from "./components/MainB/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="main-container container">
        <Navbar />
        
          <Routes>
            <Route path="/Main" element={<Main />} />
            <Route path="/MainB" element={<MainB />} />
          </Routes>
        
        </div>
      </div>
      </BrowserRouter>
  );
};

export default App;
