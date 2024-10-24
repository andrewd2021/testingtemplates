
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function CreateItem() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Create Item">
                <div>
                    <div className="tf-section top-seller">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sc-heading style-3">
                                        <h3>Top Sellers</h3>
                                        <p className="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="sc-author-card style-2 active">
                                        <div className="card-media">
                                            <img src="/assets/images/img-collection/collection-7.jpg" alt="" />
                                        </div>
                                        <div className="card-avatar">
                                            <img src="/assets/images/avatar/avt-15.jpg" alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h5><Link href="/author">John S. Outenewes</Link> </h5>
                                            <div className="details">ERC - 83</div>
                                            <div className="card-bottom">
                                                <div className="widget-social">
                                                    <ul>
                                                        <li><Link href="#" className="active"><i className="fab fa-facebook-f" /></Link>
                                                        </li>
                                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                                    </ul>
                                                </div>
                                                <Link href="#" className="sc-button style-2"><span>Follow</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="sc-author-card style-2">
                                        <div className="card-media">
                                            <img src="/assets/images/img-collection/collection-8.jpg" alt="" />
                                        </div>
                                        <div className="card-avatar">
                                            <img src="/assets/images/avatar/avt-16.jpg" alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h5><Link href="/author">Michel Doknia Kalia</Link> </h5>
                                            <div className="details">ERC - 83</div>
                                            <div className="card-bottom">
                                                <div className="widget-social">
                                                    <ul>
                                                        <li><Link href="#" className="active"><i className="fab fa-facebook-f" /></Link>
                                                        </li>
                                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                                    </ul>
                                                </div>
                                                <Link href="#" className="sc-button style-2"><span>Follow</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="sc-author-card style-2">
                                        <div className="card-media">
                                            <img src="/assets/images/img-collection/collection-9.jpg" alt="" />
                                        </div>
                                        <div className="card-avatar">
                                            <img src="/assets/images/avatar/avt-17.jpg" alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h5><Link href="/author">Somalia X Silva</Link> </h5>
                                            <div className="details">ERC - 83</div>
                                            <div className="card-bottom">
                                                <div className="widget-social">
                                                    <ul>
                                                        <li><Link href="#" className="active"><i className="fab fa-facebook-f" /></Link>
                                                        </li>
                                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                                    </ul>
                                                </div>
                                                <Link href="#" className="sc-button style-2"><span>Follow</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="sc-author-card style-2 mb-mg-0">
                                        <div className="card-media">
                                            <img src="/assets/images/img-collection/collection-10.jpg" alt="" />
                                        </div>
                                        <div className="card-avatar">
                                            <img src="/assets/images/avatar/avt-18.jpg" alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h5><Link href="/author">Medas S Alskae</Link> </h5>
                                            <div className="details">ERC - 83</div>
                                            <div className="card-bottom">
                                                <div className="widget-social">
                                                    <ul>
                                                        <li><Link href="#" className="active"><i className="fab fa-facebook-f" /></Link>
                                                        </li>
                                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                                    </ul>
                                                </div>
                                                <Link href="#" className="sc-button style-2"><span>Follow</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="tf-section create-item pd-top-0 mg-t-40">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-create-item-content">
                                        <div className="form-create-item">
                                            <div className="sc-heading">
                                                <h3>Create Item</h3>
                                                <p className="desc">Most popular gaming digital nft market place </p>
                                            </div>
                                            <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">
                                                <label className="uploadFile">
                                                    <span className="filename">Choose Item</span>
                                                    <input type="file" className="inputfile form-control" name="file" />
                                                    <span className="icon"><i className="far fa-cloud-upload" /></span>
                                                </label>
                                                <div className="input-group">
                                                    <input name="name" type="text" placeholder="Item Name" required />
                                                    <input name="number" type="text" placeholder="Item Price" required />
                                                </div>
                                                <div className="input-group">
                                                    <input name="name" type="text" placeholder="Royality" required />
                                                    <input name="number" type="text" placeholder="Size" required />
                                                </div>
                                                <div className="input-group">
                                                    <input name="name" type="text" placeholder="Blance" required />
                                                    <input name="number" type="text" placeholder="No Of Copies" required />
                                                </div>
                                                <textarea id="comment-message" name="message" tabIndex={4} placeholder="Description" aria-required="true" />
                                                <div className="input-group style-2 ">
                                                    <div className="btn-check">
                                                        <input type="radio" id="sale" name="fav_language" />
                                                        <label htmlFor="sale">Put On Sale</label>
                                                    </div>
                                                    <div className="btn-check">
                                                        <input type="radio" id="price" name="fav_language" />
                                                        <label htmlFor="price">
                                                            Instant Sale Price
                                                        </label>
                                                    </div>
                                                    <div className="btn-check">
                                                        <input type="radio" id="purchase" name="fav_language" />
                                                        <label htmlFor="purchase">
                                                            Unlock Purchased
                                                        </label>
                                                    </div>
                                                </div>
                                                <button name="submit" type="submit" id="submit" className="sc-button style letter style-2"><span>Create Item</span> </button>
                                            </form>
                                        </div>
                                        <div className="form-background">
                                            <img src="/assets/images/background/img-create-item.jpg" alt="" />
                                        </div>
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
                                            <button name="submit" type="submit" className="sc-button style letter style-2"><span>Browse More</span> </button>
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