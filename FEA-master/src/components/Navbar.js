import React from 'react'
import useAppStateContext from '../hooks/useAppStateContext'

const Navbar = () => {
  const { dispatch, appState } = useAppStateContext();
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  return (
    <div>
      <button className="themeModeBtn" onClick={toggleTheme}>
        Switch to {appState.theme === "light" ? "Dark" : "Light"} Mode
      </button>
      {/* src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU" */}
    </div>
  )
}

export default Navbar
