import * as React from "react";
import { useAuthProvider } from "./auth-provider";

function LoginForm() {
  const { isAuth, login } = useAuthProvider();
  return isAuth ? (
    <div>loged in</div>
  ) : (
    <div onClick={() => login("user", "password")}>clcik to login</div>
  );
}

export default LoginForm;
