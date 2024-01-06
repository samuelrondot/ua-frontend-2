// React
import { FC, useEffect, useState } from "react";
// Common Components
import { Layout } from "common/components/layout";
// Module Components
import { SalesPricingOfferGrid } from "../offer-grid";
import { SalesPricingBrands } from "../brands";
import { SalesPricingHero } from "../hero";
import { SalesPricingFaq } from "../faq";

export const SalesPricingLandingPage: FC = () => {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");

    return (
        <>
            <Layout>
                <div className="w-full min-h-24px flex flex-col items-center mb-[60px] gap-8px tablet:gap-0">
                    <SalesPricingHero
                        billingPeriod={billingPeriod}
                        onChange={(period) => setBillingPeriod(period)} />
                   {/* <SalesPricingBrands /> */}
                    <SalesPricingOfferGrid
                        billingPeriod={billingPeriod}
                        onChange={(period) => setBillingPeriod(period)} />
                    <SalesPricingFaq />
                </div>
            </Layout>''
        </>
    );
}