import { Outlet, createBrowserRouter } from "react-router-dom";

import Class from "./pages/Class";
import Function from "./pages/Function";
// import Position from "./pages/Position";
import Shop from "./pages/Shop";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";


function Error() {
  return <div>Error</div>;
}

function NotFound() {
  return <div>Route Not Found</div>;
}

const routerWithChildren = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "class",
        element: <Class />,
      },
      {
        path: "function",
        element: <Function />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routerWithChildren;
