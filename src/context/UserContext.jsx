import { createContext, useContext, useReducer, useEffect } from "react";

// Define initial state
const initialState = {
  token: null,
};

// Define action types
const SET_TOKEN = "SET_TOKEN";
const REMOVE_TOKEN = "REMOVE_TOKEN"; // Action to remove the token

// Define reducer
const userReducer = (state, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: null, // Set token to null when removed
      };

    default:
      return state;
  }
};

// Create context
const UserContext = createContext();

// Create provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Check if token is in localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({ type: SET_TOKEN, payload: token });
    }
  }, []);

  // Function to set the token and save it to localStorage
  const setToken = (token) => {
    localStorage.setItem("token", token);
    dispatch({ type: SET_TOKEN, payload: token });
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    dispatch({ type: REMOVE_TOKEN });
  };

  return (
    <UserContext.Provider value={{ token: state.token, setToken, removeToken }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
