// React
import { FC, useState } from "react"


export const Testimonials: FC = () => {
    const [showAll, setShowAll] = useState(false)

    return (
        <>
            <section className="bg-background-dark-tertiary flex items-center justify-center pt-[60px] tablet:pt-[120px] pb-[60px] tablet:pb-[90px] relative">
                <div className="max-w-full tablet:max-w-[1156px] px-24px tablet:px-8px flex items-stretch flex-1 z-[1]">
                    <div className="flex flex-col flex-1 w-full">
                        <div className="typography-h4-strong tablet:typography-h2-strong pb-[16px] text-typography-dark-quaternary">
                            Loved by <span className="text-typography-dark-primary">Entrepreneurs.</span>
                        </div>
                        <div className="typography-p4-medium tablet:typography-p2-medium text-typography-dark-secondary pb-[60px] tablet:pb-[80px]">
                        With an average rating of 4.9 / 5, useArtemis is the favorite tools of entrepreneurs 
                            <br className="hidden tablet:inline" /> that need to scale their lead
                            aquisition.
                            <div className="pt-[32px]">
                                <a
                                    className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-12px gap-8px typography-p5-medium text-buttonNew-secondaryOnDark hover:text-white enabled:active:text-white focus:text-white disabled:text-buttonNew-secondaryOnDark-disabled enabled:active:bg-buttonNew-secondaryOnDark-active focus:bg-buttonNew-secondaryOnDark-active border-[1px] border-buttonNew-secondaryOnDark hover:border-white enabled:active:border-white focus:border-white disabled:border-buttonNew-secondaryOnDark-disabled disabled shadow-none focus:shadow-buttonNew-secondaryOnDark-focus disabled:opacity-25"
                                    target="blank"
                                    href="https://www.g2.com/products/useartemis/reviews"
                                >
                                    <span className="z-1 relative">More reviews on G2</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className={`tablet:h-[630px] overflow-hidden w-[calc(100%+28px)] tablet:max-w-[1156px] relative px-[14px] mx-[-14px] py-[14px] my-[-14px] ${showAll ? null : "h-[400px] phablet:h-[500px]"}`}>
                                <div
                                    className={`absolute inset-0 pointer-events-none ${showAll ? "max-tablet:hidden" : null}`}
                                    style={{
                                        background:
                                            "linear-gradient(transparent 0%, transparent 70%, #232529 90%, #232529 100%)"
                                    }}
                                />
                                <div className={`flex flex-col phablet:flex-wrap phablet:flex-row tablet:flex-col phablet gap-24px tablet:h-[836px] w-full ${showAll ? null : "h-[400px] phablet:h-[500px]"}`}>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://images.g2crowd.com/uploads/avatar/image/1882833/thumb_square_264d9fe56dedf992467a54a12e9e7e0d.jpeg"
                                                alt="Sebastiaan Debrouwere"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">

                                                    Kazuki O.
                                                </p>
                                                <p className="typography-c1-medium text-[#505967]">
                                                    Co-Founder
                                                </p>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={25}
                                                height={24}
                                                viewBox="0 0 60 60"
                                                fill="none"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                                                <circle cx="30" cy="30" r="30" fill="currentColor" />
                                                <path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff" />
                                                <polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff" />
                                                <path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff" />
                                            </svg>

                                            {/*#ff492c */}

                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                            &quot;Best Value for Lead Scrapping tool in the market right now!
                                                I love using Artemis as the lead scrapping tool using Linkedin. It saves me tons of time to verify and find email addresses. It is highly recommended!&quot;
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                10:01 PM · Apr 7, 2022
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://images.g2crowd.com/uploads/avatar/image/1829349/thumb_square_ace2ae5f10c35a9b4d1d9e071f0c3d02.jpeg"
                                                alt="Krishna"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">
                                                    Massimo M.</p>
                                                <p className="typography-c1-medium text-[#505967]">Startup Mentor</p>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={25}
                                                height={24}
                                                viewBox="0 0 60 60"
                                                fill="none"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                                                <circle cx="30" cy="30" r="30" fill="currentColor" />
                                                <path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff" />
                                                <polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff" />
                                                <path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                            &quot;Best software for b2b lead
                                                I am happy to leave a 5-star review for useArtemis on G2! As a sales professional, I have struggled in the past with finding accurate B2B contact information for my outreach efforts. But since I started using useArtemis, my search for lead generation has ended.&quot;
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                1:03 PM · Mar 3, 2023
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://images.g2crowd.com/uploads/avatar/image/1783350/thumb_square_2e69ad475d5b60612006af1d4b93ff6e.jpeg"
                                                alt="Eddy J. Prado 🔥"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">
                                                    Jefferson T.
                                                </p>
                                                <p className="typography-c1-medium text-[#505967]">
                                                    Acquisitions & Development
                                                </p>
                                            </div>

                                            <svg xmlns="http://www.w3.org/2000/svg" width={25}
                                                height={24}
                                                viewBox="0 0 60 60"
                                                fill="none"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                                                <circle cx="30" cy="30" r="30" fill="currentColor" />
                                                <path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff" />
                                                <polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff" />
                                                <path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff" />
                                            </svg>

                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                            &quot;Fantastic Lead Generation Tool That Is Continually Improving. Highly Recommend!
                                                What I like best about Artemis is its ease of use. The UX is intuitive and is continually improving. Knowing the development team continues to improve the product is a great comfort.&quot;
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                9:46 PM · Jul 25, 2022
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://cdn0.capterra-static.com/profile-images/linkedin/5894576a9029a834df43d65e727ba5d1.jpeg"
                                                alt="Alon"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">Ian</p>
                                                <p className="typography-c1-medium text-[#505967]">Marketing (Australie)</p>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={55}

                                                height={24} viewBox="0 0 1500 344.983"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                                                <path fill="currentColor" d="M8.905 127.38l135.181.027 82.199.014V45.987z" /><path fill="currentColor" d="M226.285 45.987V333.49L328.95 7.534z" /><path fill="currentColor" d="M226.285 127.421l-82.199-.014 82.199 206.083z" /><path fill="currentColor" d="M8.905 127.38l156.26 52.905-21.079-52.878z" /><g fill="currentColor"><path d="M506.884 257.809c-1.192 1.192-3.178 2.679-5.955 4.465-2.782 1.788-6.402 3.574-10.868 5.362-4.466 1.784-9.928 3.32-16.376 4.615-6.454 1.287-13.845 1.934-22.182 1.934-16.08 0-29.976-2.582-41.686-7.74-11.715-5.158-21.391-12.359-29.031-21.587-7.643-9.231-13.249-20.146-16.822-32.754-3.573-12.604-5.359-26.448-5.359-41.536 0-15.082 1.935-29.03 5.806-41.833 3.87-12.804 9.676-23.866 17.417-33.2 7.742-9.327 17.419-16.623 29.032-21.885 11.612-5.256 25.257-7.89 40.94-7.89 7.742 0 14.739.697 20.992 2.084 6.253 1.39 11.71 3.029 16.377 4.913 4.661 1.889 8.533 3.87 11.612 5.955 3.075 2.084 5.407 3.825 6.998 5.21 1.786 1.592 3.322 3.476 4.615 5.657 1.289 2.187 1.935 4.569 1.935 7.147 0 3.973-1.489 7.941-4.466 11.91-2.977 3.973-6.253 7.645-9.827 11.017-2.382-2.382-5.061-4.81-8.038-7.294-2.978-2.481-6.304-4.662-9.975-6.551-3.675-1.884-7.844-3.471-12.506-4.764-4.666-1.289-9.876-1.936-15.631-1.936-10.124 0-18.609 2.038-25.458 6.104-6.848 4.071-12.357 9.379-16.525 15.93-4.168 6.551-7.146 14.045-8.933 22.48-1.786 8.439-2.679 17.023-2.679 25.756 0 9.332.893 18.264 2.679 26.796 1.786 8.536 4.861 16.081 9.231 22.629 4.363 6.55 10.072 11.812 17.12 15.78 7.043 3.974 15.827 5.956 26.351 5.956 5.554 0 10.668-.693 15.334-2.083 4.661-1.388 8.783-3.077 12.356-5.065 3.573-1.98 6.7-4.063 9.379-6.249 2.68-2.184 4.913-4.067 6.7-5.659 1.191 1.392 2.577 3.081 4.168 5.063a71.7307 71.7307 0 0 1 4.466 6.253c1.387 2.186 2.578 4.368 3.573 6.548.991 2.188 1.488 4.17 1.488 5.954 0 2.584-.497 4.766-1.488 6.552-.996 1.787-2.583 3.774-4.764 5.956zM660.327 234.973c0 15.777 2.293 27.26 6.889 34.449-3.594 1.395-6.94 2.395-10.035 2.994-3.098.6-6.341.898-9.735.898-7.188 0-12.632-1.398-16.324-4.193-3.697-2.793-6.043-6.787-7.039-11.982-4.396 4.598-10.186 8.49-17.374 11.686-7.189 3.189-15.979 4.791-26.36 4.791-5.392 0-10.783-.748-16.175-2.236-5.393-1.5-10.287-3.934-14.679-7.314-4.395-3.387-7.988-7.916-10.783-13.59-2.799-5.674-4.194-12.59-4.194-20.75 0-10.152 2.444-18.416 7.339-24.783 4.892-6.373 11.032-11.398 18.423-15.082 7.386-3.68 15.375-6.213 23.964-7.61 8.584-1.395 16.475-2.288 23.663-2.691 2.398-.197 4.742-.3 7.04-.3h6.44v-5.452c0-7.676-2.05-13.129-6.141-16.358-4.096-3.23-10.737-4.849-19.92-4.849-8.588 0-16.227 1.399-22.915 4.193-6.693 2.799-13.232 5.991-19.62 9.586-2.799-3.394-5.047-7.137-6.74-11.233-1.698-4.09-2.546-7.137-2.546-9.136 0-2.794 1.544-5.49 4.643-8.088 3.094-2.592 7.339-4.942 12.731-7.039 5.393-2.097 11.58-3.791 18.573-5.092 6.987-1.297 14.377-1.947 22.166-1.947 10.783 0 19.919 1.1 27.407 3.295 7.489 2.2 13.579 5.593 18.273 10.184 4.69 4.597 8.036 10.335 10.034 17.224 1.994 6.89 2.996 14.931 2.996 24.113v56.312zm-38.343-34.746h-4.192c-1.401 0-2.8.104-4.194.301-4.995.402-9.938 1-14.827 1.795-4.896.801-9.24 2.199-13.03 4.195-3.796 1.998-6.89 4.596-9.286 7.787-2.397 3.197-3.595 7.293-3.595 12.283 0 5.592 1.596 10.332 4.792 14.227 3.192 3.895 8.584 5.842 16.176 5.842 3.791 0 7.387-.496 10.784-1.5 3.393-.994 6.388-2.293 8.986-3.891 2.593-1.598 4.643-3.344 6.141-5.244 1.497-1.895 2.246-3.641 2.246-5.24v-30.555zM734.909 141.217c3.183-3.791 8.163-7.638 14.93-11.533 6.768-3.894 15.328-5.841 25.681-5.841 7.368 0 14.384 1.249 21.055 3.744 6.664 2.499 12.589 6.544 17.765 12.132 5.177 5.593 9.307 12.983 12.395 22.166 3.085 9.188 4.629 20.473 4.629 33.848 0 15.576-1.794 28.41-5.376 38.492-3.586 10.088-8.211 18.076-13.882 23.965-5.674 5.891-11.998 10.035-18.962 12.43-6.969 2.396-13.938 3.596-20.903 3.596-5.774 0-10.803-.65-15.079-1.947-4.283-1.301-7.915-2.744-10.901-4.344-2.986-1.596-5.274-3.191-6.865-4.793-1.592-1.596-2.589-2.697-2.986-3.297v73.635h-40.739V128.036c1.002-.196 2.21-.397 3.622-.598 1.209-.196 2.617-.347 4.227-.45 1.609-.098 3.521-.149 5.733-.149 6.637 0 12.272 1.1 16.9 3.295 4.627 2.2 7.549 5.892 8.756 11.083zm53.919 55.414c0-5.99-.497-11.578-1.489-16.773-.992-5.19-2.63-9.684-4.914-13.479-2.284-3.792-5.365-6.74-9.235-8.838-3.876-2.096-8.588-3.143-14.145-3.143-8.339 0-14.147 1.6-17.425 4.791-3.275 3.197-4.913 6.694-4.913 10.485v63.504c1.586 1.6 4.412 3.494 8.484 5.691 4.073 2.199 8.785 3.293 14.149 3.293 10.128 0 17.574-3.99 22.34-11.98 4.766-7.986 7.148-19.172 7.148-33.551zM862.806 248.155c-1.4-3.992-2.298-8.188-2.696-12.582-.402-4.391-.599-8.783-.599-13.182V83.404c1.395-.196 2.893-.397 4.493-.599 1.393-.196 2.892-.345 4.492-.449 1.597-.098 3.193-.149 4.792-.149 3.193 0 6.391.3 9.587.898 3.191.6 6.088 1.798 8.688 3.594 2.593 1.797 4.689 4.246 6.289 7.339 1.597 3.098 2.396 7.143 2.396 12.131v21.267h41.938v30.256h-41.938v63.877c0 13.93 5.691 20.893 17.075 20.893 2.795 0 5.438-.447 7.938-1.348 2.495-.898 4.741-1.895 6.74-2.994 1.995-1.098 3.744-2.246 5.242-3.445 1.498-1.199 2.546-2.096 3.144-2.695 2.996 4.396 5.289 8.201 6.89 11.412 1.596 3.215 2.396 6.232 2.396 9.051 0 2.623-1.046 5.195-3.145 7.713s-5.046 4.84-8.838 6.955c-3.794 2.115-8.385 3.828-13.778 5.139-5.391 1.311-11.285 1.967-17.673 1.967-12.385 0-22.018-2.398-28.907-7.189-6.889-4.795-11.734-11.086-14.526-18.873zM1045.362 244.26c5.008 0 9.417-.547 13.228-1.648 3.805-1.094 7.211-2.443 10.218-4.041 3.004-1.596 5.612-3.344 7.817-5.242 2.203-1.896 4.206-3.643 6.014-5.244 2.401 2.994 4.905 6.842 7.512 11.531 2.604 4.697 3.908 8.539 3.908 11.533 0 4.395-2.499 8.389-7.487 11.983-4.194 3.197-10.14 5.943-17.823 8.236-7.691 2.295-16.729 3.445-27.109 3.445-9.391 0-18.625-1.197-27.708-3.594-9.088-2.395-17.178-6.59-24.263-12.582-7.092-5.988-12.834-14.025-17.226-24.111-4.393-10.084-6.589-22.812-6.589-38.193 0-12.582 1.948-23.411 5.839-32.5 3.896-9.085 9.086-16.624 15.581-22.615 6.485-5.991 13.824-10.381 22.014-13.181 8.186-2.793 16.575-4.193 25.163-4.193 11.182 0 20.667 1.751 28.455 5.242 7.79 3.496 14.126 8.19 19.022 14.079 4.89 5.891 8.434 12.631 10.633 20.219 2.194 7.591 3.295 15.576 3.295 23.963v4.193c0 1.602-.051 3.295-.15 5.092-.102 1.799-.2 3.549-.298 5.242-.104 1.701-.254 3.047-.448 4.045h-88.368c.801 10.984 4.207 20.119 10.218 27.41 6.007 7.291 15.526 10.931 28.552 10.931zm13.65-60.808c0-9.585-1.86-17.373-5.575-23.364-3.716-5.99-10.397-8.987-20.032-8.987-8.239 0-14.815 2.847-19.734 8.538-4.924 5.692-7.379 13.629-7.379 23.812h52.72zM1166.75 141.974c1.196-1.782 2.793-3.762 4.792-5.944 1.994-2.18 4.442-4.161 7.339-5.943 2.893-1.783 6.089-3.272 9.586-4.46 3.49-1.189 7.236-1.783 11.234-1.783 2.395 0 4.942.201 7.637.594 2.696.398 5.19 1.142 7.487 2.228 2.295 1.091 4.145 2.574 5.543 4.456 1.395 1.882 2.097 4.208 2.097 6.979 0 4.357-1.101 9.361-3.295 15.01-2.2 5.654-4.393 10.475-6.589 14.467-3.399-2.795-6.793-4.942-10.186-6.44-3.397-1.497-7.391-2.247-11.982-2.247-6.191 0-11.382 1.803-15.574 5.406-4.197 3.604-6.293 7.91-6.293 12.917v96.969h-40.736V128.036c.996-.196 2.194-.397 3.593-.598 1.198-.196 2.595-.347 4.194-.45 1.597-.098 3.492-.149 5.691-.149 6.389 0 11.93 1.239 16.625 3.712 4.689 2.47 7.639 6.28 8.837 11.423zM1282.573 141.974c1.198-1.782 2.794-3.762 4.793-5.944 1.994-2.18 4.442-4.161 7.339-5.943 2.893-1.783 6.088-3.272 9.585-4.46 3.492-1.189 7.236-1.783 11.233-1.783 2.395 0 4.941.201 7.637.594 2.695.398 5.191 1.142 7.489 2.228 2.295 1.091 4.141 2.574 5.544 4.456 1.394 1.882 2.096 4.208 2.096 6.979 0 4.357-1.102 9.361-3.295 15.01-2.202 5.654-4.396 10.475-6.591 14.467-3.396-2.795-6.793-4.942-10.185-6.44-3.396-1.497-7.39-2.247-11.981-2.247-6.191 0-11.383 1.803-15.576 5.406-4.194 3.604-6.29 7.91-6.29 12.917v96.969h-40.738V128.036c.997-.196 2.195-.397 3.595-.598 1.198-.196 2.595-.347 4.193-.45 1.596-.098 3.491-.149 5.69-.149 6.391 0 11.932 1.239 16.624 3.712 4.69 2.47 7.638 6.28 8.838 11.423zM1476.979 234.973c0 15.777 2.295 27.26 6.89 34.449-3.595 1.395-6.941 2.395-10.034 2.994-3.098.6-6.342.898-9.735.898-7.191 0-12.633-1.398-16.325-4.193-3.699-2.793-6.043-6.787-7.041-11.982-4.393 4.598-10.184 8.49-17.373 11.686-7.188 3.189-15.979 4.791-26.359 4.791-5.393 0-10.783-.748-16.177-2.236-5.391-1.5-10.288-3.934-14.677-7.314-4.395-3.387-7.989-7.916-10.784-13.59-2.798-5.674-4.192-12.59-4.192-20.75 0-10.152 2.441-18.416 7.339-24.783 4.89-6.373 11.032-11.398 18.422-15.082 7.385-3.68 15.373-6.213 23.964-7.61 8.582-1.395 16.474-2.288 23.663-2.691 2.397-.197 4.741-.3 7.041-.3h6.439v-5.452c0-7.676-2.051-13.129-6.142-16.358-4.097-3.23-10.736-4.849-19.92-4.849-8.587 0-16.225 1.399-22.914 4.193-6.693 2.799-13.231 5.991-19.621 9.586-2.797-3.394-5.047-7.137-6.74-11.233-1.697-4.09-2.545-7.137-2.545-9.136 0-2.794 1.544-5.49 4.643-8.088 3.094-2.592 7.339-4.942 12.73-7.039 5.393-2.097 11.58-3.791 18.571-5.092 6.989-1.297 14.379-1.947 22.167-1.947 10.783 0 19.92 1.1 27.409 3.295 7.487 2.2 13.577 5.593 18.271 10.184 4.69 4.597 8.035 10.335 10.036 17.224 1.992 6.89 2.994 14.931 2.994 24.113v56.312zm-38.342-34.746h-4.193c-1.4 0-2.799.104-4.193.301-4.993.402-9.938 1-14.828 1.795-4.896.801-9.238 2.199-13.03 4.195-3.795 1.998-6.89 4.596-9.286 7.787-2.396 3.197-3.595 7.293-3.595 12.283 0 5.592 1.597 10.332 4.793 14.227 3.192 3.895 8.586 5.842 16.176 5.842 3.792 0 7.387-.496 10.784-1.5 3.394-.994 6.388-2.293 8.986-3.891 2.591-1.598 4.644-3.344 6.14-5.244 1.498-1.895 2.247-3.641 2.247-5.24v-30.555z" /></g></svg>

                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                            &quot;Easily can view thousands of emails to target
                                                But what really sets UseArtemis apart is its effectiveness. Since using this software, I have seen a significant increase in the number of leads I generate, and I&apos;ve been able to close more deals as a result. I love how customizable the software is, allowing me to tailor my emails to each individual recipient and increasing the likelihood of a positive response.&quot;
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                6:57 PM · Dec 1, 2022
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] max-phablet:hidden bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://images.g2crowd.com/uploads/avatar/image/20533/thumb_square_da4bff9b6cefb49d43fa8e0c9eb5f45a.jpg"
                                                alt="Jono Bacon"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">

                                                    Brandon M.
                                                </p>
                                                <p className="typography-c1-medium text-[#505967]">
                                                    Creative Strategist
                                                </p>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={25}
                                                height={24}
                                                viewBox="0 0 60 60"
                                                fill="none"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                                                <circle cx="30" cy="30" r="30" fill="currentColor" />
                                                <path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff" />
                                                <polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff" />
                                                <path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                            &quot;Target Multiple Niche Professionals & Get Hyper-Focused Results!
                                                Simplicity is essential; a user will not use any software if over-complicated. I find this to be incredibly simple to use, straight to the point, and able to focus on fine-tuning your search.&quot;
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                4:05 PM · Jan 9, 2023
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] max-phablet:hidden bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://images.g2crowd.com/uploads/avatar/image/587067/thumb_square_da626e9f8e4668f2f770b36a9ac3942c.jpeg"
                                                alt="Meltem Demirors"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">
                                                    Ankita T.
                                                </p>
                                                <p className="typography-c1-medium text-[#505967]">
                                                    Assistant Marketing Manager
                                                </p>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={25}
                                                height={24}
                                                viewBox="0 0 60 60"
                                                fill="none"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                                                <circle cx="30" cy="30" r="30" fill="currentColor" />
                                                <path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff" />
                                                <polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff" />
                                                <path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                            &quot;Good for Email Enrichment&quot;

                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                2:25 AM · Apr 21, 2022
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] max-phablet:hidden bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://media.graphassets.com/pJ9TAXxZSZqEsUuGOFPo"
                                                alt="Dimitry Gershenson"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">
                                                    Dimitry Gershenson
                                                </p>
                                                <p className="typography-c1-medium text-[#505967]">
                                                    @d_gershenson
                                                </p>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={25}
                                                height={24}
                                                viewBox="0 0 60 60"
                                                fill="none"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                                                <circle cx="30" cy="30" r="30" fill="currentColor" />
                                                <path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff" />
                                                <polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff" />
                                                <path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                                We use our CRM @attio for sales, fundraising, and recruiting.
                                                It&apos;s awesome
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                1:32 PM · Jan 4, 2023
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] max-tablet:hidden max-phablet:hidden bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://media.graphassets.com/izYVyyVTY2jBQCqkVCtj"
                                                alt="Sri"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">Sri</p>
                                                <p className="typography-c1-medium text-[#505967]">
                                                    @therealsrii
                                                </p>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={25}
                                                height={24}
                                                viewBox="0 0 60 60"
                                                fill="none"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                                                <circle cx="30" cy="30" r="30" fill="currentColor" />
                                                <path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff" />
                                                <polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff" />
                                                <path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                                I&apos;ve been using @attio to track applicants, manage my deal
                                                pipeline and manage the associated notes/tasks. The use-cases
                                                are unlimited; it truly feels like the Notion of CRM.
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                10:17 PM · Jan 3, 2023
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden w-full tablet:w-[calc(100%/3-16px)] phablet:w-[calc(50%-12px)] p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] max-tablet:hidden max-phablet:hidden bg-[#26282D] card-dark-shadow border border-transparent box-border transition-colors">
                                        <div className="flex flex-row items-center gap-[10px]">
                                            <img
                                                src="https://media.graphassets.com/VafhvNR1SnGjecn5zVNT"
                                                alt="Fabian"
                                                loading="lazy"
                                                className="rounded-full w-[34px] h-[34px]"
                                            />
                                            <div className="flex flex-col gap-[2px]">
                                                <p className="typography-c1-medium text-[#99A2AF]">Fabian</p>
                                                <p className="typography-c1-medium text-[#505967]">
                                                    @FabstheAustrian
                                                </p>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={25}
                                                height={24}
                                                viewBox="0 0 60 60"
                                                fill="none"
                                                className="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                                                <circle cx="30" cy="30" r="30" fill="currentColor" />
                                                <path d="M43,23H37.9c.1-.8.6-1.3,1.6-1.8l.9-.5c1.7-.8,2.6-1.8,2.6-3.4a3,3,0,0,0-1.1-2.4,5.1,5.1,0,0,0-2.8-.8,4.6,4.6,0,0,0-2.3.6,5.2,5.2,0,0,0-1.6,1.7l1.5,1.5a2.8,2.8,0,0,1,2.5-1.7c1,0,1.5.5,1.5,1.1s-.3,1.1-1.3,1.6l-.6.3A6.7,6.7,0,0,0,36,21.5a6.1,6.1,0,0,0-.8,3.2v.4H43Z" fill="#fff" />
                                                <polygon points="42.3 27.6 33.8 27.6 29.6 34.9 38.1 34.9 42.3 42.2 46.5 34.9 42.3 27.6" fill="#fff" />
                                                <path d="M30.3,39.8a9.8,9.8,0,0,1,0-19.6l3.4-7a18.7,18.7,0,0,0-3.4-.3,17.1,17.1,0,0,0,0,34.2,17.3,17.3,0,0,0,10.1-3.2l-3.7-6.5A9.7,9.7,0,0,1,30.3,39.8Z" fill="#fff" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[14px]">
                                            <p className="typography-p5-medium text-[#BCC3CE]">
                                                For CRM or deal flow, @attio is in a class of its own.
                                            </p>
                                            <p className="typography-c1-medium text-[#505967]">
                                                3:36 PM · Nov 8, 2022
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {!showAll && (
                                    <div className="tablet:contents flex flex-col items-center w-full absolute bottom-0 left-0">
                                        <button className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-36px py-[10px] typography-p5-medium text-buttonNew-secondaryOnDark hover:text-white enabled:active:text-white focus:text-white disabled:text-buttonNew-secondaryOnDark-disabled enabled:active:bg-buttonNew-secondaryOnDark-active focus:bg-buttonNew-secondaryOnDark-active border-[1px] border-buttonNew-secondaryOnDark hover:border-white enabled:active:border-white focus:border-white disabled:border-buttonNew-secondaryOnDark-disabled disabled shadow-none focus:shadow-buttonNew-secondaryOnDark-focus disabled:opacity-25"
                                            onClick={() => setShowAll(true)}>
                                            <span className="z-1 relative">Load more</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}