import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>

            <section className="fl-page-title">
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-inner flex">
                                <div className="page-title-heading">
                                    <h2 className="heading">{breadcrumbTitle}</h2>
                                </div>
                                <div className="breadcrumbs">
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li>{breadcrumbTitle}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
