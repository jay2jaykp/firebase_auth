import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import ProtectedRoute from "./components/protected_route/ProtectedRoute";
import AuthProvider from "./services/auth/AuthProvider";
import MyNavbar from "./components/navbar/Navbar";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <MyNavbar />
        <Switch>
          <ProtectedRoute path="/home">
            <Home />
          </ProtectedRoute>
          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
          <Route path="/profile" component={Login} />
        </Switch>
      </AuthProvider>
    </>
  );
};

export default App;
