import * as React from "react";
import { AuthProvider } from "./auth-provider";
import LoginForm from "./login-form";

function App() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
}

export default App;
