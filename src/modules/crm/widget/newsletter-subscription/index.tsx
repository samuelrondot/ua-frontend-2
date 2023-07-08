// React
import { FC } from "react"

export const CrmWidgetNewsletterSubscription: FC = () => {

    return (
        <>
            <div className="bf-newsletter-cta">
                <div className="bf-newsletter-cta-container gh-container">
                    <div className="bf-newsletter-cta-form">
                        <h2>Subscribe to our newsletter</h2>
                        <p>
                            We’ll keep you in the loop on our best advice and strategies for social
                            media marketing and growing a small business.
                        </p>
                        <form id="newsletter-form">
                            <div className="bf-newsletter-signup">
                                <input
                                    className="gh-input required email"
                                    type="email"
                                    defaultValue=""
                                    name="email"
                                    placeholder="Your email address..."
                                    autoComplete="false"
                                    aria-label="Email"
                                />
                                <button
                                    className="gh-button gh-button-lightred"
                                    value="Subscribe"
                                    type="submit"
                                    role="button"
                                    aria-label="Subscribe"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}