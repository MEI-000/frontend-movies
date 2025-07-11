const AppStateReducer = (state, action) => {
    switch (action.type) {
        case "Login": {
            console.log(action.payload)
            localStorage.setItem("user", JSON.stringify({ ...action.payload, isAuthenticated: true }))

            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        }

        case "Logout": {
            localStorage.removeItem("user")
            return {
                isAuthenticated: false,
                user: null
            }
        }
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light",
            };
        default:
            return state
    }
}

export default AppStateReducer;