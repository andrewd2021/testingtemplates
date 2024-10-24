
'use client'
import PopupBidModal from "@/components/elements/PopupBidModal"
import PopupBidSuccess from "@/components/elements/PopupBidSuccess"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import CountDownTime from "../elements/CountDownTime"

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
        1024: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
    },
}

export default function LiveAuctions2() {
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

            <section className="live-autions tf-section bg-body">
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
                            <div className="swiper-container live-auc style-2">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="sc-product-item style-7 flex">
                                            <div className="product-img active">
                                                <img src="/assets/images/product-item/item-1.jpg" alt="Image" />
                                                <div className="countdown">
                                                    <CountDownTime />
                                                </div>
                                                <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            </div>
                                            <div className="product-content">
                                                <label>BSC</label>
                                                <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With QR
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
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="sc-product-item style-7 flex">
                                            <div className="product-img">
                                                <img src="/assets/images/product-item/item-2.jpg" alt="Image" />
                                                <div className="countdown">
                                                    <CountDownTime />
                                                </div>
                                                <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            </div>
                                            <div className="product-content">
                                                <label>BSC</label>
                                                <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With QR
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
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="sc-product-item style-7 flex">
                                            <div className="product-img">
                                                <img src="/assets/images/product-item/item-3.jpg" alt="Image" />
                                                <div className="countdown">
                                                    <CountDownTime />
                                                </div>
                                                <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            </div>
                                            <div className="product-content">
                                                <label>BSC</label>
                                                <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With QR
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
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="sc-product-item style-7 flex">
                                            <div className="product-img">
                                                <img src="/assets/images/product-item/item-4.jpg" alt="Image" />
                                                <div className="countdown">
                                                    <CountDownTime />
                                                </div>
                                                <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            </div>
                                            <div className="product-content">
                                                <label>BSC</label>
                                                <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With QR
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
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="sc-product-item style-7 flex">
                                            <div className="product-img">
                                                <img src="/assets/images/product-item/item-3.jpg" alt="Image" />
                                                <div className="countdown">
                                                    <CountDownTime />
                                                </div>
                                                <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            </div>
                                            <div className="product-content">
                                                <label>BSC</label>
                                                <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With QR
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
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="sc-product-item style-7 flex">
                                            <div className="product-img">
                                                <img src="/assets/images/product-item/item-4.jpg" alt="Image" />
                                                <div className="countdown">
                                                    <CountDownTime />
                                                </div>
                                                <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            </div>
                                            <div className="product-content">
                                                <label>BSC</label>
                                                <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With QR
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
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="sc-product-item style-7 flex">
                                            <div className="product-img">
                                                <img src="/assets/images/product-item/item-1.jpg" alt="Image" />
                                                <div className="countdown">
                                                    <CountDownTime />
                                                </div>
                                                <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            </div>
                                            <div className="product-content">
                                                <label>BSC</label>
                                                <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With QR
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
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="sc-product-item style-7 flex">
                                            <div className="product-img">
                                                <img src="/assets/images/product-item/item-2.jpg" alt="Image" />
                                                <div className="countdown">
                                                    <CountDownTime />
                                                </div>
                                                <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                            </div>
                                            <div className="product-content">
                                                <label>BSC</label>
                                                <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With QR
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
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="swiper-button-next btn-slide-next " />
                                <div className="swiper-button-prev btn-slide-prev" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PopupBidModal handlePopupBid={handlePopupBid} popUpBid={popUpBid} handlePopupBidSuccess={handlePopupBidSuccess} popUpBidSuccess={popUpBidSuccess} />
            <PopupBidSuccess handlePopupBid={handlePopupBid} popUpBid={popUpBid} handlePopupBidSuccess={handlePopupBidSuccess} popUpBidSuccess={popUpBidSuccess} />
        </>
    )
}
