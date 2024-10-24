

'use client'
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
const swiperOptions2 = {
    modules: [Autoplay, Pagination, Navigation],
    loop:false,
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

import Layout from "@/components/layout/Layout"
export default function Author() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Authors">
                <div>
                    <section className="tf-section best-seller-page">
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
                                                            <h6> <Link href="#">Jason M. Stalls</Link> </h6>
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
                                                            <h6> <Link href="#">Frank F. Chan</Link> </h6>
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
                                                            <h6> <Link href="#">Robert George</Link> </h6>
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
                                                            <h6> <Link href="#">Frank N. Glisson</Link> </h6>
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
                                                            <h6> <Link href="#">Michel ZonaS</Link> </h6>
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
                                                            <h6> <Link href="#">Mizanur Mango</Link> </h6>
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
                                                            <h6> <Link href="#">Jason M. Stalls</Link> </h6>
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
                                                            <h6> <Link href="#">Frank F. Chan</Link> </h6>
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
                                                            <h6> <Link href="#">Robert George</Link> </h6>
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
                    <section className="tf-section top-seller-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sc-heading style-2">
                                        <div className="content-left">
                                            <div className="inner">
                                                <h3>Top Sellers</h3>
                                                <p className="desc">Most popular gaming digital nft market place </p>
                                            </div>
                                        </div>
                                        <div className="content-right">
                                            <button className="sc-button style letter style-2"><span>Explore More</span> </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="sc-author style-2">
                                        <div className="card-avatar">
                                            <img src="/assets/images/avatar/avt-1.jpg" alt="" />
                                        </div>
                                        <div className="infor">
                                            <h5><Link href="#">Jason M. Stalls</Link></h5>
                                            <div className="details">523.7 ETH</div>
                                            <ul className="rating">
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li className="un-rate"><i className="fas fa-star" /></li>
                                            </ul>
                                        </div>
                                        <div className="button-follow">
                                            <Link href="#" className="sc-button style-2"><span>Follow</span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="sc-author style-2">
                                        <div className="card-avatar">
                                            <img src="/assets/images/avatar/avt-2.jpg" alt="" />
                                        </div>
                                        <div className="infor">
                                            <h5><Link href="#">Frank F. Chan</Link></h5>
                                            <div className="details">523.7 ETH</div>
                                            <ul className="rating">
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                            </ul>
                                        </div>
                                        <div className="button-follow">
                                            <Link href="#" className="sc-button style-2"><span>Follow</span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="sc-author style-2">
                                        <div className="card-avatar">
                                            <img src="/assets/images/avatar/avt-3.jpg" alt="" />
                                        </div>
                                        <div className="infor">
                                            <h5><Link href="#">Robert George</Link></h5>
                                            <div className="details">523.7 ETH</div>
                                            <ul className="rating">
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                            </ul>
                                        </div>
                                        <div className="button-follow">
                                            <Link href="#" className="sc-button style-2"><span>Follow</span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="sc-author style-2 ">
                                        <div className="card-avatar">
                                            <img src="/assets/images/avatar/avt-4.jpg" alt="" />
                                        </div>
                                        <div className="infor">
                                            <h5><Link href="#">Frank N. Glisson</Link></h5>
                                            <div className="details">523.7 ETH</div>
                                            <ul className="rating">
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                            </ul>
                                        </div>
                                        <div className="button-follow">
                                            <Link href="#" className="sc-button style-2"><span>Follow</span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="sc-author style-2 ">
                                        <div className="card-avatar">
                                            <img src="/assets/images/avatar/avt-5.jpg" alt="" />
                                        </div>
                                        <div className="infor">
                                            <h5><Link href="#">Jason M. Stalls</Link></h5>
                                            <div className="details">523.7 ETH</div>
                                            <ul className="rating">
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                            </ul>
                                        </div>
                                        <div className="button-follow">
                                            <Link href="#" className="sc-button style-2"><span>Follow</span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="sc-author style-2 ">
                                        <div className="card-avatar">
                                            <img src="/assets/images/avatar/avt-6.jpg" alt="" />
                                        </div>
                                        <div className="infor">
                                            <h5><Link href="#">Mizanur Mango</Link></h5>
                                            <div className="details">523.7 ETH</div>
                                            <ul className="rating">
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                <li className="un-rate"><i className="fas fa-star" /></li>
                                            </ul>
                                        </div>
                                        <div className="button-follow">
                                            <Link href="#" className="sc-button style-2"><span>Follow</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="hot-collections-page tf-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sc-heading style-2">
                                        <div className="content-left">
                                            <div className="inner">
                                                <h3>Hot Collection</h3>
                                                <p className="desc">Most popular gaming digital nft market place </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="swiper-container popular-coll">
                                        <Swiper {...swiperOptions2} className="swiper-wrapper">
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author-card">
                                                        <div className="card-media">
                                                            <img src="/assets/images/img-collection/collection-7.jpg" alt="" />
                                                        </div>
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-15.jpg" alt="" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><Link href="#">John S. Outenewes</Link> </h5>
                                                            <div className="details">ERC - 83</div>
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author-card">
                                                        <div className="card-media">
                                                            <img src="/assets/images/img-collection/collection-8.jpg" alt="" />
                                                        </div>
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-16.jpg" alt="" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><Link href="#">Michel Doknia Kalia</Link> </h5>
                                                            <div className="details">ERC - 83</div>
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author-card">
                                                        <div className="card-media">
                                                            <img src="/assets/images/img-collection/collection-9.jpg" alt="" />
                                                        </div>
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-17.jpg" alt="" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><Link href="#">Somalia X Silva</Link> </h5>
                                                            <div className="details">ERC - 83</div>
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author-card">
                                                        <div className="card-media">
                                                            <img src="/assets/images/img-collection/collection-10.jpg" alt="" />
                                                        </div>
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-18.jpg" alt="" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><Link href="#">Medas S Alskae</Link> </h5>
                                                            <div className="details">ERC - 83</div>
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author-card">
                                                        <div className="card-media">
                                                            <img src="/assets/images/img-collection/collection-8.jpg" alt="" />
                                                        </div>
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-19.jpg" alt="" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><Link href="#">David Mich Hussy</Link> </h5>
                                                            <div className="details">ERC - 83</div>
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author-card mg-bt-0">
                                                        <div className="card-media">
                                                            <img src="/assets/images/img-collection/collection-11.jpg" alt="" />
                                                        </div>
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-20.jpg" alt="" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><Link href="#">John S. Outenewes</Link> </h5>
                                                            <div className="details">ERC - 83</div>
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author-card mg-bt-0">
                                                        <div className="card-media">
                                                            <img src="/assets/images/img-collection/collection-12.jpg" alt="" />
                                                        </div>
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-21.jpg" alt="" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><Link href="#">Zavi HD. Xossy</Link> </h5>
                                                            <div className="details">ERC - 83</div>
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author-card mg-bt-0">
                                                        <div className="card-media">
                                                            <img src="/assets/images/img-collection/collection-8.jpg" alt="" />
                                                        </div>
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-19.jpg" alt="" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><Link href="#">David Mich Hussy</Link> </h5>
                                                            <div className="details">ERC - 83</div>
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author-card mg-bt-0">
                                                        <div className="card-media">
                                                            <img src="/assets/images/img-collection/collection-11.jpg" alt="" />
                                                        </div>
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-20.jpg" alt="" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><Link href="#">John S. Outenewes</Link> </h5>
                                                            <div className="details">ERC - 83</div>
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author-card mg-bt-0">
                                                        <div className="card-media">
                                                            <img src="/assets/images/img-collection/collection-12.jpg" alt="" />
                                                        </div>
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-21.jpg" alt="" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><Link href="#">Zavi HD. Xossy</Link> </h5>
                                                            <div className="details">ERC - 83</div>
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author-card mg-bt-0">
                                                        <div className="card-media">
                                                            <img src="/assets/images/img-collection/collection-13.jpg" alt="" />
                                                        </div>
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-22.jpg" alt="" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><Link href="#">Fillips H Hearts</Link> </h5>
                                                            <div className="details">ERC - 83</div>
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author-card">
                                                        <div className="card-media">
                                                            <img src="/assets/images/img-collection/collection-7.jpg" alt="" />
                                                        </div>
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-15.jpg" alt="" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><Link href="#">John S. Outenewes</Link> </h5>
                                                            <div className="details">ERC - 83</div>
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author-card">
                                                        <div className="card-media">
                                                            <img src="/assets/images/img-collection/collection-8.jpg" alt="" />
                                                        </div>
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-16.jpg" alt="" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><Link href="#">Michel Doknia Kalia</Link> </h5>
                                                            <div className="details">ERC - 83</div>
                                                        </div>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="sc-author-card">
                                                        <div className="card-media">
                                                            <img src="/assets/images/img-collection/collection-9.jpg" alt="" />
                                                        </div>
                                                        <div className="card-avatar">
                                                            <img src="/assets/images/avatar/avt-17.jpg" alt="" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h5><Link href="#">Somalia X Silva</Link> </h5>
                                                            <div className="details">ERC - 83</div>
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
        </>
    )
}