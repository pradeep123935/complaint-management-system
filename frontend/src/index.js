import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import AddComplaint from "./pages/AddComplaint";
import Dashboard from "./pages/Dashboard";
import MyComplaints from "./pages/MyComplaints";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="" element={<Home />}>
        <Route index={true} path="/dashboard" element={<Dashboard />} />
        <Route path="/add-complaint" element={<AddComplaint />} />
        <Route path="/my-complaints" element={<MyComplaints />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
