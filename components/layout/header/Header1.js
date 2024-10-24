import CountDownTime from "@/components/elements/CountDownTime"
import dynamic from 'next/dynamic'
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
const ThemeSwitch = dynamic(() => import('@/components/elements/ThemeSwitch'), {
    ssr: false,
})

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>

            <div className="topbar">
                <div className="container">
                    <div className="topbar-inner flex">
                        <div className="menu-options flex">
                            <div className="ethereum">
                                <div id="ethereum" className="dropdown">
                                    <select className="custom-select">
                                        <option value="ethereum">Ethereum</option>
                                        <option value="bitski">Bitski</option>
                                        <option value="fortmatic">Fortmatic</option>
                                    </select>
                                </div>
                            </div>
                            <div className="english">
                                <div id="english" className="dropdown">
                                    <select className="custom-select">
                                        <option>English</option>
                                        <option>USA</option>
                                        <option>France</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="topbar-right flex">
                            <span>New Product Coming Soon</span>
                            <div className="countdown">
                                <CountDownTime />
                            </div>
                            <ul className="socical-icon flex">
                                <li><Link href="#" className="active"><i className="fab fa-facebook-f" /></Link></li>
                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                <li><Link href="#"><i className="fab fa-dribbble" /></Link></li>
                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header id="header_main" className={`header_1 js-header ${scroll ? "is-fixed is-small" : ""}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-block d-lg-none">
                                <div className={`mobile-button d-block ${isMobileMenu ? "active" : ""}`} onClick={handleMobileMenu}><span /></div>{/* /.mobile-button */}
                            </div>
                            <div id="site-header-inner" className="flex">
                                <div id="site-logo" className="clearfix">
                                    <div id="site-logo-inner">
                                        <Link href="/" rel="home" className="main-logo">
                                            <img id="logo_header" src="/assets/images/logo/logo_dark.png" alt="nft-gaming" width={151} height={45} data-retina="assets/images/logo/logo_dark@2x.png" data-width={151} data-height={45} />
                                        </Link>
                                    </div>
                                </div>
                                <form className="form-search">
                                    <input type="text" placeholder="Search here" />
                                    <button><i className="far fa-search" /></button>
                                </form>
                                <div id="site-menu">
                                    <div className="d-none d-lg-block">
                                        <nav id="main-nav" className="main-nav">
                                            <Menu />
                                        </nav>{/* #main-nav */}
                                    </div>
                                </div>
                                <div className="button-connect-wallet">
                                    <Link href="/connect-wallet" className="sc-button wallet  style-2">
                                        <img src="/assets/images/icon/connect-wallet.svg" alt="icon" />
                                        <span>Connect Wallet</span>
                                    </Link>
                                </div>

                                <ThemeSwitch />
                                <MobileMenu isMobileMenu={isMobileMenu} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
