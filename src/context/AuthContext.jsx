import PropTypes from "prop-types";
import { createContext, useReducer } from "react";
import { authReducer } from "./reducers";
// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: false });
  return (
    <AuthContext.Provider value={{  state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
