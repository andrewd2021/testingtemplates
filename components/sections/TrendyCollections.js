
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
        992: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
    },
}


export default function TrendyCollections() {
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

            <section className="tf-trendy-collections tf-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sc-heading style-2">
                                <div className="content-left">
                                    <div className="inner">
                                        <h3>Trendy Collection</h3>
                                        <p className="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="swiper-container trendy">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide className=" wow fadeInUp">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-2">
                                                <div className="product-img">
                                                    <img src="/assets/images/product-item/item-12.jpg" alt="Image" />
                                                    <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                        Smoke’’</Link> </h5>
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
                                                    <div className="product-price flex">
                                                        <div className="title">Current Bid</div>
                                                        <div className="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide className=" wow fadeInUp">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-2">
                                                <div className="product-img">
                                                    <img src="/assets/images/product-item/item-13.jpg" alt="Image" />
                                                    <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                        Smoke’’</Link> </h5>
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
                                                    <div className="product-price flex">
                                                        <div className="title">Current Bid</div>
                                                        <div className="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide className=" wow fadeInUp">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-2">
                                                <div className="product-img">
                                                    <img src="/assets/images/product-item/item-14.jpg" alt="Image" />
                                                    <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                        Smoke’’</Link> </h5>
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
                                                    <div className="product-price flex">
                                                        <div className="title">Current Bid</div>
                                                        <div className="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide className=" wow fadeInUp">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-2">
                                                <div className="product-img">
                                                    <img src="/assets/images/product-item/item-15.jpg" alt="Image" />
                                                    <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                        Smoke’’</Link> </h5>
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
                                                    <div className="product-price flex">
                                                        <div className="title">Current Bid</div>
                                                        <div className="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide className=" wow fadeInUp">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-2">
                                                <div className="product-img">
                                                    <img src="/assets/images/product-item/item-16.jpg" alt="Image" />
                                                    <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                        Smoke’’</Link> </h5>
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
                                                    <div className="product-price flex">
                                                        <div className="title">Current Bid</div>
                                                        <div className="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide className=" wow fadeInUp">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-2">
                                                <div className="product-img">
                                                    <img src="/assets/images/product-item/item-15.jpg" alt="Image" />
                                                    <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                        Smoke’’</Link> </h5>
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
                                                    <div className="product-price flex">
                                                        <div className="title">Current Bid</div>
                                                        <div className="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide className=" wow fadeInUp">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-2">
                                                <div className="product-img">
                                                    <img src="/assets/images/product-item/item-16.jpg" alt="Image" />
                                                    <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                        Smoke’’</Link> </h5>
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
                                                    <div className="product-price flex">
                                                        <div className="title">Current Bid</div>
                                                        <div className="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide className=" wow fadeInUp">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-2">
                                                <div className="product-img">
                                                    <img src="/assets/images/product-item/item-17.jpg" alt="Image" />
                                                    <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                        Smoke’’</Link> </h5>
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
                                                    <div className="product-price flex">
                                                        <div className="title">Current Bid</div>
                                                        <div className="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide className=" wow fadeInUp">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-2">
                                                <div className="product-img">
                                                    <img src="/assets/images/product-item/item-12.jpg" alt="Image" />
                                                    <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                        Smoke’’</Link> </h5>
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
                                                    <div className="product-price flex">
                                                        <div className="title">Current Bid</div>
                                                        <div className="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide className=" wow fadeInUp">
                                        <div className="slider-item">
                                            <div className="sc-product-item style-2">
                                                <div className="product-img">
                                                    <img src="/assets/images/product-item/item-13.jpg" alt="Image" />
                                                    <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter"><span>Place Bid</span></a>
                                                    <label>PANDA</label>
                                                </div>
                                                <div className="product-content">
                                                    <h5 className="title"><Link href="/item-details">‘’3D Space Rocket With
                                                        Smoke’’</Link> </h5>
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
                                                    <div className="product-price flex">
                                                        <div className="title">Current Bid</div>
                                                        <div className="price">
                                                            <span>5.23 ETH</span>
                                                            <span>= $32.420</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
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
