// React
import { FC, useState } from "react";

export const CoockiesPolicy: FC = () => {
    const [hidden, setHidden] = useState(false)
    return (
        <>
            <div className={`w-full fixed bottom-32px flex justify-center flex-row z-40 max-phablet:px-12px pointer-events-none ${hidden ? 'hidden' : null}`}>
                <div className="bg-white rounded-[20px] shadow-2xl phablet:shadow-lg px-16px phablet:pl-24px phablet:pr-8px py-16px phablet:py-8px flex flex-col phablet:flex-row gap-16px items-center pointer-events-auto">
                    <span>
                        We use cookies to improve your experience. You can opt out of certain
                        cookies. Find out more in our&nbsp;
                        <a
                            href="/legal/privacy"
                            target="_blank"
                            className=" hover:text-greyscale-light-08 underline"
                        >
                            privacy policy
                        </a>
                        .
                    </span>
                    <div className="flex flex-col max-phablet:items-stretch max-phablet:w-full phablet:flex-row gap-8px">
                        <button className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-primary hover:text-buttonNew-primary-hover active:text-buttonNew-primary-active disabled:text-buttonNew-primary-disabled bg-buttonNew-primary hover:bg-buttonNew-primary active:bg-buttonNew-primary-active focus:bg-buttonNew-primary-active disabled:bg-buttonNew-primary-disabled border-[1px] border-buttonNew-primary hover:border-buttonNew-primary-hover disabled:border-buttonNew-primary-disabled shadow-buttonNew-primary hover:shadow-buttonNew-primary-hover active:shadow-none focus:shadow-buttonNew-primary-focus disabled:shadow-buttonNew-primary-disabled before:block before:content-[''] relative before:w-full before:h-full before:absolute overflow-hidden before:bg-button-gradient-primary before:z-[0] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                            onClick={() => setHidden(true)}>
                            <span className="z-1 relative">Accept</span>
                        </button>
                        <button className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-[7px] typography-p5-medium text-buttonNew-secondary hover:text-buttonNew-secondary-hover active:text-buttonNew-secondary-active disabled:text-buttonNew-secondary-disabled active:bg-white focus:bg-white border-[1px] border-buttonNew-secondary hover:border-buttonNew-secondary-hover active:border-buttonNew-secondary-active focus:border-buttonNew-secondary-active disabled:border-buttonNew-secondary-disabled shadow-none focus:shadow-buttonNew-secondary-focus"
                            onClick={() => setHidden(true)}>
                            <span className="z-1 relative">Reject</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}