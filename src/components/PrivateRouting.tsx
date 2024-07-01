import { Navigate, To } from "react-router-dom";
import { useSignInState } from "./context/SignInToken";
// import { useAuth } from "../contexts/auth";

function PrivateRoute({ children, to }: { children: JSX.Element; to: To }) {
  const { token } = useSignInState();
  if (!token) return <Navigate to={to} replace />;
  return children;
}

export default PrivateRoute;