import React, {useContext} from "react"
import {ThemeContext} from "../../contexts/ThemeContext.jsx"

function Header(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <header className={`${theme}-theme`}>
            <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
    )
}

export default Header