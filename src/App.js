import "./App.css";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-container container">
        <Navbar />
        <Profile />
      </div>
    </div>
  );
};

export default App;
