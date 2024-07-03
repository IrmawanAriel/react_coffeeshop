import { Navigate, To } from "react-router-dom";
// import { useAuth } from "../contexts/auth";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

function PrivateRoute({ children, to }: { children: JSX.Element; to: To }) {

  const token = useSelector((state: RootState) => state.auth.token)
  if (!token) return <Navigate to={to} replace />;
  return children;
}

export default PrivateRoute;