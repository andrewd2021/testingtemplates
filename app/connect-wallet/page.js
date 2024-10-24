
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ConnectWallet() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Wallet-Connect">
                <div>
                    <section className="tf-section connect-wallet">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sc-heading">
                                        <h3>Wallet- Connect</h3>
                                        <p className="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="sc-wallet">
                                        <div className="icon">
                                            <img src="/assets/images/icon/icon-1.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="#"> Meta Mask</Link></h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium,</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="sc-wallet">
                                        <div className="icon">
                                            <img src="/assets/images/icon/icon-2.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="#">Bitski</Link></h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium,</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="sc-wallet">
                                        <div className="icon">
                                            <img src="/assets/images/icon/icon-3.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="#">Fortmatic</Link></h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium,</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="sc-wallet">
                                        <div className="icon">
                                            <img src="/assets/images/icon/icon-4.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="#">Wallet Connect</Link></h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium,</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="sc-wallet">
                                        <div className="icon">
                                            <img src="/assets/images/icon/icon-5.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="#">Coinbase Wallet</Link></h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium,</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="sc-wallet">
                                        <div className="icon">
                                            <img src="/assets/images/icon/icon-6.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="#">Authereum</Link></h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium,</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="sc-wallet mg-bt-0">
                                        <div className="icon">
                                            <img src="/assets/images/icon/icon-7.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="#">kaikas</Link></h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium,</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="sc-wallet mg-bt-0">
                                        <div className="icon">
                                            <img src="/assets/images/icon/icon-8.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="#">Torus</Link></h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium,</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="sc-wallet mg-bt-0">
                                        <div className="icon">
                                            <img src="/assets/images/icon/icon-9.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="#">Bitcoin</Link></h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium,</p>
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