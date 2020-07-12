# React provider maker

Share hooks between any component in your app!

## How to use it

**creating the provider!**

```typescript
// auth-provider.ts
import { makeProvider } from "../lib";
import { useState, useCallback } from "react";

// Hook with any logic you want to share
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

// Creating provider and exporting its Provider to implemented and its hook to use it
export const {
  Provider: AuthProvider,
  useProvider: useAuthProvider,
} = makeProvider(useAuth);
```

**Initializing in your app**

```tsx
// app.tsx
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
```

**Using it in any component inside your app**

```tsx
// auth-provider.tsx
import * as React from "react";
import { useAuthProvider } from "./auth-provider";

function LoginForm() {
  const { isAuth, login } = useAuthProvider();
  return isAuth ? (
    <div>loged in</div>
  ) : (
    <div onClick={() => login("user", "password")}>click to login</div>
  );
}

export default LoginForm;
```
