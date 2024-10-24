
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Register() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Register">
                <div>
                    <section className="tf-section login-page register-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-create-item-content">
                                        <div className="form-create-item">
                                            <div className="sc-heading">
                                                <h3>Create An Account</h3>
                                                <p className="desc">Most popular gaming digital nft market place </p>
                                            </div>
                                            <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">
                                                <div className="input-group">
                                                    <input name="name" type="text" placeholder="First Name" required />
                                                    <input name="name" type="text" placeholder="Last Name" required />
                                                </div>
                                                <div className="input-group">
                                                    <input name="phone" type="text" placeholder="Phone Number" required />
                                                    <input name="name" type="text" placeholder="User Name" required />
                                                </div>
                                                <input name="email" type="email" placeholder="Email Address" required />
                                                <div className="input-group">
                                                    <input name="password" type="password" placeholder="Password" required />
                                                    <input name="password" type="password" placeholder="Re-Password" required />
                                                </div>
                                                <div className="input-group style-2 ">
                                                    <div className="btn-check">
                                                        <input type="radio" id="html" name="fav_language" className="mg-bt-0" />
                                                        <label htmlFor="html">Remember Me</label>
                                                    </div>
                                                </div>
                                                <button name="submit" type="submit" className="sc-button style letter style-2"><span>Register Now</span> </button>
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
                                            <img src="/assets/images/background/img-register.jpg" alt="" />
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