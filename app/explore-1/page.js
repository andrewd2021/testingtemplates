'use client'
import PopupBidModal from "@/components/elements/PopupBidModal"
import PopupBidSuccess from "@/components/elements/PopupBidSuccess"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Explore1() {
    const [popUpBid, setPopupBid] = useState(false)
    const handlePopupBid = () => {
        setPopupBid(prevPopUpBid => !prevPopUpBid)
    }
    const [popUpBidSuccess, setPopupBidSuccess] = useState(false)
    const handlePopupBidSuccess = () => {
        setPopupBidSuccess(prevPopUpBidSuccess => !prevPopUpBidSuccess)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Explore">
                <div>
                    <section className="tf-section our-latest-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sc-heading">
                                        <h3>Our Latest Collections</h3>
                                        <p className="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="sc-product-item style-3">
                                        <div className="product-img ">
                                            <img src="/assets/images/product-item/item-5.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>BSC</label>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex mg-bt-0">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="sc-product-item style-4">
                                        <div className="product-img flex">
                                            <div className="img-left">
                                                <img src="/assets/images/product-item/item-6.jpg" alt="Image" />
                                                <label>BSC</label>
                                            </div>
                                            <div className="img-right">
                                                <div className="top-img flex">
                                                    <img src="/assets/images/product-item/item-7.jpg" alt="Image" />
                                                    <img src="/assets/images/product-item/item-8.jpg" alt="Image" />
                                                </div>
                                                <div className="bottom-img">
                                                    <img src="/assets/images/product-item/item-9.jpg" alt="Image" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’Multi-purpose 3D Space Rocket With
                                                Animate Real Special Smoke Premium Quality Gaming’’</Link> </h5>
                                            <div className="product-author flex mg-bt-0">
                                                <div className="left flex">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                    </div>
                                                    <div className="infor">
                                                        <div className="author-name"><Link href="/author">Daniel M. Bivens</Link>
                                                        </div>
                                                        <span>Creator</span>
                                                    </div>
                                                </div>
                                                <div className="button-wishlish">
                                                    <Link href="#" className=" wishlish"><i className="fas fa-heart" /></Link>
                                                    <span>152k</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="sc-product-item style-3 mg-bt-0-mb">
                                        <div className="product-img ">
                                            <img src="/assets/images/product-item/item-10.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>BSC</label>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex mg-bt-0">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="tf-section trendy-colection-page style-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="wg-drop-category seclect-box">
                                        <div id="all-items" className="dropdown">
                                            <select className="custom-select">
                                                <option value="all">All Categories</option>
                                                <option value="nft">NFT</option>
                                                <option value="crypto">Crypto</option>
                                                <option value="token">Token</option>
                                            </select>
                                        </div>
                                        <div id="new-items" className="dropdown">

                                            <select className="custom-select">
                                                <option>New bestsellers</option>
                                                <option>New releases</option>
                                            </select>
                                        </div>
                                        <div id="buy" className="dropdown">

                                            <select className="custom-select">
                                                <option>Wallet</option>
                                                <option>Website</option>
                                            </select>
                                        </div>
                                        <div id="sort-by" className="dropdown">

                                            <select className="custom-select">
                                                <option>View</option>
                                                <option>Rating</option>
                                                <option>Sale</option>
                                                <option>Date</option>
                                            </select>
                                        </div>
                                        <button className="sc-button style letter style-2"><span>Filter</span> </button>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-1.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-2.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-3.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-4.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-5.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-6.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-7.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-8.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-9.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-10.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-11.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-12.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-1.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-2.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-3.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-4.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-5.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-6.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-6.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-7.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-1.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-2.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-1.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="sc-product-item style-5">
                                        <div className="product-img">
                                            <img src="/assets/images/product-item/item-collect-2.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            <label>RUN</label>
                                            <div className="avatar-box">
                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With Smoke
                                                Premium’’</Link> </h5>
                                            <div className="product-author flex">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                </div>
                                                <div className="infor">
                                                    <div className="author-name"><Link href="/author">Daniel M. Bivens</Link></div>
                                                    <span>Creator</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button id="loadmore" className=" sc-button style letter style-2"><span>Explore More</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="new-letter">
                        <div className="container">
                            <div className="new-letter-inner flex">
                                <div className="new-letter-content">
                                    <h3 className="heading">Newsletters</h3>
                                    <p className="sub-heading">Most popular gaming digital nft market place </p>
                                    <div className="form-subcribe">
                                        <form id="subscribe-form" action="#" method="GET" acceptCharset="utf-8" className="form-submit">
                                            <input name="email" className="email" type="email" placeholder="Enter Email Address" required />
                                            <button name="submit" type="submit" id="submit" className="sc-button style letter style-2"><span>Browse More</span> </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="new-letter-img">
                                    <img src="/assets/images/background/img-newletter.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
            <PopupBidModal handlePopupBid={handlePopupBid} popUpBid={popUpBid} handlePopupBidSuccess={handlePopupBidSuccess} popUpBidSuccess={popUpBidSuccess} />
            <PopupBidSuccess handlePopupBid={handlePopupBid} popUpBid={popUpBid} handlePopupBidSuccess={handlePopupBidSuccess} popUpBidSuccess={popUpBidSuccess} />
        </>
    )
}