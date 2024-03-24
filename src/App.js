import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./comp/Login";
import RecipeFinder from "./comp/RecipeFinder";
import Root from "./comp/Root";
import HomePage from "./comp/HomePage";
import Register from "./comp/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/recipe",
          element: <RecipeFinder />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
