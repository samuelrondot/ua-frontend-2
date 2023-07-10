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
                
              
            <div className="container-terms">
            <h1>Website Terms of Use
Privacy Policy for useArtemis</h1>
            <p>
            At useArtemis, accessible from https://useartemis.co, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by useArtemis and how we use it.

If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. </p>

            <h1>Consent</h1>
            <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.      </p>


            <h1>
            Information we collect
            </h1>
            <p>
            Client data:
(a) Registration Information. When you create an account on the Platform, we collect the following required information about you: email address, first and last names, and phone number. You must enter the above information yourself to create an account unless we receive such information (except phone number) about you from the Gmail authentication token when you choose to sign up using the ‘Sign In with Google’ button.
(b) Authentication Token Information. When you create an account on the Platform through the ‘Sign In with Google’ button, we collect encrypted Gmail authentication token obtained from Google LLC. We can obtain the following information about you via such a token: first and last names, email address, language settings .
(c) Automatically Collected Information. When you create an account, we collect certain information about you and your device automatically, including, IP Address, referral link, registration date, account balance information, language, and browser type. We may also collect some information about your activity on the Platform, such as the time you purchased a subscription or renewed your plan.
(d) Workplace Information. When you create an account on the Platform, we collect some general information about your workplace and the purpose for using our Platform so that we can develop and optimize our Platform to meet the needs of our customers. Collecting workplace information allows us to know specifically who the processing agent is in order to expedite communication, e.g. in the event we receive a request from a data subject. Such information includes your company name, approximate company size, your occupation and purpose for using our Platform.
(e) Payment Information. If you order services from us, you will need to provide certain personal details, including payment information, so the order can be fulfilled. This information includes your identifier (client and order), email address, IP address, phone number, first and last names, country code, address (city, state, zip code), company name, card type, last 4 digits of the card number, user agent and browser language data, name of payment processor and may be used to prevent fraudulent chargebacks.
In order to obtain payment from you, we will use or direct you to a third-party payment processor who will collect this information from you and process your payment. Please note that a third-party payment processor is responsible for all collection, processing, and storage of your financial information and we do not have direct access to or possession of your payment card information (except the four last digits of the card number) or banking information.
(f) Google User Data: Email address of the integrated Gmail account, the access token, or identifiers for 1) drafts and messages sent via Remind Me and Send Later features of Email Tracker for Gmail, 2) emails sent via campaigns and/or GBlast, 3) all inbox emails with all text information, attaches and images, received as answer to emails sent via campaigns.
(g) Email Drip Campaigns Data: Information regarding the Email Drip Campaigns services sent by the clients: login and password from the client’s email sender account, email addresses added to drip campaign recipients, settings for the purposes of sending the email drip campaigns, replies to campaign emails, a timeline of these campaign actions, identifiers of sent and received emails, content of emails, information on the email recipient, the tracking status of sent emails for statistics.
(h) Email Warm-Up Campaigns Data: Information regarding clients’ use of the Email Warm-Up Campaigns services, i.e. how many emails were sent, received, and found in the ‘spam’ section of your warm-up email account during your email warm-up campaign.
(i) Integrations API Information: Clients’ API tokens, which are nеnecessary to integrate your account (giving our Platform access to a third-party platform API) with other third-party services, including CRM, collaboration tools, forms, customer support platforms, such as Calendly, Pipedrive, Zapier, Google Calendar.
Visitor data:
(j) Contact Information. We can collect some personal data when you submit your personal information via the Site’s online chat or other forms to contact, provide feedback on our Platform, or join our affiliate program. Such data may include name, email address, phone number, message, and other information you may provide us via available contact options.
(k) Cookies Information. On our Site, we use cookies and other tracking technologies for a variety of purposes: for analytics, marketing activities, remembering your preferences, and other purposes. Such use may involve the transmission of information from us to you and from you to a third party website or us. To learn more regarding our use of cookies please see our Cookie Policy.
Prospect data:
(l) Prospect data. We collect and process third-party personal data (mainly information related to data subject’s business interests or occupation) that has been provided to us by the Client or generated/collected through useArtemis's tools (Email Finder, LI Prospect Finder, Single Email Search, Bulk Email Search, Domain Search, Bulk Domain Search, Company Profile Search) under instructions provided by Client. Such information can include email address and/or first name, last name, corporate email, location (not precise), industry, current and previous position, place of work, links to social media.
(m) CRM Data: We process prospect data and any other personal data provided to us by our Client within the useArtemis CRM service, including information used in ‘Deals’ and ‘Tasks’ features of CRM.
We use the personal data we collected and the personal data you provided us with or requested us to collect only for the purposes listed in this Policy. We may share your personal data with third parties solely for the purposes listed herein.
We DO NOT sell your data. We DO NOT use automated decision-making and profiling. We DO NOT intentionally collect and process the personal data of children or any sensitive personal data. Please, refrain from sharing your or third-party sensitive personal data.
The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.  </p>

            <h1>
            How we use your information
            </h1>
            <p>
            We use the information we collect in various ways, including to:

