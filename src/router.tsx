import { createBrowserRouter } from "react-router-dom";
import CheckoutProduct from "./pages/CheckoutProduct"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import OrderDetails from "./pages/OrderDetails";
import DetailProduct from './pages/DetailProduct';
import HistoryOrder from "./pages/HistoryOrder";
import Profile from "./pages/Profile";
import ForgotPass from "./pages/ForgotPass";
import AxiosTry from "./components/AxiosTry";
import Product from "./pages/Product";
import PrivateRoute from "./components/PrivateRouting";

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
        path: "product",
        element: <Product />
      },
      {
        path: "checkoutproduct",
        element: (
          <PrivateRoute to={"/login"}>
            <CheckoutProduct />
          </PrivateRoute>
        ),
      },
      {
        path: 'orderdetails',
        element: (
          <PrivateRoute to={"/login"}>
            <OrderDetails />
          </PrivateRoute>
        ),
      },
      {
        path: 'detailsproduct',
        element: (
          <PrivateRoute to={"/login"}>
            <DetailProduct />
          </PrivateRoute>
        ),
      },
      {
        path: '/detailsproduct/:id',
        element: (
          <PrivateRoute to={"/login"}>
            <DetailProduct />
          </PrivateRoute>
        ),
      }
      ,
      {
        path: 'historyorder',
        element: (
          <PrivateRoute to={"/login"}>
            <HistoryOrder />
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute to={"/login"}>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'axios',
        element: <AxiosTry/>
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
    path: '/forgot',
    element: <ForgotPass/>
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routerWithChildren;
