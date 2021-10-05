import * as React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<IAuth>({
    isAuthenticated: false,
    userName: null,
    userEmail: null,
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
