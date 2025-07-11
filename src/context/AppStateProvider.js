import { createContext, useReducer } from "react"
import AppStateReducer from "./AppStateReducer"

const INITIAL_STATE = {
    isAuthenticated: localStorage.getItem("user") ? true : false,
    user: JSON.parse(localStorage.getItem("user")),
    theme: "light", // dark or light
}

console.log(INITIAL_STATE)

export const AppStateContext = createContext(INITIAL_STATE)

export const AppStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppStateReducer, INITIAL_STATE)

    return (
        <AppStateContext.Provider value={{ appState: state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    )
}