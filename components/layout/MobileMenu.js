'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileMenu({ isMobileMenu }) {
    const [isActive, setIsActive] = useState(0)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-item" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-item" : ""

    return (
        <>
            <nav id="main-nav-mobi" className="main-nav" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                <ul id="menu-primary-menu" className="menu">
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/home2", "/home-animation"])}`}>
                    <Link href="#">Home</Link>
                    <span className="arrow" onClick={() => handleClick(1)} />
                        <ul className="sub-menu" style={{ display: `${isActive == 1 ? "block" : "none"}` }}>
                        <li className={`menu-item ${checkCurrentMenuItem("/")}`}><Link href="/">Home 1</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/home2")}`}><Link href="/home2">Home 2</Link></li>
                        <li className={`menu-item ${checkCurrentMenuItem("/home-animation")}`}><Link href="/home-animation">Home Animation</Link></li>
                    </ul>
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive([
                    "/explore-1",
                    "/explore-2",
                    "/creator",
                    "/item",
                    "/item-details",
                ])}`}>
                    <Link href="#">Explore</Link>
                    <span className="arrow" onClick={() => handleClick(2)} />
                        <ul className="sub-menu" style={{ display: `${isActive == 2 ? "block" : "none"}` }}>
                        <li className={`menu-item ${checkCurrentMenuItem("/explore-1")}`}><Link href="/explore-1">Explore 1</Link></li>
                        <li className={`menu-item ${checkCurrentMenuItem("/explore-2")}`}><Link href="/explore-2">Explore 2</Link></li>
                        <li className={`menu-item ${checkCurrentMenuItem("/creator")}`}><Link href="/creator">Creator</Link></li>
                        <li className={`menu-item ${checkCurrentMenuItem("/item")}`}><Link href="/item">Item </Link></li>
                        <li className={`menu-item ${checkCurrentMenuItem("/item-details")}`}><Link href="/item-details">Item Details</Link>
                        </li>
                    </ul>
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/blog", "/blog-details"])}`}>
                    <Link href="#">Community</Link>
                    <span className="arrow" onClick={() => handleClick(3)} />
                        <ul className="sub-menu" style={{ display: `${isActive == 3 ? "block" : "none"}` }}>
                        <li className={`menu-item ${checkCurrentMenuItem("/blog")}`}><Link href="/blog">Blog</Link></li>
                        <li className={`menu-item ${checkCurrentMenuItem("/blog-details")}`}><Link href="/blog-details">Blog Details</Link>
                        </li>
                    </ul>
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive([
                    "/author",
                    "/connect-wallet",
                    "/create-item",
                    "/login",
                    "/register",
                ])}`}>
                    <Link href="#">Pages</Link>
                    <span className="arrow" onClick={() => handleClick(4)} />
                        <ul className="sub-menu" style={{ display: `${isActive == 4 ? "block" : "none"}` }}>
                        <li className={`menu-item ${checkCurrentMenuItem("/author")}`}><Link href="/author">Authors</Link></li>
                        <li className={`menu-item ${checkCurrentMenuItem("/connect-wallet")}`}><Link href="/connect-wallet">Wallet
                            Connect</Link></li>
                        <li className={`menu-item ${checkCurrentMenuItem("/create-item")}`}><Link href="/create-item">Create Item</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/login")}`}><Link href="/login">Login</Link></li>
                        <li className={`menu-item ${checkCurrentMenuItem("/register")}`}><Link href="/register">Register</Link></li>
                    </ul>
                </li>
                <li className={`menu-item ${pathname === "/contact" ? "current-item" : ""}`}>
                    <Link href="/contact">Contact</Link>
                </li>
                </ul>
            </nav>

        </>
    )
}
