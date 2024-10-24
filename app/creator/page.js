'use client'
import { useState } from "react"
import PopupBidModal from "@/components/elements/PopupBidModal"
import PopupBidSuccess from "@/components/elements/PopupBidSuccess"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    loop: false,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
}

export default function Creator() {
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

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Creators">
                <div>
                    <section className="tf-section best-seller-page style-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sc-heading style-2">
                                        <div className="content-left">
                                            <div className="inner">
                                                <h3>Best Sellers</h3>
                                                <p className="desc">Most popular gaming digital nft market place </p>
                                            </div>
                                        </div>
                                        <div className="content-right">
                                            <button className="sc-button style letter style-2"><span>Explore More</span> </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="swiper-container author-best pd-bt-50">
                                        <Swiper {...swiperOptions} className="swiper-wrapper">
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author active">
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-1.jpg" alt="" />
                                                        </div>
                                                        <div className="infor">
                                                            <h6> <Link href="/author">Jason M. Stalls</Link> </h6>
                                                            <div className="details">523.7 ETH</div>
                                                        </div>
                                                        <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author">
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-2.jpg" alt="" />
                                                        </div>
                                                        <div className="infor">
                                                            <h6> <Link href="/author">Frank F. Chan</Link> </h6>
                                                            <div className="details">523.7 ETH</div>
                                                        </div>
                                                        <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author">
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-3.jpg" alt="" />
                                                        </div>
                                                        <div className="infor">
                                                            <h6> <Link href="/author">Robert George</Link> </h6>
                                                            <div className="details">523.7 ETH</div>
                                                        </div>
                                                        <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author">
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-4.jpg" alt="" />
                                                        </div>
                                                        <div className="infor">
                                                            <h6> <Link href="/author">Frank N. Glisson</Link> </h6>
                                                            <div className="details">523.7 ETH</div>
                                                        </div>
                                                        <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author">
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-5.jpg" alt="" />
                                                        </div>
                                                        <div className="infor">
                                                            <h6> <Link href="/author">Michel ZonaS</Link> </h6>
                                                            <div className="details">523.7 ETH</div>
                                                        </div>
                                                        <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author">
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-6.jpg" alt="" />
                                                        </div>
                                                        <div className="infor">
                                                            <h6> <Link href="/author">Mizanur Mango</Link> </h6>
                                                            <div className="details">523.7 ETH</div>
                                                        </div>
                                                        <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author">
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-1.jpg" alt="" />
                                                        </div>
                                                        <div className="infor">
                                                            <h6> <Link href="/author">Jason M. Stalls</Link> </h6>
                                                            <div className="details">523.7 ETH</div>
                                                        </div>
                                                        <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author">
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-2.jpg" alt="" />
                                                        </div>
                                                        <div className="infor">
                                                            <h6> <Link href="/author">Frank F. Chan</Link> </h6>
                                                            <div className="details">523.7 ETH</div>
                                                        </div>
                                                        <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author">
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-3.jpg" alt="" />
                                                        </div>
                                                        <div className="infor">
                                                            <h6> <Link href="/author">Robert George</Link> </h6>
                                                            <div className="details">523.7 ETH</div>
                                                        </div>
                                                        <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className="swiper-pagination" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="tf-section creators-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sc-heading">
                                        <h3>Our Creators</h3>
                                        <p className="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="sc-product-item style-3">
                                        <div className="product-img ">
                                            <img src="/assets/images/product-item/item-5.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} className="sc-button style letter"><span>Place Bid</span></a>
                                            <Link href="#" className="button-follow">Follow</Link>
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
                                                <Link href="#" className="button-follow">Follow</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="sc-product-item style-3 mg-bt-0-mb">
                                        <div className="product-img ">
                                            <img src="/assets/images/product-item/item-10.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} className="sc-button style letter"><span>Place Bid</span></a>
                                            <Link href="#" className="button-follow">Follow</Link>
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
                                                <img src="/assets/images/product-item/item-25.jpg" alt="Image" />
                                            </div>
                                            <div className="img-right">
                                                <div className="top-img flex">
                                                    <img src="/assets/images/product-item/item-26.jpg" alt="Image" />
                                                    <img src="/assets/images/product-item/item-27.jpg" alt="Image" />
                                                </div>
                                                <div className="bottom-img">
                                                    <img src="/assets/images/product-item/item-28.jpg" alt="Image" />
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
                                                <Link href="#" className="button-follow">Follow</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="sc-product-item style-3">
                                        <div className="product-img ">
                                            <img src="/assets/images/product-item/item-19.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} className="sc-button style letter"><span>Place Bid</span></a>
                                            <Link href="#" className="button-follow">Follow</Link>
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
                                <div className="col-md-3">
                                    <div className="sc-product-item style-3">
                                        <div className="product-img ">
                                            <img src="/assets/images/product-item/item-29.jpg" alt="Image" />
                                            <a onClick={handlePopupBid} className="sc-button style letter"><span>Place Bid</span></a>
                                            <Link href="#" className="button-follow">Follow</Link>
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
                    <section className="new-letter bg-newletter">
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