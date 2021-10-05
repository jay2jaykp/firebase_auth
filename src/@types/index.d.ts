interface IAuth {
  isAuthenticated: boolean;
  userEmail: string | null;
  userName: string | null;
}

interface IAuthContext {
  auth: IAuth;
  setAuth: React.Dispatch<React.SetStateAction<IAuth>>;
}
