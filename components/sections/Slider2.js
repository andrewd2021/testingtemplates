'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1,
    loop: false,
    speed: 500,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
}

export default function Slider2() {
    return (
        <>

            <section className="tf-slider">
                <div className="swiper-container slider">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="slider-item ">
                                <div className="container">
                                    <div className="slider-inner style-2 home-2 flex">
                                        <div className="slider-content">
                                            <h1 className="heading">Discover and collect your favorite digital NTFs</h1>
                                            <p className="sub-heading">Quis autem vel eum iure reprehenderit qui in ea
                                                voluptates esse quam nihil molestiae consequatur veillum </p>
                                            <div className="button-slider">
                                                <Link href="/explore-1" className="sc-button btn-bordered-white style letter "><span>Explore
                                                    More</span></Link>
                                                <Link href="/create-item" className="sc-button btn-bordered-white style file"><span>Create
                                                    Now</span></Link>
                                            </div>
                                        </div>
                                        <div className="slider-img flex">
                                            <div className="img-left">
                                                <div className="img-1"><img src="/assets/images/slider/img-slider-3.jpg" alt="Image" /></div>
                                                <div className="img-2"><img src="/assets/images/slider/img-slider-4.jpg" alt="Image" /></div>
                                            </div>
                                            <div className="img-right">
                                                <img src="/assets/images/slider/img-slider-5.jpg" alt="Image" />
                                                <div className="box-avatar flex">
                                                    <div className="list-avatar flex">
                                                        <img src="/assets/images/avatar/avt-8.jpg" alt="Image" />
                                                        <img src="/assets/images/avatar/avt-9.jpg" alt="Image" />
                                                        <img src="/assets/images/avatar/avt-10.jpg" alt="Image" />
                                                        <img src="/assets/images/avatar/avt-11.jpg" alt="Image" />
                                                    </div>
                                                    <div className="icon-plus">
                                                        <Link href="#"><i className="fas fa-plus" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* item*/}
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className="slider-inner home-2 flex">
                                    <div className="slider-content">
                                        <h1 className="heading">Discover and collect your favorite digital NTFs</h1>
                                        <p className="sub-heading">Quis autem vel eum iure reprehenderit qui in ea
                                            voluptates esse quam nihil molestiae consequatur veillum </p>
                                        <div className="button-slider">
                                            <Link href="/explore-1" className="sc-button btn-bordered-white style letter "><span>Explore
                                                More</span></Link>
                                            <Link href="/create-item" className="sc-button btn-bordered-white style file"><span>Create
                                                Now</span></Link>
                                        </div>
                                    </div>
                                    <div className="slider-img">
                                        <div className="img-home-1"><img src="/assets/images/slider/img-slider-1.png" alt="Image" /></div>
                                    </div>
                                </div>
                            </div>{/* item*/}
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-pagination" />
                    <div className="swiper-button-next btn-slide-next " />
                    <div className="swiper-button-prev btn-slide-prev" />
                </div>
            </section>
        </>
    )
}
