'use client'
import CountDownTime from "@/components/elements/CountDownTime"
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
        1024: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
    },
}

export default function ItemDetails() {
    const [isTab, setIsTab] = useState(1)
    const handleTab = (i) => {
        setIsTab(i)
    }
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

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Auctions Details">
                <div>
                    <section className="tf-section item-details-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-12 col-md-12">
                                    <div className="item-media">
                                        <div className="media">
                                            <img src="/assets/images/product-item/auction-detail.jpg" alt="" />
                                        </div>
                                        <div className="countdown style-2">
                                            <span className="js-countdown" data-timer={516400} data-labels=" Days  , Hour , Mint ,Seco" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-12">
                                    <div className="content-item">
                                        <h3> Mission For Ghost Fighter</h3>
                                        <p className="mg-bt-42">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                            ipsam voluptatem quia voluptas sit aspernatur aut</p>
                                        <div className="author-item">
                                            <div className="avatar">
                                                <img src="/assets/images/avatar/avt-4.jpg" alt="" />
                                            </div>
                                            <div className="infor">
                                                <div className="create">Owner By</div>
                                                <h6><Link href="/author">Duane M. Mendoza</Link> </h6>
                                                <div className="widget-social">
                                                    <ul>
                                                        <li><Link href="#" className="active"><i className="fab fa-facebook-f" /></Link>
                                                        </li>
                                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="list-details-item">
                                            <li><span className="name">Current Price 1.5 ETH</span><span className="price">$500.89</span> <span className="pagi">1 of 5</span> </li>
                                            <li>Size 14000 x 14000 px</li>
                                            <li> Volume Traded 64.1</li>
                                        </ul>
                                        <div className="author-bid">
                                            <div className="author-item">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-6.jpg" alt="" />
                                                </div>
                                                <div className="infor">
                                                    <h6><Link href="/author">Keith J. Kelley</Link> </h6>
                                                    <div className="create">Creators</div>
                                                </div>
                                            </div>
                                            <div className="author-item">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avt-3.jpg" alt="" />
                                                </div>
                                                <div className="infor">
                                                    <h6><Link href="/author">David Michels</Link> </h6>
                                                    <div className="create">Collection</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="infor-bid">
                                            <div className="content-left">
                                                <h6>Highest Bid</h6>
                                                <div className="price">9.3 BNB</div>
                                            </div>
                                            <div className="pagi">1 Of 9</div>
                                        </div>
                                        <a onClick={handlePopupBid} data-target="#popup_bid" className="sc-button style letter style-2 style-item-details"><span>Place Bid</span>
                                        </a>
                                        <div className="flat-tabs themesflat-tabs">
                                            <ul className="menu-tab tab-title">
                                                <li className={isTab === 1 ? "item-title active" : "item-title"} onClick={() => handleTab(1)}>
                                                    <span className="inner">Bids</span>
                                                </li>
                                                <li className={isTab === 2 ? "item-title active" : "item-title"} onClick={() => handleTab(2)}>
                                                    <span className="inner">History</span>
                                                </li>
                                                <li className={isTab === 3 ? "item-title active" : "item-title"} onClick={() => handleTab(3)}>
                                                    <span className="inner">Details</span>
                                                </li>
                                            </ul>
                                            <div className="content-tab">
                                                <div className="content-inner tab-content" style={{ display: `${isTab == 1 ? "block" : "none"}` }}>
                                                    <ul className="bid-history-list">
                                                        <li>
                                                            <div className="content">
                                                                <div className="author-item">
                                                                    <div className="avatar">
                                                                        <img src="/assets/images/avatar/avt-6.jpg" alt="" />
                                                                    </div>
                                                                    <div className="infor">
                                                                        <p>Bid listed for <span className="status">25 ETH 8</span>
                                                                            hours ago
                                                                            by <span className="creator">@Johnson</span> </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="content">
                                                                <div className="author-item">
                                                                    <div className="avatar">
                                                                        <img src="/assets/images/avatar/avt-2.jpg" alt="" />
                                                                    </div>
                                                                    <div className="infor">
                                                                        <p>Bid listed for <span className="status">25 ETH 8</span>
                                                                            hours ago
                                                                            by <span className="creator">@Johnson</span> </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="content">
                                                                <div className="author-item">
                                                                    <div className="avatar">
                                                                        <img src="/assets/images/avatar/avt-4.jpg" alt="" />
                                                                    </div>
                                                                    <div className="infor">
                                                                        <p>Bid listed for <span className="status">25 ETH 8</span>
                                                                            hours ago
                                                                            by <span className="creator">@Johnson</span> </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="content-inner tab-content" style={{ display: `${isTab == 2 ? "block" : "none"}` }}>
                                                    <ul className="bid-history-list">
                                                        <li>
                                                            <div className="content">
                                                                <div className="client">
                                                                    <div className="author-item">
                                                                        <div className="avatar">
                                                                            <img src="/assets/images/avatar/avt-6.jpg" alt="" />
                                                                        </div>
                                                                        <div className="infor">
                                                                            <p>Bid listed for <span className="status">25 ETH
                                                                                8</span> hours ago
                                                                                by <span className="creator">@Johnson</span> </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="content-inner tab-content" style={{ display: `${isTab == 3 ? "block" : "none"}` }}>
                                                    <div className="provenance">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                            industry.
                                                            Lorem Ipsum has been the industry's standard dummy text ever since
                                                            the 1500s,
                                                            when an unknown printer took a galley of type and scrambled it to
                                                            make a type specimen book.
                                                            It has survived not only five centuries, but also the leap into
                                                            electronic typesetting,
                                                            remaining essentially unchanged. It was popularised in the 1960s
                                                            with the release of Letraset sheets containing Lorem Ipsum passages,
                                                            and more recently with desktop publishing software like Aldus
                                                            PageMaker including versions of Lorem Ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="live-autions tf-section">
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