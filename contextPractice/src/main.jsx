import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import {ThemeContextProvider} from "./contexts/ThemeContext.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>
        <App/>
    </ThemeContextProvider>
)
