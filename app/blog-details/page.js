
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogDetails() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Destails">
                <div>
                    <div className="tf-section post-details" style={{ padding: '100px 0' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <article className="blog-details">
                                        <div className="post-media">
                                            <img src="/assets/images/post/post-detail-1.jpg" alt="" />
                                            <div className="meta">
                                                <div className="item author">
                                                    <Link href="#">Dale J. Barnes</Link>
                                                </div>
                                                <div className="item date">
                                                    <Link href="#">05 Jan 2022</Link>
                                                </div>
                                                <div className="item comments">
                                                    Comments (5)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-content">
                                            <h1 className="post-title">Ultimate Digital Clean-Up Checklist Are You Prepared For New
                                                Year E-Commerce Platforms An Overview Most Common</h1>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                                                porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                                magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                                                esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                                                voluptas nulla pariatur</p>
                                        </div>
                                        <blockquote className="block-quote">
                                            <h4>Roll Out New Features Without Hurting Loyal Users Unicode Character Sets The
                                                Ultim An Overview UX Design Deliverables</h4>
                                            <div className="author">John B. Thomas</div>
                                        </blockquote>
                                        <div className="post-content">
                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                                                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                                exercitationem ullam corporis suscipit laboriosam</p>
                                        </div>
                                    </article>
                                    <div className="post-details">
                                        <div className="details-left">
                                            <div className="wg-title style-2">
                                                Popular Tags
                                            </div>
                                            <div className="wg-tags style-2">
                                                <ul>
                                                    <li className="active"><Link href="#">Crypto</Link></li>
                                                    <li><Link href="#">Bitcoin</Link></li>
                                                    <li><Link href="#">ICO Landing</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="details-right">
                                            <div className="wg-title style-2">
                                                Share Post
                                            </div>
                                            <div className="widget-social style-3">
                                                <ul>
                                                    <li><Link href="#" className="active"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-google-plus-g" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-author style-2">
                                        <div className="avatar">
                                            <img src="/assets/images/avatar/avt-12.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="#">Herbert N. Johnson</Link></h4>
                                            <div className="job">Author</div>
                                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                                                molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                                pariatur must explain to you how all this mistaken idea of denouncing</p>
                                            <div className="widget-social style-4">
                                                <ul>
                                                    <li><Link href="#" className="active"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-google-plus-g" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget item widget-post style-2">
                                        <div className="wg-title style-2">
                                            Related News
                                        </div>
                                        <ul className="post-new">
                                            <li>
                                                <div className="post-img">
                                                    <img src="/assets/images/post/post-related-new-1.jpg" alt="Post New" />
                                                </div>
                                                <div className="post-content">
                                                    <Link href="/blog-details" className="post-date"><i className="far fa-calendar-week" /> 05 Jan 2022</Link>
                                                    <h6 className="title"><Link href="/blog-details">Comprensive Guides Server
                                                        Push Design Feature</Link></h6>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="post-img">
                                                    <img src="/assets/images/post/post-related-new-2.jpg" alt="Post New" />
                                                </div>
                                                <div className="post-content">
                                                    <Link href="/blog-details" className="post-date"><i className="far fa-calendar-week" /> 05 Jan 2022</Link>
                                                    <h6 className="title"><Link href="/blog-details">Comprensive Guides Server
                                                        Push Design Feature</Link></h6>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget item wg-comments">
                                        <div className="wg-title">
                                            People Comments
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="post-author">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avt-13.jpg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h4><Link href="#">Matthew A. Larrison</Link></h4>
                                                        <div className="job">25 January 2022</div>
                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                                            quae</p>
                                                        <Link href="#" className="reply active">Reply</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="reply-comment">
                                                <div className="post-author">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avt-14.jpg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h4><Link href="#">Joshua S. Flores</Link></h4>
                                                        <div className="job">25 January 2022</div>
                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                                            quae</p>
                                                        <Link href="#" className="reply">Reply</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="post-author">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avt-15.jpg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h4><Link href="#">Daniel C. Stackhouse</Link></h4>
                                                        <div className="job">25 January 2022</div>
                                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                                            quae</p>
                                                        <Link href="#" className="reply">Reply</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="wg-post-comments">
                                        <div className="wg-title">
                                            Leave a Reply
                                        </div>
                                        <div className="desc">We’re Ready to Help Your Buisness</div>
                                        <form method="post" id="contactform" className="comment-form form-submit" action="./contact/contact-process.php" acceptCharset="utf-8" noValidate="novalidate">
                                            <div className="text-wrap clearfix">
                                                <fieldset className="name-wrap">
                                                    <input type="text" id="name" className="tb-my-input" name="name" tabIndex={1} placeholder="Full Name" size={32} aria-required="true" required />
                                                </fieldset>
                                                <fieldset className="email-wrap">
                                                    <input type="email" id="email" className="tb-my-input" name="email" tabIndex={2} placeholder="Email Address" size={32} aria-required="true" required />
                                                </fieldset>
                                            </div>
                                            <fieldset className="message-wrap">
                                                <textarea id="comment-message" name="message" tabIndex={4} placeholder="Write Message" aria-required="true" />
                                            </fieldset>
                                            <button name="submit" type="submit" id="comment-reply" className="sc-button style letter style-2"><span>Send Reply</span> </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <aside className="side-bar">
                                        <div className="widget wg-search">
                                            <form action="#" method="get" role="search" className="search-form">
                                                <input type="search" className="search-field" placeholder="Search" name="s" title="Search for" required />
                                                <button className="search search-submit" type="submit" title="Search" />
                                            </form>
                                        </div>
                                        <div className="widget item wg-category">
                                            <div className="wg-title">
                                                Category
                                            </div>
                                            <ul>
                                                <li><Link href="#"><span>Bitcoin</span><span>(5)</span></Link></li>
                                                <li><Link href="#"><span>Blockchain</span><span>(8)</span></Link></li>
                                                <li><Link href="#"><span>NFT</span><span>(3)</span></Link></li>
                                                <li><Link href="#"><span>Cryptocurrency</span><span>(2)</span></Link></li>
                                                <li><Link href="#"><span>ICO</span><span>(4)</span></Link></li>
                                                <li><Link href="#"><span>News</span><span>(5)</span></Link></li>
                                                <li><Link href="#"><span>Uncategorized</span><span>(2)</span></Link></li>
                                            </ul>
                                        </div>
                                        <div className="widget item widget-post style-3">
                                            <div className="wg-title">
                                                Recent News
                                            </div>
                                            <ul className="post-new">
                                                <li>
                                                    <div className="post-img">
                                                        <img src="/assets/images/post/post-recent-new-1.jpg" alt="Post New" />
                                                    </div>
                                                    <div className="post-content">
                                                        <Link href="/blog-details" className="post-date"><i className="far fa-calendar-week" /> 05 Jan 2022</Link>
                                                        <h6 className="title"><Link href="/blog-details">An Overview Of The Most
                                                            Common UX Design </Link></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="post-img">
                                                        <img src="/assets/images/post/post-recent-new-2.jpg" alt="Post New" />
                                                    </div>
                                                    <div className="post-content">
                                                        <Link href="/blog-details" className="post-date"><i className="far fa-calendar-week" /> 05 Jan 2022</Link>
                                                        <h6 className="title"><Link href="/blog-details">An Overview Of The Most
                                                            Common UX Design </Link></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="post-img">
                                                        <img src="/assets/images/post/post-recent-new-3.jpg" alt="Post New" />
                                                    </div>
                                                    <div className="post-content">
                                                        <Link href="/blog-details" className="post-date"><i className="far fa-calendar-week" /> 05 Jan 2022</Link>
                                                        <h6 className="title"><Link href="/blog-details">An Overview Of The Most
                                                            Common UX Design </Link></h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget item wg-tags">
                                            <div className="wg-title">
                                                Popular Tags
                                            </div>
                                            <ul>
                                                <li className="active"><Link href="#">Crypto</Link></li>
                                                <li><Link href="#">Bitcoin</Link></li>
                                                <li><Link href="#">Landing</Link></li>
                                                <li><Link href="#">Digital</Link></li>
                                                <li><Link href="#">NFTs</Link></li>
                                            </ul>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
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