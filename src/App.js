import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import CreateCategories from "./pages/CreateCategories";
import CreateProducts from "./pages/CreateProducts";
import Sales from "./pages/Sales";
import Revenue from "./pages/Revenue";
import { ToastContainer } from "react-toastify";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <CreateCategories />,
      },
      {
        path: "/products",
        element: <CreateProducts />,
      },
      {
        path: "/sales",
        element: <Sales />,
      },
      {
        path: "/revenue",
        element: <Revenue />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
