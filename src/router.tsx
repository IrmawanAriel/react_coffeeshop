import { Outlet, createBrowserRouter } from "react-router-dom";

import Class from "./pages/Example/Class";
import Function from "./pages/Example/Function";
// import Position from "./pages/Position";
import Shop from "./pages/Example/Shop";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";


function Error() {
  return <div>Error</div>;
}

function NotFound() {
  return <div>Route Not Found</div>;
}

const routerWithChildren = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Home />,
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
