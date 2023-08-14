// React
import { FC } from "react"
import Salesnav from 'assets/images/salesnavexport.png'
import Link from "next/link"

export const CrmStartupHero: FC = () => {

    return (
        <>
            <section className="py-[60px] desktop:pt-[86px] tablet:pb-[190px] bg-background-light-secondary relative">
                <div className="max-w-[540px] tablet:max-w-[1440px] mx-auto">
                    <div className="contents isolate tablet:flex  desktop:flex-row items-center justify-between tablet:pl-[118px] gap-40px desktop:gap-[79px]">
                        <header className="relative z-10 px-24px desktop:pt-[115px] tablet:max-desktop:pr-[118px] max-desktop:w-full flex flex-col gap-32px max-tablet:items-center">
                            <div className="flex flex-col gap-12px tablet:gap-16px desktop:max-w-[590px]">
                                <div className="gap-16px flex flex-col items-center tablet:items-start">
                                   
                                    <h1 className="typography-h3-strong tablet:typography-h1-strong text-center tablet:text-left text-typography-light-primary phablet:max-desktop:max-w-[820px] lineheight">
                                    The Smartest way to <span className="brandcolor">Scrape LinkedIn</span>
                                    </h1>
                                </div>
                                <p className="typography-p4-medium tablet:typography-p2-medium text-typography-light-tertiary text-center tablet:text-left max-tablet:px-[14px]">
                                Extract & Enrich clean data from LinkedIn and LinkedIn Sales Navigator with our LinkedIn Scraper.
                                </p>
                            </div>
                            <div className="flex flex-row items-center tablet:items-start gap-12px tablet:gap-20px max-tablet:px-24px w-full max-w-[700px] tablet:self-start">
                                <Link
                                    href="/pricing"
                                    className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-12px gap-8px typography-p5-medium text-buttonNew-primary hover:text-buttonNew-primary-hover active:text-buttonNew-primary-active disabled:text-buttonNew-primary-disabled bg-buttonNew-primary hover:bg-buttonNew-primary active:bg-buttonNew-primary-active focus:bg-buttonNew-primary-active disabled:bg-buttonNew-primary-disabled border-[1px] border-buttonNew-primary hover:border-buttonNew-primary-hover disabled:border-buttonNew-primary-disabled shadow-buttonNew-primary hover:shadow-buttonNew-primary-hover active:shadow-none focus:shadow-buttonNew-primary-focus disabled:shadow-buttonNew-primary-disabled before:block before:content-[''] relative before:w-full before:h-full before:absolute overflow-hidden before:bg-button-gradient-primary before:z-[0] before:opacity-0 hover:before:opacity-100 before:transition-opacity max-tablet:flex-1 text-center"
                                >
                                    <span className="z-1 relative">14-day free trial</span>
                                </Link>
                                <button
                                id="my_custom_link"
                                    className="rounded-12px inline-flex flex-row items-center justify-center transition-all preserve-3d px-16px py-12px gap-8px typography-p5-medium text-buttonNew-secondary hover:text-buttonNew-secondary-hover active:text-buttonNew-secondary-active disabled:text-buttonNew-secondary-disabled active:bg-white focus:bg-white border-[1px] border-buttonNew-secondary hover:border-buttonNew-secondary-hover active:border-buttonNew-secondary-active focus:border-buttonNew-secondary-active disabled:border-buttonNew-secondary-disabled shadow-none focus:shadow-buttonNew-secondary-focus max-phablet:flex-1 text-center"
                                    type="button"
                                    aria-haspopup="dialog"
                                    aria-expanded="false"
                                    aria-controls="radix-:Rkhhp:"
                                    data-state="closed"
                                >
                                    <span className="z-1 relative">Talk to sales</span>
                                </button>
                            </div>
                        </header>

                       
                        
                        <picture className="relative z-10 w-auto max-desktop:max-w-[80vw] max-desktop:max-h-full desktop:w-[590px] desktop:h-[437px] hidden tablet:block desktop:mr-[60px] flex-grow-none ">
                            <source
                                srcSet="/assets/salesnavexport2.png"
                                media="(min-width:992px)"
                                type="image/webp"
                                width={1331}
                                height={1222}
                            />
                           
                            <img
                                src=""
                                alt="Attio's product, showing an activity view of a user's contact. It includes a recent email from the contact, a status change in the Deal Flow pipeline, and an upcoming calendar meeting."
                                className="max-h-[500px] max-phablet:hidden w-auto salesnav"
                            />
                        </picture>

                        <div className="hidden tablet:block absolute top-0 bottom-0 right-0 z-0">
                            <svg
                                width={1427}
                                height={828}
                                className="max-w-full"
                                viewBox="0 0 1427 828"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1600.17 237.092V159.128C1600.17 156.888 1600.17 155.768 1600.6 154.912C1600.99 154.159 1601.6 153.547 1602.35 153.164C1603.21 152.728 1604.33 152.728 1606.57 152.728H1678.13C1680.37 152.728 1681.49 152.728 1682.35 153.164C1683.1 153.547 1683.71 154.159 1684.1 154.912C1684.53 155.768 1684.53 156.888 1684.53 159.128V237.092M1600.17 237.092H1684.53M1600.17 237.092V321.456M1684.53 237.092V321.456M1684.53 237.092H1762.5C1764.74 237.092 1765.86 237.092 1766.71 237.528C1767.46 237.911 1768.08 238.523 1768.46 239.276C1768.9 240.132 1768.9 241.252 1768.9 243.492V315.056C1768.9 317.296 1768.9 318.416 1768.46 319.272C1768.08 320.024 1767.46 320.636 1766.71 321.02C1765.86 321.456 1764.74 321.456 1762.5 321.456H1684.53M1684.53 490.184H1600.17M1684.53 490.184V574.548M1684.53 490.184H1762.5C1764.74 490.184 1765.86 490.184 1766.71 490.62C1767.46 491.003 1768.08 491.615 1768.46 492.368C1768.9 493.223 1768.9 494.343 1768.9 496.584V568.148C1768.9 570.388 1768.9 571.508 1768.46 572.364C1768.08 573.116 1767.46 573.728 1766.71 574.112C1765.86 574.548 1764.74 574.548 1762.5 574.548H1684.53M1600.17 490.184V574.548M1600.17 490.184H1515.8M1600.17 490.184V405.82M1600.17 574.548H1684.53M1600.17 574.548V658.912M1600.17 574.548H1515.8M1684.53 574.548V652.512C1684.53 654.752 1684.53 655.872 1684.1 656.728C1683.71 657.48 1683.1 658.092 1682.35 658.476C1681.49 658.912 1680.37 658.912 1678.13 658.912H1600.17M1178.35 490.184H1093.99M1178.35 490.184V574.548M1178.35 490.184H1262.71M1093.99 490.184V574.548M1093.99 490.184H1009.62M1093.99 490.184V405.82M1093.99 574.548H1178.35M1093.99 574.548V658.912M1093.99 574.548H1009.62M1178.35 574.548V658.912M1178.35 574.548H1262.71M1431.44 152.728H1353.48C1351.24 152.728 1350.12 152.728 1349.26 153.164C1348.51 153.547 1347.9 154.159 1347.51 154.912C1347.08 155.768 1347.08 156.888 1347.08 159.128V237.092M1431.44 152.728V237.092M1431.44 152.728V68.364M1431.44 152.728H1509.4C1511.64 152.728 1512.76 152.728 1513.62 152.292C1514.37 151.908 1514.98 151.297 1515.37 150.544C1515.8 149.688 1515.8 148.568 1515.8 146.328V74.7639C1515.8 72.5237 1515.8 71.4036 1515.37 70.548C1514.98 69.7953 1514.37 69.1834 1513.62 68.7999C1512.76 68.364 1511.64 68.364 1509.4 68.364H1431.44M1347.08 237.092H1431.44M1347.08 237.092V321.456M1431.44 237.092V321.456M1431.44 237.092H1509.4C1511.64 237.092 1512.76 237.092 1513.62 237.528C1514.37 237.911 1514.98 238.523 1515.37 239.276C1515.8 240.132 1515.8 241.252 1515.8 243.492V321.456M1431.44 68.364H1353.48C1351.24 68.364 1350.12 68.364 1349.26 67.928C1348.51 67.5445 1347.9 66.9326 1347.51 66.1799C1347.08 65.3243 1347.08 64.2042 1347.08 61.964V-9.6C1347.08 -11.8402 1347.08 -12.9603 1347.51 -13.816C1347.9 -14.5686 1348.51 -15.1805 1349.26 -15.564C1350.12 -16 1351.24 -16 1353.48 -16H1425.04C1427.28 -16 1428.4 -16 1429.26 -15.564C1430.01 -15.1805 1430.62 -14.5686 1431 -13.816C1431.44 -12.9603 1431.44 -11.8402 1431.44 -9.6V68.364ZM1684.53 321.456H1600.17M1684.53 321.456V399.42C1684.53 401.66 1684.53 402.78 1684.1 403.636C1683.71 404.388 1683.1 405 1682.35 405.384C1681.49 405.82 1680.37 405.82 1678.13 405.82H1600.17M1600.17 321.456V405.82M1600.17 321.456H1515.8M1600.17 405.82H1515.8M1178.35 321.456H1100.39C1098.15 321.456 1097.03 321.456 1096.17 321.892C1095.42 322.275 1094.81 322.887 1094.42 323.64C1093.99 324.495 1093.99 325.616 1093.99 327.856V405.82M1178.35 321.456V405.82M1178.35 321.456H1262.71M1178.35 321.456V243.492C1178.35 241.252 1178.35 240.132 1178.78 239.276C1179.17 238.523 1179.78 237.911 1180.53 237.528C1181.39 237.092 1182.51 237.092 1184.75 237.092H1256.31C1258.55 237.092 1259.67 237.092 1260.53 237.528C1261.28 237.911 1261.89 238.523 1262.28 239.276C1262.71 240.132 1262.71 241.252 1262.71 243.492V321.456M1093.99 405.82H1178.35M1093.99 405.82H1016.02C1013.78 405.82 1012.66 405.82 1011.81 406.256C1011.06 406.639 1010.44 407.251 1010.06 408.004C1009.62 408.859 1009.62 409.98 1009.62 412.22V490.184M1178.35 405.82H1262.71M1431.44 321.456H1347.08M1431.44 321.456V405.82M1431.44 321.456H1515.8M1347.08 321.456V405.82M1347.08 321.456H1262.71M1347.08 405.82H1431.44M1347.08 405.82H1262.71M1347.08 405.82V490.184M1431.44 405.82H1515.8M1431.44 405.82V490.184M1431.44 658.912H1347.08M1431.44 658.912V743.276M1431.44 658.912V574.548M1431.44 658.912H1515.8M1347.08 658.912V743.276M1347.08 658.912V574.548M1347.08 658.912H1262.71M1347.08 743.276H1431.44M1347.08 743.276V827.639M1347.08 743.276H1262.71M1431.44 743.276V821.239C1431.44 823.48 1431.44 824.6 1431 825.455C1430.62 826.208 1430.01 826.82 1429.26 827.203C1428.4 827.639 1427.28 827.639 1425.04 827.639H1347.08M1431.44 743.276H1509.4C1511.64 743.276 1512.76 743.276 1513.62 742.84C1514.37 742.456 1514.98 741.844 1515.37 741.092C1515.8 740.236 1515.8 739.116 1515.8 736.876V658.912M1600.17 658.912H1515.8M1093.99 658.912H1178.35M1093.99 658.912H1009.62M1178.35 658.912H1262.71M1178.35 658.912V736.876C1178.35 739.116 1178.35 740.236 1178.78 741.092C1179.17 741.844 1179.78 742.456 1180.53 742.84C1181.39 743.276 1182.51 743.276 1184.75 743.276H1262.71M1431.44 574.548H1347.08M1431.44 574.548V490.184M1431.44 574.548H1515.8M1347.08 574.548H1262.71M1347.08 574.548V490.184M1347.08 827.639H1269.11C1266.87 827.639 1265.75 827.639 1264.9 827.203C1264.14 826.82 1263.53 826.208 1263.15 825.455C1262.71 824.6 1262.71 823.48 1262.71 821.239V743.276M1515.8 490.184V574.548M1515.8 490.184V405.82M1515.8 490.184H1431.44M1515.8 574.548V658.912M1009.62 490.184V574.548M1009.62 490.184H925.261M1009.62 574.548V658.912M1009.62 574.548H925.261M1009.62 237.092V159.128C1009.62 156.888 1009.62 155.768 1010.06 154.912C1010.44 154.159 1011.06 153.547 1011.81 153.164C1012.66 152.728 1013.78 152.728 1016.02 152.728H1087.59C1089.83 152.728 1090.95 152.728 1091.8 153.164C1092.56 153.547 1093.17 154.159 1093.55 154.912C1093.99 155.768 1093.99 156.888 1093.99 159.128V230.692C1093.99 232.932 1093.99 234.052 1093.55 234.908C1093.17 235.66 1092.56 236.272 1091.8 236.656C1090.95 237.092 1089.83 237.092 1087.59 237.092H1009.62ZM1009.62 237.092H931.661C929.42 237.092 928.3 237.092 927.445 237.528C926.692 237.911 926.08 238.523 925.697 239.276C925.261 240.132 925.261 241.252 925.261 243.492V315.056C925.261 317.296 925.261 318.416 925.697 319.272C926.08 320.024 926.692 320.636 927.445 321.02C928.3 321.456 929.42 321.456 931.661 321.456H1003.22C1005.46 321.456 1006.58 321.456 1007.44 321.02C1008.19 320.636 1008.81 320.024 1009.19 319.272C1009.62 318.416 1009.62 317.296 1009.62 315.056V237.092ZM1347.08 490.184H1262.71M1262.71 490.184V574.548M1262.71 490.184V405.82M1262.71 574.548V658.912M1515.8 321.456V405.82M1262.71 321.456V405.82M1262.71 658.912V743.276M1009.62 658.912H931.661C929.42 658.912 928.3 658.912 927.445 659.348C926.692 659.731 926.08 660.343 925.697 661.096C925.261 661.951 925.261 663.071 925.261 665.312V736.876C925.261 739.116 925.261 740.236 925.697 741.092C926.08 741.844 926.692 742.456 927.445 742.84C928.3 743.276 929.42 743.276 931.661 743.276H1003.22C1005.46 743.276 1006.58 743.276 1007.44 742.84C1008.19 742.456 1008.81 741.844 1009.19 741.092C1009.62 740.236 1009.62 739.116 1009.62 736.876V658.912ZM925.261 490.184V574.548M925.261 490.184H820.898M925.261 574.548H820.898M736.534 490.184H658.569C656.328 490.184 655.208 490.184 654.353 490.62C653.6 491.003 652.988 491.615 652.605 492.368C652.169 493.223 652.169 494.343 652.169 496.584V574.548M736.534 490.184V574.548M736.534 490.184V412.22C736.534 409.98 736.534 408.859 736.97 408.004C737.353 407.251 737.965 406.639 738.718 406.256C739.573 405.82 740.693 405.82 742.934 405.82H814.498C816.738 405.82 817.858 405.82 818.714 406.256C819.466 406.639 820.078 407.251 820.462 408.004C820.898 408.859 820.898 409.98 820.898 412.22V490.184M736.534 490.184H820.898M652.169 574.548H736.534M652.169 574.548V652.512C652.169 654.752 652.169 655.872 651.733 656.728C651.349 657.48 650.737 658.092 649.985 658.476C649.129 658.912 648.009 658.912 645.769 658.912H574.204C571.964 658.912 570.844 658.912 569.988 658.476C569.235 658.092 568.623 657.48 568.24 656.728C567.804 655.872 567.804 654.752 567.804 652.512V580.948C567.804 578.707 567.804 577.587 568.24 576.732C568.623 575.979 569.235 575.367 569.988 574.984C570.844 574.548 571.964 574.548 574.204 574.548H652.169ZM736.534 574.548V652.512C736.534 654.752 736.534 655.872 736.97 656.728C737.353 657.48 737.965 658.092 738.718 658.476C739.573 658.912 740.693 658.912 742.934 658.912H814.498C816.738 658.912 817.858 658.912 818.714 658.476C819.466 658.092 820.078 657.48 820.462 656.728C820.898 655.872 820.898 654.752 820.898 652.512V574.548M736.534 574.548H820.898M820.898 490.184V574.548M594.205 68.3639H665.769C668.009 68.3639 669.129 68.3639 669.985 68.7999C670.737 69.1834 671.349 69.7953 671.733 70.548C672.169 71.4036 672.169 72.5237 672.169 74.7639V146.328C672.169 148.568 672.169 149.688 671.733 150.544C671.349 151.297 670.737 151.908 669.985 152.292C669.129 152.728 668.009 152.728 665.769 152.728H594.205C591.965 152.728 590.844 152.728 589.989 152.292C589.236 151.908 588.624 151.297 588.241 150.544C587.805 149.688 587.805 148.568 587.805 146.328V74.7639C587.805 72.5237 587.805 71.4036 588.241 70.548C588.624 69.7953 589.236 69.1834 589.989 68.7999C590.844 68.3639 591.965 68.3639 594.205 68.3639ZM85.3639 665.312V736.876C85.3639 739.116 85.3639 740.236 84.9279 741.092C84.5445 741.844 83.9325 742.456 83.1799 742.84C82.3242 743.276 81.2041 743.276 78.9639 743.276H7.4C5.15979 743.276 4.03968 743.276 3.18404 742.84C2.43139 742.456 1.81947 741.844 1.43597 741.092C1 740.236 1 739.116 1 736.876V665.312C1 663.071 1 661.951 1.43597 661.096C1.81947 660.343 2.43139 659.731 3.18404 659.348C4.03968 658.912 5.15979 658.912 7.39999 658.912H78.9639C81.2041 658.912 82.3242 658.912 83.1799 659.348C83.9325 659.731 84.5445 660.343 84.9279 661.096C85.3639 661.951 85.3639 663.071 85.3639 665.312ZM1256.31 152.728H1184.75C1182.51 152.728 1181.39 152.728 1180.53 152.292C1179.78 151.908 1179.17 151.297 1178.78 150.544C1178.35 149.688 1178.35 148.568 1178.35 146.328V74.764C1178.35 72.5237 1178.35 71.4036 1178.78 70.548C1179.17 69.7953 1179.78 69.1834 1180.53 68.7999C1181.39 68.364 1182.51 68.364 1184.75 68.364H1256.31C1258.55 68.364 1259.67 68.364 1260.53 68.7999C1261.28 69.1834 1261.89 69.7953 1262.28 70.548C1262.71 71.4036 1262.71 72.5237 1262.71 74.7639V146.328C1262.71 148.568 1262.71 149.688 1262.28 150.544C1261.89 151.297 1261.28 151.908 1260.53 152.292C1259.67 152.728 1258.55 152.728 1256.31 152.728ZM1762.5 827.639H1690.93C1688.69 827.639 1687.57 827.639 1686.72 827.203C1685.96 826.82 1685.35 826.208 1684.97 825.455C1684.53 824.6 1684.53 823.48 1684.53 821.239V749.676C1684.53 747.435 1684.53 746.315 1684.97 745.46C1685.35 744.707 1685.96 744.095 1686.72 743.712C1687.57 743.276 1688.69 743.276 1690.93 743.276H1762.5C1764.74 743.276 1765.86 743.276 1766.71 743.712C1767.46 744.095 1768.08 744.707 1768.46 745.46C1768.9 746.315 1768.9 747.435 1768.9 749.676V821.239C1768.9 823.48 1768.9 824.6 1768.46 825.455C1768.08 826.208 1767.46 826.82 1766.71 827.203C1765.86 827.639 1764.74 827.639 1762.5 827.639Z"
                                    stroke="#DEE2E7"
                                    strokeWidth="0.8"
                                    strokeLinecap="round"
                                    strokeDasharray="6 6"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}