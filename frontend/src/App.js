import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/authContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </>
  );
}

export default App;
