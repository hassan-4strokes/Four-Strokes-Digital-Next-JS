"use client";

import { useState } from "react";
import { blog6FAQData } from "@/data/faq/BlogFAQData";
import BlogFAQSection from "@/utils/faq/BlogFAQSection";

const BlogInner6Section = ({ blogTableOfContentData }) => {
  const [dropDown, setDropDown] = useState(false);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [],
  };

  blog6FAQData.map((item, index) => {
    return faqSchema.mainEntity.push({
      "@type": "Question",
      name: item.heading,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.text,
      },
    });
  });

  return (
    <>
      {/* <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet> */}
      <div className="blog-section section h-fit w-full flex flex-col gap-10 pb-16 xl:pb-28 px-[30px] sm:px-[50px] xl:px-[12vw]">
        <div className="top h-full w-full flex flex-col">
          <div className="inner w-full lg:w-[50%] h-full flex flex-col rounded-md border-[1px] border-zinc-400 px-3">
            <div
              onClick={() => setDropDown(!dropDown)}
              className="heading-area w-full cursor-pointer flex items-center justify-between py-4"
            >
              <h3 className="text-xl md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#5DD1FF]">
                Table Of Content
              </h3>
              <i
                className={`fa-solid fa-angle-${
                  dropDown ? "up" : "down"
                } text-base md:text-lg lg:text-xl text-[#5DD1FF]`}
              ></i>
            </div>
            <div
              className={`buttons-area w-full ${
                dropDown ? "flex" : "hidden"
              } flex-col`}
            >
              {blogTableOfContentData &&
                blogTableOfContentData.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className="text-left text-sm xl:text-base 2xl:text-lg tracking-wide border-t-[1px] border-zinc-200 font-['Creato_Display'] py-2"
                    >
                      <a href={item.link}>{item.name}</a>
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="bottom w-full flex flex-col">
          <div className="w-full flex flex-col justify-center gap-10">
            <div
              id="id-1"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                The application subscription model is the strategy of changing
                the application into a revenue-generating site where a user can
                access premium content or unlock new features, services, or
                options for a monthly or annual subscription fee, implementing a
                mobile app.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Implementing a mobile app subscription model requires extreme
                critical planning, strategy execution, and optimization. By
                understanding some core steps and their benefits and getting a
                grip on different types of subscription models in the guide
                below, a developer can perform app subscription integration,
                creating a successful subscription-based app that can generate
                healthy revenue.
              </p>
              <a href="#" className="w-full"><img src="/blog-banner-1.gif" alt="Blog Ads Banner" className="w-full" /></a>
            </div>
            <div
              id="id-2"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Guide to implementing a mobile app subscription model
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                There are several steps to implement a mobile app subscription
                model, and we’ll go through them individually.
              </p>
            </div>
            <div
              id="id-3"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Step 1: Finalizing a subscription platform
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                The first step for app subscription integration is to select a
                subscription platform. This platform allows users to
                conveniently pay for iOS or Android app subscription fees by
                interacting with this platform. This option indicates that
                either it is an Android app subscription integration or an iOS
                app, you need a subscription platform.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                The most popular is the Google Pay billing platform, providing
                an in-app billing feature for Android users, the Apple app store
                with an in-app purchase option for iOS users, and other
                third-party platforms like Stripe or Braintree.
              </p>
            </div>
            <div
              id="id-4"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Step 2: Prepare your subscription plan
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                The first is to identify and determine the prices and billing
                type. Prices can start from low to high, with discounted prices
                for several occasions; billing type includes monthly, annually,
                or every six months. Creating proper subscription tiers with
                different benefits and features, offering special discounts for
                long-term commitments. Finalizing the features, such as a trial
                period for a week or a month and a grace period.
              </p>
            </div>
            <div
              id="id-5"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Step 3: Integration of subscription model with SDK
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Select and download the software development kit (SDK), a set of
                tools to create an application for specific platforms.
                Developers configure and customize the SDK settings, like API
                keys and product IDs, using the application programming
                interface and another user interface. It allows developers to
                exchange data or services from a system and allow app
                subscription integration. Another task is implementing
                subscription-related APIs and analytics and handling
                subscription statuses like expiration, cancellation, defaulter,
                etc.
              </p>
            </div>
            <div
              id="id-6"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Step 4: Designing an interactive user interface
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                The user interface is the basic platform for users to interact
                with the mobile app and all subscription details. All the plans,
                pricing, options, and categories should be visible to viewers at
                the user interface. Users must be able to view and select the
                subscription plan and convenient subscription management options
                like upgrades or cancellations and payment options. Billing and
                payment processes must be transparent and secured to win the
                user’s trust with his confidential data.
              </p>
            </div>
            <div
              id="id-7"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Step 5: Implement Subscription Logic and Content Strategy
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Implementation of subscription-related settings and features
                like user status of active, dormant, canceled, defaulter, etc,
                comes under this step. I maintain and update the application,
                categorize and update the content regularly based on
                subscription status, send subscription-related notifications and
                reminders, offer discounts and incentives to subscribers, and
                create exclusive content for premium users. All such tasks come
                under this step to keep the subscribers stuck and intrigued.
              </p>
            </div>
            <div
              id="id-8"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Step 6: Optimize User Experience by Debugging and Testing
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Once the mobile app subscription model is ready, run and test it
                to check the payment flow and billing processes. By testing, one
                can debug all the errors and obstacles to maintain a seamless
                user experience. To enhance user experience, personalize the
                user recommendations, conduct beta testing with real users, give
                push notifications for new content, upcoming offers, and
                updates, and keep the ad count minimal.
              </p>
            </div>
            <div
              id="id-9"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Step 7: Launch and Marketing
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Launch your app subscription integration in the market with
                attractive marketing and promotions. Announce economical and
                efficient subscription plans for a limited time through
                marketing channels. Once users start to join, monitor their
                activities and analyze their feedback. You can keep track of
                metrics like revenue and subscription rate and change
                subscription plans and content accordingly.
              </p>
              <a href="#" className="w-full"><img src="/blog-banner-2.gif" alt="Blog Ads Banner" className="w-full" /></a>
            </div>
            <div
              id="id-10"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Customized Applications Development
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                There are several types of applications like Flutter, react
                native apps, SaaS apps for various platforms like Android or
                iOS, and different Software development kits (SDK) that allow
                the developers to build different customized apps.
              </p>
            </div>
            <div
              id="id-10"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Customized Android Applications development
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                For{" "}
                <a
                  href={"/services/android-application"}
                  className="text-[#5DD1FF]"
                >
                  custom Android app development
                </a>
                , here are different services and consultants crafting a better
                and more successful application for the Android platform. The
                Android operating system is ruling the whole digital world,
                powering billions of electronic devices globally. Such a vast
                base and diversity give an unparalleled opportunity for
                businesses to expand and improve customer and user experiences,
                which leads to better growth.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                The{" "}
                <a
                  href={"/services/android-application"}
                  className="text-[#5DD1FF]"
                >
                  Custom Android development
                </a>{" "}
                consultancies provide passionate Android app designers,
                developers, and strategies to transform and build a beautiful
                Android platform application. These companies also provide
                creative designs and user interfaces for developers and users to
                get a better experience.
              </p>
            </div>
            <div
              id="id-11"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Customized iOS Applications development
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                For customized iOS apps, yet again, different software
                development kits and companies ensure a unique and
                best-customized app for the iOS platform. Such companies provide{" "}
                <a
                  href={"/services/ios-application"}
                  className="text-[#5DD1FF]"
                >
                  custom iOS app development services
                </a>{" "}
                with different innovative ideas and transform them into
                intuitive and engaging iOS platform apps that improve the true
                ecosystem of Apple. Coding expertise and different design
                planning and development tools are required to create a perfect
                iOS platform customized application.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Not only iOS app development but also consultants cater to the
                needs of your customized iOS apps, such as app development and
                maintenance services, game development services, and iOS push
                services.
              </p>
            </div>
            <div
              id="id-12"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                React Native Mobile Applications
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                A{" "}
                <a
                  href={"/services/react-native-application"}
                  className="text-[#5DD1FF]"
                >
                  React native mobile app development company
                </a>{" "}
                provides various services to developers to help develop an
                interesting React native mobile app. React applications such as
                Facebook, Instagram, WhatsApp, and Twitter are currently
                trending and very popular worldwide. Such applications are
                developed by React native app development services offered by
                many companies and consultants. A powerful feature of
                cross-platform makes the framework of react native very strong
                and flexible, modified with a single codebase.
              </p>
            </div>
            <div
              id="id-13"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Flutter Mobile Applications
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                A good{" "}
                <a
                  href={"/services/flutter-application"}
                  className="text-[#5DD1FF]"
                >
                  Flutter mobile app development
                </a>{" "}
                company and firm can assist you with different cross-platform
                mobile applications. Flutter is an open-source network developed
                by Google to create cross-platform mobile applications. This
                means that developers can target various platforms by using one
                code base running on several platforms, including Android, iOS,
                web, and desktop. This specific feature minimizes the effort
                they need to maintain different code bases.
              </p>
            </div>
            <div
              id="id-14"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                SaaS Mobile Applications
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                SaaS mobile app development that is creating an app for software
                as a service product. SaaS mobile app is a software distribution
                model where the users get access to the software through the
                internet through a Ma subscription model. Saas mobile app
                development is a complex task for developers in the company to
                build a mobile-friendly application that allows users to access
                the software’s services by paying a monthly fee from their smart
                electronic devices. Saas apps are also cross-platform, with
                cloud integration, authentication, good security, offline
                functionality, scalability, and many other features.
              </p>
            </div>
            <div
              id="id-15"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Types of SaaS Mobile Applications
              </h2>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span className="font-semibold">Enterprise SaaS App: </span>
                  <span>
                    These apps are designed for businesses to streamline
                    processes like project management, customer relationship
                    management (CRM), or human resources management. It includes
                    Hubspot, salesforce, and Zoho CRM.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">
                    Communication SaaS App:{" "}
                  </span>
                  <span>
                    These mobile apps are for communication and collaboration.
                    They sometimes provide the free version with limited
                    features, and the premium version, for which consumers pay a
                    subscription fee, gives full access to its users. e.g.,
                    Zoom, Slack, Tello, etc.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Consumer SaaS App: </span>
                  <span>
                    These apps focus on providing services, like storage or
                    space for the data, directly to the consumers in exchange
                    for a monthly or annual subscription fee. Some apps also
                    provide fitness tracking data, including Google Drive,
                    Dropbox, Shopify, Fitbit, etc.
                  </span>
                </li>
              </ul>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Let's discuss some key features of the Consumer SaaS Shopify
                Subscription app.
              </p>
            </div>
            <div
              id="id-16"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Shopify Subscription App
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Shopify is a cloud-based e-commerce platform allowing merchants,
                entrepreneurs, and shopkeepers to expand their businesses. It
                allows users to build their own online store and sell their
                products there.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Access to the premium Features and options it gives users after
                subscribing to the shopify subscription app are managing online
                store orders, customized designs for the store and inventory,
                creation and management of online product listings; users can
                set the prices, payment, and shipping options too. Shopify
                analyzes the sales and customer data to provide users with a
                sales overview.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                More importantly, Shopify works on both iOS and Android
                platforms. For those who want to know how to implement a mobile
                app subscription model on iOS, there are some high-level steps
                to develop an app with a subscription model on the iOS platform.
              </p>
            </div>
            <div
              id="id-17"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Mobile App Subscription Model on iOS Platform
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                A few of the steps will be discussed here, which includes
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                To implement a mobile app subscription model on iOS, follow
                these high-level steps:
              </p>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span className="font-semibold">Step 1: </span>
                  <span>
                    Create in-app purchases (IAP) in the App Store, connect, and
                    configure your app's settings before performing app
                    subscription integration. Sign up for a paid Apple developer
                    account, set up your app in the app store, and build
                    subscription products. Your subscription options, duration,
                    price, etc, must be clear and vivid.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Step 2: </span>
                  <span>
                    Set up in-app purchases in Xcode and incorporate the in-app
                    purchase logic into your iOS app. You can get a storekit
                    framework to handle subscriptions. Create a subscription
                    manager to handle purchasing and transaction management.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Step 3: </span>
                  <span>
                    Exhibit available subscription packages in the app List the
                    subscription prices, offers, and discounts with the last
                    dates.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Step 4: </span>
                  <span>
                    Subscription and Transactions Implement logic to manage
                    different transaction possibilities like failed, canceled,
                    or restored.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Step 5: </span>
                  <span>
                    Validate and confirm the subscription status and keep
                    updating the current content and status. The receipt
                    validation is significant to ensure that the subscription is
                    active and not expired.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Step 6: </span>
                  <span>
                    Implementation of restore purchases. When users change their
                    device or reinstall the app, the option to restore their
                    subscription should be notified to maintain a seamless user
                    experience.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Step 7: </span>
                  <span>
                    Testing and debugging in-app purchases and checking for the
                    purchases in the app. Sandbox test account for testing is a
                    useful feature in App Store Connect. It ensures the app is
                    working properly when handling the subscription lifecycle.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Step 8: </span>
                  <span>
                    Submit the application to the App Store for review after all
                    the testing and debugging. The app must be compliant with no
                    errors and a smooth user experience. Following these steps,
                    you can implement a subscription model on your iOS app
                    efficiently and successfully.
                  </span>
                </li>
              </ul>
              <a href="#" className="w-full"><img src="/blog-banner-3.gif" alt="Blog Ads Banner" className="w-full" /></a>
            </div>
            <div
              id="id-41"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Frequently Asked Questions
              </h2>
              {blog6FAQData.map((item, index) => {
                return (
                  <div key={index} className="w-full">
                    <BlogFAQSection faq={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogInner6Section;
