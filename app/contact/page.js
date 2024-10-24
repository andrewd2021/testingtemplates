
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
                <div>
                    <section className="tf-contact tf-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="sc-contact-infor">
                                        <h4>Need Help? Contact
                                            With Our Hotline</h4>
                                        <div className="icon">
                                            <i className="fal fa-phone-volume" />
                                        </div>
                                        <div className="infor">
                                            <Link href="/tel:012345678">+012 (345) 678 88</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="sc-contact-infor">
                                        <h4>Need Help? Contact
                                            With Our Hotline</h4>
                                        <div className="icon">
                                            <i className="fal fa-map-marker-alt" />
                                        </div>
                                        <div className="infor">
                                            55 Main Street, 2nd Block,3rd Floor, New York
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="sc-contact-infor">
                                        <h4>Need Help? Contact
                                            With Our Hotline</h4>
                                        <div className="icon">
                                            <i className="fal fa-envelope-open" />
                                        </div>
                                        <div className="infor">
                                            <Link href="/mailto:abc@gmail.com">hotlineinfo@gmail.com
                                                www.bidzen.net</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container-fluid">
                            <div className="row">
                                <iframe className="map-contact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1640857108284!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                            </div>
                        </div>
                    </section>
                    <section className="tf-section login-page contact-page pd-top-0">
                        <div className="container">
                            <div className="row jtf-content-center">
                                <div className="col-md-8">
                                    <div className="form-create-item-content">
                                        <div className="form-create-item">
                                            <div className="sc-heading">
                                                <h3>Send Us Message</h3>
                                                <p className="desc">Most popular gaming digital nft market place </p>
                                            </div>
                                            <form id="create-item-1" action="./contact/contact-process.php" method="post" acceptCharset="utf-8" noValidate="novalidate">
                                                <input type="text" id="name" className="tb-my-input" name="name" tabIndex={1} placeholder="Your Full Name" aria-required="true" required />
                                                <input type="email" id="email" className="tb-my-input" name="email" tabIndex={2} placeholder="Email Address" aria-required="true" required />
                                                <select className="valid">
                                                    <option value={1}>Subject</option>
                                                    <option value={2}>Subject</option>
                                                    <option value={3}>Subject</option>
                                                </select>
                                                <textarea id="comment-message" name="message" tabIndex={4} placeholder="Write Message" aria-required="true" />
                                                <button name="submit" type="submit" id="comment-reply" className="sc-button style letter style-2"><span>Send Message</span> </button>
                                            </form>
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