import { makeProvider } from "../lib";
import { useState, useCallback } from "react";

function useAuth() {
  const [isAuth, setAuth] = useState(false);
  const login = useCallback((user, password) => {
    // validate login
    if (user && password) {
      setAuth(true);
    }
  }, []);
  return { isAuth, login };
}

export const {
  Provider: AuthProvider,
  useProvider: useAuthProvider,
} = makeProvider(useAuth);
