import Link from "next/link"

export default function Footer1({ footercls }) {
    return (
        <>

            <footer id="footer" className={`clearfix bg-style ${footercls ? footercls : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget widget-logo">
                                <div className="logo-footer" id="logo-footer">
                                    <Link href="/">
                                        <img id="logo_footer" src="/assets/images/logo/logo_dark.png" alt="nft-gaming" width={151} height={45} data-retina="assets/images/logo/logo_dark@2x.png" data-width={151} data-height={45} />
                                    </Link>
                                </div>
                                <p className="sub-widget-logo">Sed ut perspiciatis unde omnis iste natus error sit voluptate
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaes</p>
                                <div className="widget-social">
                                    <ul>
                                        <li><Link href="#" className="active"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                            <div className="widget widget-menu menu-marketplace">
                                <h5 className="title-widget">Marketplace</h5>
                                <ul>
                                    <li><Link href="/item">Gaming </Link></li>
                                    <li><Link href="/item">Product </Link></li>
                                    <li><Link href="/item">All NFTs</Link></li>
                                    <li><Link href="/item">Social Network</Link></li>
                                    <li><Link href="/item">Domain Names</Link></li>
                                    <li><Link href="/item">Collectibles</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="widget widget-menu menu-supports">
                                <h5 className="title-widget">Supports</h5>
                                <ul>
                                    <li><Link href="/contact">Setting &amp; Privacy </Link></li>
                                    <li><Link href="/contact">Help &amp; Support </Link></li>
                                    <li><Link href="/item">Live Auctions</Link></li>
                                    <li><Link href="/item-details"> Item Details</Link></li>
                                    <li><Link href="/contact"> 24/7 Supports</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget widget-post">
                                <h5 className="title-widget">News &amp; Post</h5>
                                <ul className="post-new">
                                    <li>
                                        <div className="post-img">
                                            <img src="/assets/images/post/post-recent-new-4.jpg" alt="Post New" />
                                        </div>
                                        <div className="post-content">
                                            <h6 className="title"><Link href="/blog-details">Roll Out New Features Without
                                                Hurting Loyal Users</Link></h6>
                                            <Link href="/blog-details" className="post-date"><i className="far fa-calendar-week" /> 25 JAN 2022</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="post-img">
                                            <img src="/assets/images/post/post-recent-new-5.jpg" alt="Post New" />
                                        </div>
                                        <div className="post-content">
                                            <h6 className="title"><Link href="/blog-details">An Overview The Most Comon UX
                                                Design Deliverables</Link></h6>
                                            <Link href="/blog-details" className="post-date"><i className="far fa-calendar-week" /> 25 JAN 2022</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>{/* #footer */}
            {/* Bottom */}
            <div className="bottom">
                <div className="container">
                    <div className="bottom-inner">
                        Copyright © {new Date().getFullYear()} Bidzen | NFT Marketplace HTML Template. Designed by <Link href="/https://themeforest.net/user/themesflat/portfolio"> Themesflat</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
