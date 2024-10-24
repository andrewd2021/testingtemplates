

'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    loop: false,
    spaceBetween: 26,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 26,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 26,
        },
    },
}


export default function HotCollections() {
    return (
        <>

            <section className="hot-collections tf-section bg-color-4">
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
                            <div className="swiper-container hot-coll">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-author-card style-3">
                                                <div className="card-media">
                                                    <img src="/assets/images/img-collection/collection-1.jpg" alt="" />
                                                </div>
                                                <div className="card-avatar">
                                                    <img src="/assets/images/avatar/avt-3.jpg" alt="" />
                                                </div>
                                                <div className="card-content">
                                                    <h5><Link href="/author">Nelson P. Bishos</Link> </h5>
                                                    <div className="details">ERC-75</div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-author-card style-3">
                                                <div className="card-media">
                                                    <img src="/assets/images/img-collection/collection-2.jpg" alt="" />
                                                </div>
                                                <div className="card-avatar">
                                                    <img src="/assets/images/avatar/avt-4.jpg" alt="" />
                                                </div>
                                                <div className="card-content">
                                                    <h5><Link href="/author">Charles Chappell</Link> </h5>
                                                    <div className="details">ERC-75</div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-author-card style-3">
                                                <div className="card-media">
                                                    <img src="/assets/images/img-collection/collection-3.jpg" alt="" />
                                                </div>
                                                <div className="card-avatar">
                                                    <img src="/assets/images/avatar/avt-6.jpg" alt="" />
                                                </div>
                                                <div className="card-content">
                                                    <h5><Link href="/author">Sharles D. Evers</Link> </h5>
                                                    <div className="details">ERC-75</div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-author-card style-3">
                                                <div className="card-media">
                                                    <img src="/assets/images/img-collection/collection-4.jpg" alt="" />
                                                </div>
                                                <div className="card-avatar">
                                                    <img src="/assets/images/avatar/avt-2.jpg" alt="" />
                                                </div>
                                                <div className="card-content">
                                                    <h5><Link href="/author">Bill S. Maxwell</Link> </h5>
                                                    <div className="details">ERC-75</div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-author-card style-3">
                                                <div className="card-media">
                                                    <img src="/assets/images/img-collection/collection-5.jpg" alt="" />
                                                </div>
                                                <div className="card-avatar">
                                                    <img src="/assets/images/avatar/avt-3.jpg" alt="" />
                                                </div>
                                                <div className="card-content">
                                                    <h5><Link href="/author">Nelson P. Bishos</Link> </h5>
                                                    <div className="details">ERC-75</div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-author-card style-3">
                                                <div className="card-media">
                                                    <img src="/assets/images/img-collection/collection-6.jpg" alt="" />
                                                </div>
                                                <div className="card-avatar">
                                                    <img src="/assets/images/avatar/avt-5.jpg" alt="" />
                                                </div>
                                                <div className="card-content">
                                                    <h5><Link href="/author">Lee W. Rodriguez</Link> </h5>
                                                    <div className="details">ERC-75</div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-author-card style-3">
                                                <div className="card-media">
                                                    <img src="/assets/images/img-collection/collection-2.jpg" alt="" />
                                                </div>
                                                <div className="card-avatar">
                                                    <img src="/assets/images/avatar/avt-4.jpg" alt="" />
                                                </div>
                                                <div className="card-content">
                                                    <h5><Link href="/author">Charles Chappell</Link> </h5>
                                                    <div className="details">ERC-75</div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-author-card style-3">
                                                <div className="card-media">
                                                    <img src="/assets/images/img-collection/collection-3.jpg" alt="" />
                                                </div>
                                                <div className="card-avatar">
                                                    <img src="/assets/images/avatar/avt-6.jpg" alt="" />
                                                </div>
                                                <div className="card-content">
                                                    <h5><Link href="/author">Sharles D. Evers</Link> </h5>
                                                    <div className="details">ERC-75</div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="sc-author-card style-3">
                                                <div className="card-media">
                                                    <img src="/assets/images/img-collection/collection-4.jpg" alt="" />
                                                </div>
                                                <div className="card-avatar">
                                                    <img src="/assets/images/avatar/avt-2.jpg" alt="" />
                                                </div>
                                                <div className="card-content">
                                                    <h5><Link href="/author">Bill S. Maxwell</Link> </h5>
                                                    <div className="details">ERC-75</div>
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
        </>
    )
}
