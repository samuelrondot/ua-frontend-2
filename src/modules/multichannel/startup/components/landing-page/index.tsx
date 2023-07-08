// React
import { FC } from "react";
// Common Components
import { Layout } from "common/components/layout";
// Module Components
import { CrmStartupTestimonialsList } from "../testimonials-list";
import { CrmStartupTestimonial } from "../testimonal";
import { CrmStartupCallToActions } from "../call-to-actions";
import { CrmStartupFeatures } from "../features";
import { CrmStartupWorkflow } from "../workflow";
import { CrmStartupBrands } from "../brands";
import { CrmStartupHero } from "../hero";


export const CrmStartupLandingPage: FC = () => {

    return (
        <>
            <Layout>
                <CrmStartupHero />
                <CrmStartupBrands />
                <CrmStartupTestimonialsList />
                <CrmStartupFeatures />
                <CrmStartupWorkflow />
                <CrmStartupTestimonial />
                <CrmStartupCallToActions />
            </Layout>
        </>
    );
}