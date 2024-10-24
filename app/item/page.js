'use client'
import CountDownTime from "@/components/elements/CountDownTime"
import DropdownOptions from "@/components/elements/DropdownOptions"
import PopupBidModal from "@/components/elements/PopupBidModal"
import PopupBidSuccess from "@/components/elements/PopupBidSuccess"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
        1366: {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
    },
}
export default function Item() {
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

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Item (Auctions)">
                <div>
                    <section className="tf-section auctions-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sc-heading style-2 has-icon wow fadeInUp">
                                        <div className="content-left">
                                            <div className="inner">
                                                <div className="group">
                                                    <div className="icon"><i className="ripple" /></div>
                                                    <h3>Live Auctions</h3>
                                                </div>
                                                <p className="desc">Most popular gaming digital nft market place </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="swiper-container popular-coll-2">
                                        <Swiper {...swiperOptions} className="swiper-wrapper">
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-product-item style-6">
                                                        <div className="product-item-top flex">
                                                            <div className="avatar-box">
                                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                            </div>
                                                            <DropdownOptions />
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="/assets/images/product-item/item-1.jpg" alt="Image" />
                                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                            <label>BSC</label>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                                Smoke Premium’’</Link> </h5>
                                                            <div className="product-author flex">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                                </div>
                                                                <div className="infor">
                                                                    <div className="author-name"><Link href="/author">Daniel M.
                                                                        Bivens</Link></div>
                                                                    <span>Creator</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="title">Current Bid</div>
                                                                <div className="price">
                                                                    <span>5.23 ETH</span>
                                                                    <span>= $32.420</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="countdown">
                                                            <CountDownTime />
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-product-item style-6">
                                                        <div className="product-item-top flex">
                                                            <div className="avatar-box">
                                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                            </div>
                                                            <DropdownOptions />
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="/assets/images/product-item/item-2.jpg" alt="Image" />
                                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                            <label>BSC</label>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                                Smoke Premium’’</Link> </h5>
                                                            <div className="product-author flex">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                                </div>
                                                                <div className="infor">
                                                                    <div className="author-name"><Link href="/author">Daniel M.
                                                                        Bivens</Link></div>
                                                                    <span>Creator</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="title">Current Bid</div>
                                                                <div className="price">
                                                                    <span>5.23 ETH</span>
                                                                    <span>= $32.420</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="countdown">
                                                            <CountDownTime />
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-product-item style-6">
                                                        <div className="product-item-top flex">
                                                            <div className="avatar-box">
                                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                            </div>
                                                            <DropdownOptions />
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="/assets/images/product-item/item-3.jpg" alt="Image" />
                                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                            <label>BSC</label>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                                Smoke Premium’’</Link> </h5>
                                                            <div className="product-author flex">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                                </div>
                                                                <div className="infor">
                                                                    <div className="author-name"><Link href="/author">Daniel M.
                                                                        Bivens</Link></div>
                                                                    <span>Creator</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="title">Current Bid</div>
                                                                <div className="price">
                                                                    <span>5.23 ETH</span>
                                                                    <span>= $32.420</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="countdown">
                                                            <CountDownTime />
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-product-item style-6">
                                                        <div className="product-item-top flex">
                                                            <div className="avatar-box">
                                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                            </div>
                                                            <DropdownOptions />
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="/assets/images/product-item/item-4.jpg" alt="Image" />
                                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                            <label>BSC</label>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                                Smoke Premium’’</Link> </h5>
                                                            <div className="product-author flex">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                                </div>
                                                                <div className="infor">
                                                                    <div className="author-name"><Link href="/author">Daniel M.
                                                                        Bivens</Link></div>
                                                                    <span>Creator</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="title">Current Bid</div>
                                                                <div className="price">
                                                                    <span>5.23 ETH</span>
                                                                    <span>= $32.420</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="countdown">
                                                            <CountDownTime />
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-product-item style-6">
                                                        <div className="product-item-top flex">
                                                            <div className="avatar-box">
                                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                            </div>
                                                            <DropdownOptions />
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="/assets/images/product-item/item-5.jpg" alt="Image" />
                                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                            <label>BSC</label>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                                Smoke Premium’’</Link> </h5>
                                                            <div className="product-author flex">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                                </div>
                                                                <div className="infor">
                                                                    <div className="author-name"><Link href="/author">Daniel M.
                                                                        Bivens</Link></div>
                                                                    <span>Creator</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="title">Current Bid</div>
                                                                <div className="price">
                                                                    <span>5.23 ETH</span>
                                                                    <span>= $32.420</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="countdown">
                                                            <CountDownTime />
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-product-item style-6">
                                                        <div className="product-item-top flex">
                                                            <div className="avatar-box">
                                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                            </div>
                                                            <DropdownOptions />
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="/assets/images/product-item/item-6.jpg" alt="Image" />
                                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                            <label>BSC</label>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                                Smoke Premium’’</Link> </h5>
                                                            <div className="product-author flex">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                                </div>
                                                                <div className="infor">
                                                                    <div className="author-name"><Link href="/author">Daniel M.
                                                                        Bivens</Link></div>
                                                                    <span>Creator</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="title">Current Bid</div>
                                                                <div className="price">
                                                                    <span>5.23 ETH</span>
                                                                    <span>= $32.420</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="countdown">
                                                            <CountDownTime />
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-product-item style-6">
                                                        <div className="product-item-top flex">
                                                            <div className="avatar-box">
                                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                            </div>
                                                            <DropdownOptions />
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="/assets/images/product-item/item-1.jpg" alt="Image" />
                                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                            <label>BSC</label>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                                Smoke Premium’’</Link> </h5>
                                                            <div className="product-author flex">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                                </div>
                                                                <div className="infor">
                                                                    <div className="author-name"><Link href="/author">Daniel M.
                                                                        Bivens</Link></div>
                                                                    <span>Creator</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="title">Current Bid</div>
                                                                <div className="price">
                                                                    <span>5.23 ETH</span>
                                                                    <span>= $32.420</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="countdown">
                                                            <CountDownTime />
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-product-item style-6">
                                                        <div className="product-item-top flex">
                                                            <div className="avatar-box">
                                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                            </div>
                                                            <DropdownOptions />
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="/assets/images/product-item/item-5.jpg" alt="Image" />
                                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                            <label>BSC</label>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                                Smoke Premium’’</Link> </h5>
                                                            <div className="product-author flex">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                                </div>
                                                                <div className="infor">
                                                                    <div className="author-name"><Link href="/author">Daniel M.
                                                                        Bivens</Link></div>
                                                                    <span>Creator</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="title">Current Bid</div>
                                                                <div className="price">
                                                                    <span>5.23 ETH</span>
                                                                    <span>= $32.420</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="countdown">
                                                            <CountDownTime />
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-product-item style-6">
                                                        <div className="product-item-top flex">
                                                            <div className="avatar-box">
                                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                            </div>
                                                            <DropdownOptions />
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="/assets/images/product-item/item-30.jpg" alt="Image" />
                                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                            <label>BSC</label>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                                Smoke Premium’’</Link> </h5>
                                                            <div className="product-author flex">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                                </div>
                                                                <div className="infor">
                                                                    <div className="author-name"><Link href="/author">Daniel M.
                                                                        Bivens</Link></div>
                                                                    <span>Creator</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="title">Current Bid</div>
                                                                <div className="price">
                                                                    <span>5.23 ETH</span>
                                                                    <span>= $32.420</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="countdown">
                                                            <CountDownTime />
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-product-item style-6">
                                                        <div className="product-item-top flex">
                                                            <div className="avatar-box">
                                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                            </div>
                                                            <DropdownOptions />
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="/assets/images/product-item/item-31.jpg" alt="Image" />
                                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                            <label>BSC</label>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                                Smoke Premium’’</Link> </h5>
                                                            <div className="product-author flex">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                                </div>
                                                                <div className="infor">
                                                                    <div className="author-name"><Link href="/author">Daniel M.
                                                                        Bivens</Link></div>
                                                                    <span>Creator</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="title">Current Bid</div>
                                                                <div className="price">
                                                                    <span>5.23 ETH</span>
                                                                    <span>= $32.420</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="countdown">
                                                            <CountDownTime />
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-product-item style-6">
                                                        <div className="product-item-top flex">
                                                            <div className="avatar-box">
                                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                            </div>
                                                            <DropdownOptions />
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="/assets/images/product-item/item-3.jpg" alt="Image" />
                                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                            <label>BSC</label>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                                Smoke Premium’’</Link> </h5>
                                                            <div className="product-author flex">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                                </div>
                                                                <div className="infor">
                                                                    <div className="author-name"><Link href="/author">Daniel M.
                                                                        Bivens</Link></div>
                                                                    <span>Creator</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="title">Current Bid</div>
                                                                <div className="price">
                                                                    <span>5.23 ETH</span>
                                                                    <span>= $32.420</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="countdown">
                                                            <CountDownTime />
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-product-item style-6">
                                                        <div className="product-item-top flex">
                                                            <div className="avatar-box">
                                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                            </div>
                                                            <DropdownOptions />
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="/assets/images/product-item/item-2.jpg" alt="Image" />
                                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                            <label>BSC</label>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                                Smoke Premium’’</Link> </h5>
                                                            <div className="product-author flex">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                                </div>
                                                                <div className="infor">
                                                                    <div className="author-name"><Link href="/author">Daniel M.
                                                                        Bivens</Link></div>
                                                                    <span>Creator</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="title">Current Bid</div>
                                                                <div className="price">
                                                                    <span>5.23 ETH</span>
                                                                    <span>= $32.420</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="countdown">
                                                            <CountDownTime />
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-product-item style-6">
                                                        <div className="product-item-top flex">
                                                            <div className="avatar-box">
                                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                            </div>
                                                            <DropdownOptions />
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="/assets/images/product-item/item-5.jpg" alt="Image" />
                                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                            <label>BSC</label>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                                Smoke Premium’’</Link> </h5>
                                                            <div className="product-author flex">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                                </div>
                                                                <div className="infor">
                                                                    <div className="author-name"><Link href="/author">Daniel M.
                                                                        Bivens</Link></div>
                                                                    <span>Creator</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="title">Current Bid</div>
                                                                <div className="price">
                                                                    <span>5.23 ETH</span>
                                                                    <span>= $32.420</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="countdown">
                                                            <CountDownTime />
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-product-item style-6">
                                                        <div className="product-item-top flex">
                                                            <div className="avatar-box">
                                                                <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                                <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                            </div>
                                                            <DropdownOptions />
                                                        </div>
                                                        <div className="product-img">
                                                            <img src="/assets/images/product-item/item-4.jpg" alt="Image" />
                                                            <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                            <label>BSC</label>
                                                        </div>
                                                        <div className="product-content">
                                                            <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                                Smoke Premium’’</Link> </h5>
                                                            <div className="product-author flex">
                                                                <div className="avatar">
                                                                    <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                                </div>
                                                                <div className="infor">
                                                                    <div className="author-name"><Link href="/author">Daniel M.
                                                                        Bivens</Link></div>
                                                                    <span>Creator</span>
                                                                </div>
                                                            </div>
                                                            <div className="product-price">
                                                                <div className="title">Current Bid</div>
                                                                <div className="price">
                                                                    <span>5.23 ETH</span>
                                                                    <span>= $32.420</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="countdown">
                                                            <CountDownTime />
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className="swiper-pagination" />
                                        <div className="swiper-button-next btn-slide-next " />
                                        <div className="swiper-button-prev btn-slide-prev" />
                                    </div>
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