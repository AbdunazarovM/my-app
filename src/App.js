import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-container container">
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default App;
