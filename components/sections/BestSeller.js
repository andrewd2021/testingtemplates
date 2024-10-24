
import Link from "next/link"

export default function BestSeller() {
    return (
        <>

            <section className="tf-best-seller">
                <div className="best-seller-inner">
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
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="sc-author wow fadeInUp">
                                <div className="card-avatar">
                                    <img src="/assets/images/avatar/avt-1.jpg" alt="" />
                                </div>
                                <div className="infor">
                                    <h6> <Link href="/author">Jason M. Stalls</Link> </h6>
                                    <div className="details">523.7 ETH</div>
                                </div>
                                <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="sc-author wow fadeInUp">
                                <div className="card-avatar">
                                    <img src="/assets/images/avatar/avt-2.jpg" alt="" />
                                </div>
                                <div className="infor">
                                    <h6> <Link href="/author">Frank F. Chan</Link> </h6>
                                    <div className="details">523.7 ETH</div>
                                </div>
                                <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="sc-author wow fadeInUp">
                                <div className="card-avatar">
                                    <img src="/assets/images/avatar/avt-3.jpg" alt="" />
                                </div>
                                <div className="infor">
                                    <h6> <Link href="/author">Robert George</Link> </h6>
                                    <div className="details">523.7 ETH</div>
                                </div>
                                <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="sc-author wow fadeInUp">
                                <div className="card-avatar">
                                    <img src="/assets/images/avatar/avt-4.jpg" alt="" />
                                </div>
                                <div className="infor">
                                    <h6> <Link href="/author">Frank N. Glisson</Link> </h6>
                                    <div className="details">523.7 ETH</div>
                                </div>
                                <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="sc-author wow fadeInUp end">
                                <div className="card-avatar">
                                    <img src="/assets/images/avatar/avt-5.jpg" alt="" />
                                </div>
                                <div className="infor">
                                    <h6> <Link href="/author">Michel ZonaS</Link> </h6>
                                    <div className="details">523.7 ETH</div>
                                </div>
                                <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="sc-author wow fadeInUp end">
                                <div className="card-avatar">
                                    <img src="/assets/images/avatar/avt-6.jpg" alt="" />
                                </div>
                                <div className="infor">
                                    <h6> <Link href="/author">Mizanur Mango</Link> </h6>
                                    <div className="details">523.7 ETH</div>
                                </div>
                                <Link href="#" className="sc-button btn-bordered-white"><span>Follow</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
