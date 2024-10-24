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
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
    },
}

export default function PopularCollections() {
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

            <section className="popular-collections tf-section bg-color-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sc-heading style-2">
                                <div className="content-left">
                                    <div className="inner">
                                        <h3>Popular Collection</h3>
                                        <p className="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="swiper-container popular-coll">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-32.jpg" alt="Image" />
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
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-33.jpg" alt="Image" />
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
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-34.jpg" alt="Image" />
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
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-35.jpg" alt="Image" />
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
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-38.jpg" alt="Image" />
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
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-39.jpg" alt="Image" />
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
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-19.jpg" alt="Image" />
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
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-36.jpg" alt="Image" />
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
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-37.jpg" alt="Image" />
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
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-38.jpg" alt="Image" />
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
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-39.jpg" alt="Image" />
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
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-32.jpg" alt="Image" />
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
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-38.jpg" alt="Image" />
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
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-product-item style-5">
                                                <div className="product-img ">
                                                    <img src="/assets/images/product-item/item-19.jpg" alt="Image" />
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
