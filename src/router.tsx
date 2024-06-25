import { createBrowserRouter } from "react-router-dom";

import CheckoutProduct from "./pages/CheckoutProduct"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import OrderDetails from "./pages/OrderDetails";
import DetailProduct from "./pages/DetailProduct";
import HistoryOrder from "./pages/HistoryOrder";
import Profile from "./pages/Profile";
import ForgotPass from "./pages/ForgotPass";


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
        path: "checkout",
        element: <CheckoutProduct />
      },
      {
        path: 'orderdetails',
        element: <OrderDetails/>
      },
      {
        path: 'detailproduct',
        element: <DetailProduct/>
      },
      {
        path: 'historyorder',
        element: <HistoryOrder/>
      },
      {
        path: 'profile',
        element: <Profile/>
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
    path: 'forgot',
    element: <ForgotPass/>
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routerWithChildren;
