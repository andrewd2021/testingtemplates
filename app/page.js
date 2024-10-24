import Layout from "@/components/layout/Layout"
import BestSeller from "@/components/sections/BestSeller"
import Category from "@/components/sections/Category"
import LatestCollections1 from "@/components/sections/LatestCollections1"
import LiveAuctions1 from "@/components/sections/LiveAuctions1"
import Newsletter1 from "@/components/sections/Newsletter1"
import Slider1 from "@/components/sections/Slider1"
import TrendyCollections from "@/components/sections/TrendyCollections"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} footercls="ft-home-1">
                <Slider1 />
                <LiveAuctions1 />
                <LatestCollections1 />
                <BestSeller />
                <TrendyCollections />
                <Category />
                <Newsletter1 />
            </Layout>
        </>
    )
}