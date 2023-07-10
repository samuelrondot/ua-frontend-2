// React
import { FC, useEffect, useState } from "react";

const btnActive = 'text-white pointer-events-none'
const btnInactive = 'text-neutral-light-500 ease-in-out'

type OwnProps = {
    className?: string
    billingPeriod: "monthly" | "annually"
    onChange: (billingPeriod: "monthly" | "annually") => void
}

export const SalesPricingBillingSelector: FC<OwnProps> = (props) => {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly")

    useEffect(() => {
        setBillingPeriod(props.billingPeriod)
    }, [props.billingPeriod])

    useEffect(() => {
        props.onChange(billingPeriod)
    }, [billingPeriod])

    const _handleToggleBillingPeriod = () => {
        if (billingPeriod === "monthly") {
            setBillingPeriod("annually")
        } else {
            setBillingPeriod("monthly")
        }
    }

    return (
        <>
            <button
                type="button"
                aria-pressed={billingPeriod === "monthly" ? true : false}
                data-state={billingPeriod === "monthly" ? "on" : "off"}
                className={`${props.className ? props.className : 'typography-p6-medium inline-flex flex-row gap-2px border rounded-12px border-stroke-light-secondary relative h-[46px] bg-white p-[2px]'}`}
                onClick={() => _handleToggleBillingPeriod()}
            >
                <div className={`px-16px py-[10px] z-10 ease-in-out transition-colors ${billingPeriod === 'annually' ? btnActive : btnInactive}`}>
                    Bill annually
                </div>
                <div className={`px-16px py-[10px] z-10 ease-in-out transition-colors ${billingPeriod === 'monthly' ? btnActive : btnInactive}`}>
                    Bill monthly
                </div>
                <div className={`bg-greyscale-light-13 h-[40px] z-0 top-[2px] left-[2px] absolute rounded-[9.5px] w-[111px] transition-transform ${billingPeriod === 'monthly' ? 'translate-x-[107px]' : 'translate-x-0'} ease-in-out`} />
            </button>
        </>
    );
}