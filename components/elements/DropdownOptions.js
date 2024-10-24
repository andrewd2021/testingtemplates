'use client'
import Link from 'next/link'
import { useState } from "react"

export default function DropdownOptions() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <div className={`dropdown-options ${isToggled ? "show" : ""}`}>
                <div className="options flex" onClick={handleToggle}>
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
                <ul className="menu target-menu">
                    <li><Link href="#" className="nolink">Refresh Metadata</Link></li>
                    <li><Link href="#" className="nolink">Share</Link></li>
                    <li><Link href="#" className="nolink">Report</Link></li>
                </ul>
            </div>
        </>
    )
}
