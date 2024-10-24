
import Link from "next/link"

export default function CreateAndSell() {
    return (
        <>

            <section className="create-and-sell tf-section bg-color-14161B">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sc-heading style-2 create-and-sell">
                                <div className="content-left">
                                    <div className="inner">
                                        <h3>Create and sell your NFTs</h3>
                                        <p className="desc">Most popular gaming digital nft market place </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="sc-wallet style-2 active">
                                <div className="icon">
                                    <img src="/assets/images/icon/icon-10.svg" alt="" />
                                </div>
                                <div className="content">
                                    <h5><Link href="/connect-wallet">Set Up Your Wallet</Link></h5>
                                    <p>Sed ut perspiciatis unde omnste natus error sit voluptatem </p>
                                    <Link href="/connect-wallet" className="read-more"><i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="sc-wallet style-2">
                                <div className="icon">
                                    <img src="/assets/images/icon/icon-11.svg" alt="" />
                                </div>
                                <div className="content">
                                    <h5><Link href="/create-item">Create Your Collection</Link></h5>
                                    <p>Sed ut perspiciatis unde omnste natus error sit voluptatem </p>
                                    <Link href="/create-item" className="read-more"><i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="sc-wallet style-2 mg-bt-0">
                                <div className="icon">
                                    <img src="/assets/images/icon/icon-12.svg" alt="" />
                                </div>
                                <div className="content">
                                    <h5><Link href="/author">Add Your NFTs</Link></h5>
                                    <p>Sed ut perspiciatis unde omnste natus error sit voluptatem </p>
                                    <Link href="/author" className="read-more"><i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="sc-wallet style-2 mg-bt-0 end">
                                <div className="icon">
                                    <img src="/assets/images/icon/icon-13.svg" alt="" />
                                </div>
                                <div className="content">
                                    <h5><Link href="/item">List Them For Sale</Link></h5>
                                    <p>Sed ut perspiciatis unde omnste natus error sit voluptatem </p>
                                    <Link href="/item" className="read-more"><i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
