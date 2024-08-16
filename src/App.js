import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import { ToastContainer } from "react-toastify";
import Error from "./pages/Error";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const Categories = lazy(() => import("./pages/CreateCategories"));
const Products = lazy(() => import("./pages/CreateProducts"));
const Revenue = lazy(() => import("./pages/Revenue"));
const Sales = lazy(() => import("./pages/Sales"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "/sales",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Sales />
          </Suspense>
        ),
      },
      {
        path: "/revenue",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Revenue />
          </Suspense>
        ),
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
