
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Login() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Log In">
                <div>
                    <section className="tf-section login-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-create-item-content">
                                        <div className="form-create-item">
                                            <div className="sc-heading">
                                                <h3>Login Your Account</h3>
                                                <p className="desc">Most popular gaming digital nft market place </p>
                                            </div>
                                            <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">
                                                <input name="user" type="text" placeholder="User Name/Email Address" required />
                                                <input name="number" type="password" placeholder="Password" required />
                                                <div className="input-group style-2 ">
                                                    <div className="btn-check">
                                                        <input type="radio" id="html" name="fav_language" />
                                                        <label htmlFor="html">Remember Me</label>
                                                    </div>
                                                </div>
                                                <button name="submit" type="submit" className="sc-button style letter style-2"><span>Sing In</span> </button>
                                            </form>
                                            <div className="other-login">
                                                <div className="text">Or</div>
                                                <div className="widget-social">
                                                    <ul>
                                                        <li><Link href="#" className="active"><i className="fab fa-facebook-f" /></Link>
                                                        </li>
                                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-google-plus-g" /></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-background">
                                            <img src="/assets/images/background/img-login.jpg" alt="" />
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