

'use client'
import PopupBidModal from "@/components/elements/PopupBidModal"
import PopupBidSuccess from "@/components/elements/PopupBidSuccess"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        550: {
            slidesPerView: "auto",
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: "auto",
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: "auto",
            spaceBetween: 30,
        },
    },
}


export default function LatestCollections1() {
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

            <section className="tf-latest-collections tf-section bg-color-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sc-heading style-2">
                                <div className="content-left">
                                    <div className="inner">
                                        <h3>Latest Collections</h3>
                                        <p className="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="swiper-container latest-coll style-2">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide tf-col-item wow fadeInUp ">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-3 bg-color-dark">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-5.jpg" alt="Image" />
                                                    <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                        Smoke Premium’’</Link> </h5>
                                                    <div className="product-author flex mg-bt-0">
                                                        <div className="avatar">
                                                            <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                        </div>
                                                        <div className="infor">
                                                            <div className="author-name"><Link href="/author">Daniel M.
                                                                Bivens</Link></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide tf-col-itemx2 wow fadeInUp">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-4 bg-color-dark">
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
                                                    <h5 className="title"><Link href="/item-details">‘’Multi-purpose 3D
                                                        Space Rocket With Animate Real Special Smoke Premium Quality
                                                        Gaming’’</Link> </h5>
                                                    <div className="product-author flex mg-bt-0">
                                                        <div className="left flex">
                                                            <div className="avatar">
                                                                <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                            </div>
                                                            <div className="infor">
                                                                <div className="author-name"><Link href="/author">Daniel M.
                                                                    Bivens</Link></div>
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
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide tf-col-item wow fadeInUp ">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-3 bg-color-dark">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-10.jpg" alt="Image" />
                                                    <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                        Smoke Premium’’</Link> </h5>
                                                    <div className="product-author flex mg-bt-0">
                                                        <div className="avatar">
                                                            <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                        </div>
                                                        <div className="infor">
                                                            <div className="author-name"><Link href="/author">Daniel M.
                                                                Bivens</Link></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide tf-col-item wow fadeInUp ">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-3 bg-color-dark">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-11.jpg" alt="Image" />
                                                    <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                        Smoke Premium’’</Link> </h5>
                                                    <div className="product-author flex mg-bt-0">
                                                        <div className="avatar">
                                                            <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                        </div>
                                                        <div className="infor">
                                                            <div className="author-name"><Link href="/author">Daniel M.
                                                                Bivens</Link></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide tf-col-itemx2 wow fadeInUp ">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-4 bg-color-dark">
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
                                                    <h5 className="title"><Link href="/item-details">‘’Multi-purpose 3D
                                                        Space Rocket With Animate Real Special Smoke Premium Quality
                                                        Gaming’’</Link> </h5>
                                                    <div className="product-author flex mg-bt-0">
                                                        <div className="left flex">
                                                            <div className="avatar">
                                                                <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                            </div>
                                                            <div className="infor">
                                                                <div className="author-name"><Link href="/author">Daniel M.
                                                                    Bivens</Link></div>
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
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide tf-col-item wow fadeInUp ">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-3 bg-color-dark">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-10.jpg" alt="Image" />
                                                    <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>BSC</label>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                        Smoke Premium’’</Link> </h5>
                                                    <div className="product-author flex mg-bt-0">
                                                        <div className="avatar">
                                                            <img src="/assets/images/avatar/avt-7.jpg" alt="Image" />
                                                        </div>
                                                        <div className="infor">
                                                            <div className="author-name"><Link href="/author">Daniel M.
                                                                Bivens</Link></div>
                                                            <span>Creator</span>
                                                        </div>
                                                    </div>
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
            <PopupBidModal handlePopupBid={handlePopupBid} popUpBid={popUpBid} handlePopupBidSuccess={handlePopupBidSuccess} popUpBidSuccess={popUpBidSuccess} />
            <PopupBidSuccess handlePopupBid={handlePopupBid} popUpBid={popUpBid} handlePopupBidSuccess={handlePopupBidSuccess} popUpBidSuccess={popUpBidSuccess} />
        </>
    )
}
