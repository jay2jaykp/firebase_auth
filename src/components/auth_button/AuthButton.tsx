import { signInWithPopup, signOut } from "@firebase/auth";
import * as React from "react";
import Button from "react-bootstrap/esm/Button";
import { AuthContext } from "../../services/auth/AuthProvider";
import {
  firebase_auth,
  googleProvider,
} from "../../services/firebase/firebase";

const AuthButton: React.FC = () => {
  const { auth, setAuth } = React.useContext(AuthContext) as IAuthContext;

  const logout = async () => {
    try {
      await signOut(firebase_auth);
      setAuth((prevState) => ({
        ...prevState,
        isAuthenticated: false,
        userEmail: null,
        userName: null,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const login = async () => {
    try {
      const result = await signInWithPopup(firebase_auth, googleProvider);
      setAuth({
        ...auth,
        isAuthenticated: true,
        userEmail: result.user.email,
        userName: result.user.displayName,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return auth.isAuthenticated ? (
    <Button onClick={logout}>Logout</Button>
  ) : (
    <Button onClick={login}>Login</Button>
  );
};

export default AuthButton;
