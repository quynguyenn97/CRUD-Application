import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
