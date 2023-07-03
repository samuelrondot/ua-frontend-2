// React
import { FC } from "react"
// Common Components
import { Layout } from "common/components/layout"
// Module Components
import { CrmStartupCallToActions } from "modules/crm/startup/components/call-to-actions"
import { Testimonials } from "../testimonials"
import { Features2 } from "../features-2"
import { Features } from "../features"
import { Brands } from "../brands"
import { Offer } from "../offer"
import { Hero } from "../hero"

type OwnProps = {
    style?: object,
}

export const LandingPage: FC<OwnProps> = (props) => {

    return (
        <>
            <Layout>
                <Hero />
                <Brands />
                <Features />
               
                <Features2 />
                <Testimonials />
                <CrmStartupCallToActions />
            </Layout>
        </>
    )
}