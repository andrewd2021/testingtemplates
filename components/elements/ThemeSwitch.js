'use client'
import { useEffect, useState } from "react"

export default function ThemeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(
        () => JSON.parse(localStorage.getItem("isDarkMode")) || true
    )

    useEffect(() => {
        const themeClass = isDarkMode ? "is_dark" : "is_light"
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode))
        document.body.classList.add(themeClass)
        updateLogoHeader(isDarkMode) // Call the function to update the logo header
        return () => {
            document.body.classList.remove(themeClass)
        }
    }, [isDarkMode])

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const updateLogoHeader = (isDarkMode) => {
        const logoSrc = isDarkMode ? "/assets/images/logo/logo_dark.png" : "/assets/images/logo/logo.png"
        document.getElementById("logo_header").src = logoSrc
    }

    return (
        <div className="mode_switcher">
            <h6><span>{isDarkMode ? 'Light' : 'Dark'} Mode</span> <strong>Activate</strong></h6>
            <a onClick={toggleMode} className={`light d-flex align-items-center ${!isDarkMode ? 'is_active' : ''}`}>
                <img src={`/assets/images/icon/sun.png`} alt="" />
            </a>
            <a onClick={toggleMode} className={`dark d-flex align-items-center ${isDarkMode ? 'is_active' : ''}`}>
                <img id="moon_dark" src={`/assets/images/icon/moon.png`} alt="" />
            </a>
        </div>
    )
}

