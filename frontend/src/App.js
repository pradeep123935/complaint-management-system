import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/authContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Toaster />
        <Outlet />
      </AuthContextProvider>
    </>
  );
}

export default App;
