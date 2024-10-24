
import Layout from "@/components/layout/Layout"
import CreateAndSell from "@/components/sections/CreateAndSell"
import HotCollections from "@/components/sections/HotCollections"
import LatestCollections2 from "@/components/sections/LatestCollections2"
import LiveAuctions2 from "@/components/sections/LiveAuctions2"
import Newsletter2 from "@/components/sections/Newsletter2"
import PopularCollections from "@/components/sections/PopularCollections"
import Slider2 from "@/components/sections/Slider2"
import TopSeller from "@/components/sections/TopSeller"
export default function Home2() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <Slider2 />
                <TopSeller />
                <LiveAuctions2 />
                <CreateAndSell />
                <LatestCollections2 />
                <HotCollections />
                <PopularCollections />
                <Newsletter2 />
            </Layout>
        </>
    )
}