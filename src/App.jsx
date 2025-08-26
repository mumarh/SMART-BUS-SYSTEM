import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import  Contact from "./Pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Tickets from "./pages/Tickets"
import BusDetails from "./pages/BusDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/tickets", element: <Tickets/> },
      { path: "/busdetails/:id", element: <BusDetails/> },

    ],
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
