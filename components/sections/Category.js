
import Link from "next/link"

export default function Category() {
    return (
        <>

            <section className="tf-category tf-section">
                <div className="category-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sc-heading style-2">
                                <div className="content-left">
                                    <div className="inner">
                                        <h3>Poplar Categories</h3>
                                        <p className="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                                <div className="content-right">
                                    <button className="sc-button style letter style-2"><span>Browse More</span> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="sc-category  wow fadeInUp ">
                                <div className="card-media">
                                    <img src="/assets/images/category/category-1.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h5><Link href="#"> Browse By Template</Link></h5>
                                    <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="sc-category  wow fadeInUp  pl-19">
                                <div className="card-media">
                                    <img src="/assets/images/category/category-2.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h5><Link href="#">UI Template</Link></h5>
                                    <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="sc-category  wow fadeInUp  pl-40">
                                <div className="card-media">
                                    <img src="/assets/images/category/category-3.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h5><Link href="#">Graphics Design</Link></h5>
                                    <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="sc-category  wow fadeInUp  mg-bt-0">
                                <div className="card-media">
                                    <img src="/assets/images/category/category-4.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h5><Link href="#">Social Network</Link></h5>
                                    <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="sc-category  wow fadeInUp  mg-bt-0 pl-19">
                                <div className="card-media">
                                    <img src="/assets/images/category/category-5.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h5><Link href="#">Browse By Template</Link></h5>
                                    <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="sc-category  wow fadeInUp  mg-bt-0 pl-40 end">
                                <div className="card-media">
                                    <img src="/assets/images/category/category-6.jpg" alt="" />
                                </div>
                                <div className="card-content">
                                    <h5><Link href="#">Browse By Template</Link></h5>
                                    <p>Sed ut perspiciatis unde omnis natus error sit voluptatem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