We use your Google API data to provide services, including Email Drip Campaigns, Email Warm-up Campaigns to clients and ensure the proper operation of the Platform
Provide, operate, and maintain our website
Improve, personalize, and expand our website
Understand and analyze how you use our website
Develop new products, services, features, and functionality
Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
Send you emails
Find and prevent fraud    </p>

            <h1>
            GOOGLE COMPLIANCE
            </h1>

            <p>
            useArtemis’s use and transfer to any other app of information received from Google Accounts will adhere to Google API Services User Data Policy, including the Limited Use requirements.    </p>


            <h1>
            THIRD PARTY DATA
            </h1>

            <p>
            In the context of using our services, namely creating emailing campaigns and contact lists, useArtemis has access to the information contained in the email contact lists you create in your account, as well as the subject and content of the emails that you send out via our services.

This data is stored on secure servers and only a limited number of people are authorized to access your contact lists, in particular for the purpose of providing support services.

You are easily able to recover your contact lists from your useArtemis account at any time, by clicking on the “export” button. You may also modify and or delete contacts at any time from your account.

In no case does useArtemis sell, share or rent out your contact lists to third parties, nor does it use them for any purposes other than those set forth in this policy. We will use the information from your contact lists only for legal requirements, to invoice and collect summaries for our own statistics and for the purposes of providing you with customer support services.

As creator of the contact lists and associated email campaigns, you are considered the data controller within the meaning of the GDPR, and useArtemis is acting only as a data processor. In this capacity, you are responsible in particular for:

making all the declarations necessary to the relative data protection authority, complying with all current regulations in force, including the data protection laws, obtaining the explicit consent of the persons concerned when collecting their personal data, ensuring your authority to use the personal data collected in accordance with the defined end purposes and refraining from any unauthorized use. If a recipient of your emails sent via our services requests us to modify or delete his/her personal data, we will honor that request after proper verification and will inform you of it.      </p>


            <h1>
            DATA RETENTION PERIODS
            </h1>

            <p>
            Your personal data is kept for the periods set out below.

Personal data collected for the execution of the services as well as information about how and when you use the services: The time needed to provide to you our services, and in no event no longer than 3 years after closing your account (unless otherwise required by law).

Personal data collected in order to send newsletters, requests and direct marketing: 3 years from data collection or last active contact with the prospect.

Personal data collected for evidentiary purposes: Duration of the statutory limitation period (generally 5 years).

Personal data collected as part of your data subject’s rights: If we ask you for proof of identity, we only retain it for the time necessary to verify your identity. Once the verification has been carried out, the proof is deleted.   </p>


            <h1>
            LOCATION OF DATA STORAGE AND TRANSFERS 
            </h1>

            <p>
            The host servers on which useArtemis processes and stores its databases are located exclusively within the European Union.

useArtemis will inform you immediately, to the extent we are legally authorized to do so, in case of any application or order originating from an administrative or judicial authority relating to your personal data.

Regarding the tools we use (see article “Third party disclosures” on recipients of the collected data, concerning our processors), your personal data could be transferred outside the European Union. The transfer of your data within this framework is secured by the following safeguards:

Either these data are transferred to a country which has been deemed to offer an adequate level of protection by the European Commission; Or we have concluded with our processors a specific contract governing the transfer of your data outside the European Union, based on the standard contractual clauses approved by the European Commission between a data controller and a processor.
            </p>
            </div>
           
               
            </Layout>
        </>
    )
}