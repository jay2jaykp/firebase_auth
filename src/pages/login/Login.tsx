import * as React from "react";
import AuthButton from "../../components/auth_button/AuthButton";
import PageLayout from "../../components/page_layout/PageLayout";
import { AuthContext } from "../../services/auth/AuthProvider";

const Login = () => {
  const { auth } = React.useContext(AuthContext) as IAuthContext;
  return (
    <PageLayout>
      {auth.isAuthenticated ? (
        <h4>Welcome, {auth.userName}</h4>
      ) : (
        <h4>Please Login to access the website</h4>
      )}
      <AuthButton />
    </PageLayout>
  );
};

export default Login;
