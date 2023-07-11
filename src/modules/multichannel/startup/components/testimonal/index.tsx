// React
import { FC } from "react";

export const CrmStartupTestimonial: FC = () => {

    return (
        <>
            <section className="bg-background-light-tertiary py-[60px] px-24px">
                <div className="w-full bg-background-light-primary rounded-[20px] p-24px tablet:p-40px tablet:pt-[38px] border border-greyscale-light-05 max-w-[1156px] mx-auto">
                    <div className="flex flex-col gap-[28px] items-start tablet:hidden">
                       
                        <div className="flex flex-col gap-20px">
                        <p className="typography-p4-medium tablet:typography-p1-medium text-[#9098A0]">
                                “Best Value for Lead Scrapping tool in the market right now!{" "}
                                <strong className="font-medium text-typography-light-secondary">
                                I love using Artemis as the lead scrapping tool using Linkedin.
                                </strong>{" "}
                                It saves me tons of time to verify and find email addresses.{" "}
                                <strong className="font-medium text-typography-light-secondary">
                                It is highly recommended!
                                </strong>
                                ”
                            </p>
                            <div className="flex flex-row items-center gap-[18px]">
                                <img
                                    src="https://images.g2crowd.com/uploads/avatar/image/1882833/thumb_square_264d9fe56dedf992467a54a12e9e7e0d.jpeg"
                                    width={50}
                                    height={50}
                                    alt="Taimur Abdaal"
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="typography-p6-medium text-typography-light-secondary">
                                    Kazuki O.
                                    </p>
                                    <p className="typography-p6-medium text-typography-light-quaternary">
                                    Co-Founder
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden tablet:flex flex-row gap-12px justify-between">
                       
                        <div className="flex flex-col gap-[30px] tablet:gap-40px max-w-[644px]">
                            <p className="typography-p4-medium tablet:typography-p1-medium text-[#9098A0]">
                                “Best Value for Lead Scrapping tool in the market right now!{" "}
                                <strong className="font-medium text-typography-light-secondary">
                                I love using Artemis as the lead scrapping tool using Linkedin.
                                </strong>{" "}
                                It saves me tons of time to verify and find email addresses.{" "}
                                <strong className="font-medium text-typography-light-secondary">
                                It is highly recommended!
                                </strong>
                                ”
                            </p>
                            <div className="flex flex-row items-center gap-16px">
                                <img
                                    src="https://images.g2crowd.com/uploads/avatar/image/1882833/thumb_square_264d9fe56dedf992467a54a12e9e7e0d.jpeg"
                                    width={50}
                                    height={50}
                                    alt="Taimur Abdaal"
                                    className="rounded-[16px] tablet:w-[68px] tablet:h-[68px]"
                                />
                                <div>
                                    <p className="typography-p5-strong text-typography-light-secondary">
                                    Kazuki O.
                                    </p>
                                    <p className="typography-p5-medium text-typography-light-quaternary">
                                    Co-Founder
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}