"use client";

import { useState } from "react";
import { blog12FAQData } from "@/data/faq/BlogFAQData";
import BlogFAQSection from "@/utils/faq/BlogFAQSection";


const BlogInner12Section = ({ blogTableOfContentData }) => {
  const [dropDown, setDropDown] = useState(false);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [],
  };

  blog12FAQData.map((item, index) => {
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
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                What is Flutter?
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Flutter is a modern open-source network created by Google. It
                allows its users to design and create natively compiled apps
                from a single codebase for different platforms like iOS,
                Android, web, and desktop. Flutter is one of the powerful tools
                developers use to design a high-performance, visually aesthetic
                mobile application using the Dart programming language, which
                allows Flutter to offer interactive and customizable UI and its
                components. Flutter is popularly known as a{" "}
                <a
                  href="/services/flutter-application"
                  className="text-[#5DD1FF]"
                >
                  flutter app development company
                </a>{" "}
                for its fast development cycle, native-like performance, and hot
                reload feature, which improves the development speed by making
                all the changes visible immediately without needing to restart
                the app.
              </p>
            </div>
            <div
              id="id-2"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                What is React Native?
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                React native is an open-source framework created and developed
                by Facebook, allowing developers to use JavaScript and React to
                develop mobile applications. Another standout feature of react
                native is that it bridges JavaScript code to native components,
                unlike Flutter, which indicates that the application's user
                interface is rendered using the platform's native components.
                Secondly, React Native also supports hot reloading, as mentioned
                in Flutter, which enables the developer to evaluate the effect
                of all the changes made instantly. The developers can write code
                in JavaScript, along with the option of native code which is
                always open when needed.
              </p>
              <a href="#" className="w-full">
                <img
                  src="/blog-banner-1.gif"
                  alt="Blog Ads Banner"
                  className="w-full"
                />
              </a>
            </div>
            <div
              id="id-3"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Flutter Vs React Native: Key Differences
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                As we explore the developers' choice between Flutter and React
                Native when developing a mobile application, we need to examine
                and understand some core differences.
              </p>
            </div>
            <div
              id="id-4"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Difference in Programming Language
              </h3>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span className="font-semibold">Flutter: </span>
                  <span>
                    Flutter uses Dart, a programming language created or
                    developed by Google. It is designed for client-side
                    development and can build high-performing, high-quality
                    applications. Dart can conform to native code directly,
                    leading to better performance. Although there are such
                    unique features, the usage of Dart is still relatively niche
                    and familiar to only a handful of developers. This shows
                    that there is a learning curve for newcomers.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">React Native: </span>
                  <span>
                    uses JavaScript, the most popular programming language
                    worldwide. JavaScript is a very flexible, user-friendly, and
                    dynamic language that is mostly used across web and mobile
                    platforms. It is ubiquitous, indicating that it is familiar
                    to all developers, especially those who have worked with
                    React in web development. This feature is important in
                    decreasing the learning curve for developers looking to use
                    and adopt React Native.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">
                    Developer's Preference:{" "}
                  </span>
                  <span>
                    Regarding preference, React Native wins the battle with this
                    language familiarity. Since JavaScript is famous and used
                    most commonly for web and server development, users with
                    extensive experience with JavaScript and React will find it
                    convenient and easy to understand the transition into React
                    Native. On the contrary, Flutter uses Dart, which can
                    sometimes be a barrier for users and developers who are not
                    familiar with the language. However, it does offer an ample
                    amount of features that make it worth the user's time to
                    learn this language.
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="id-5"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Better Performance in Flutter vs React Native
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                The most significant aspect of this debate is the performance of
                Flutter vs. React Native. For mobile app development frameworks,
                their performance and quality are really significant for
                developers. Flutter and React Native are both high-performing
                mobile application development frameworks; however, some
                differences are mentioned below.
              </p>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span className="font-semibold">Flutter: </span>
                  <span>
                    Its special feature is that it conforms directly to native
                    ARM code, which offers high performance, especially in
                    resource-intensive apps. Flutter uses Skia, a custom
                    rendering engine capable of rendering the user interface at
                    a rapid frame rate. It concludes that Flutter applications
                    can run better and more smoothly, and it also supports
                    complex animations and high-end graphics.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">React Native: </span>
                  <span>
                    It mostly uses native components, which means that it relies
                    on the platform's native code to render the User Interface.
                    In many instances, this approach gives better results and
                    provides good performance; however, it lacks the ability to
                    handle heavy graphics or complex animation workloads. React
                    Native applications require extra use of native modules to
                    maintain performance under heavy load.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">
                    Developer's Preferences:{" "}
                  </span>
                  <span>
                    In terms of performance, Flutter has been better than
                    Flutterative because of its direct compilation of native
                    code and custom rendering engine. With these features, it is
                    significant for developers to use Flutter for building
                    graphic-loaded applications and creating apps with high
                    frame rates. Conversely, react native is suitable for
                    creating applications for general purposes, and developers
                    can improve performance with native code when required.
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="id-6"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                User Interface and Customization
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                For custom Android and{" "}
                <a href="/services/ios-application" className="text-[#5DD1FF]">
                  custom iOS app development services
                </a>
                , developers always need to choose between Flutter or React
                Native, being their app development company.
              </p>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span className="font-semibold">Flutter: </span>
                  <span>
                    Yet another eye-catching feature of Flutter is its
                    widget-based architecture, where Flutter is a widget. Such
                    features enhance flexibility and allow more control over the
                    application's user interface. Flutter contains a wide range
                    of pre-built widgets that follow Material Design for Android
                    and Cupertino for iOS. It enables developers to build a
                    customized UI that works accordingly on both platforms.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">React Native: </span>
                  <span>
                    In react native, the developer can create a user interface
                    by using native components of the platform itself. For
                    example, on the iOS platform, it uses native iOS components,
                    and on the Android platform, it uses Android components.
                    Such features provide a native touch to the application's
                    user interface. Still, they also narrow down the options for
                    customizing the UI, especially when the application needs to
                    be consistent across different platforms.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">
                    Developer's Preferences:{" "}
                  </span>
                  <span>
                    The detailed comparison of iOS and{" "}
                    <a
                      href="/services/android-application"
                      className="text-[#5DD1FF]"
                    >
                      Android app development services
                    </a>{" "}
                    shows Flutter is more flexible regarding tFluttermization.
                    Developers can easily create customized and compatible user
                    interfaces that will perform better across different
                    platforms, either Android or iOS. Specifically, the
                    widget-based approach offered by Flutter makes it an easy
                    choice for developers. Flutter makes it convenient for them
                    to develop distinct and new designs. On the other hand, by
                    providing native components, React Native gives the
                    application a native touch. However, there is still a lot of
                    work to do to create a highly customized and creative user
                    interface.
                  </span>
                </li>
              </ul>
              <a href="#" className="w-full">
                <img
                  src="/blog-banner-2.gif"
                  alt="Blog Ads Banner"
                  className="w-full"
                />
              </a>
            </div>
            <div
              id="id-7"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Speed of Development
              </h3>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span className="font-semibold">Flutter: </span>
                  <span>
                    With the feature of Hot Reload, Flutter allows developers to
                    instantly see and evaluate the changes they have made to the
                    code without restarting the app. Eventually, this results in
                    increased development speed and decreased time consumption.
                    The framework also offers a rich set of pre-built widgets,
                    which are handy for developers when assembling user
                    interface components. In terms of development speed, the
                    learning curve for Dart is a minor problem, but once
                    developers become familiar with the language, they can
                    develop applications competently.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">React Native: </span>
                  <span>
                    React Native also offers a hot reloading feature, which, as
                    mentioned earlier, allows developers to assess the changes
                    in real time without restarting the application, which saves
                    ample time. Along with it, react native contains a wide
                    variety of libraries and third-party tools that are useful
                    in increasing and boosting the development speed. Developers
                    can integrate simple features without the need to code by
                    using pre-built components, plugins, and a wide range of
                    libraries.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">
                    Developer's Preferences:{" "}
                  </span>
                  <span>
                    React Native has always won the debate of better development
                    speed between Flutter and React Native because of its larger
                    Flutterem and capability to reuse Java script code for both
                    web and mobile development platforms. A massive range of
                    pre-built components present in the library of React Native
                    makes the development speed faster. On the other hand,
                    Flutter offers phenomenal performance and a Flutter reloads
                    feature, but the learning curve with Dart is a problem for
                    developers unfamiliar with the language.
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="id-8"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Mobile Application Testing Tools
              </h3>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span className="font-semibold">Flutter: </span>
                  <span>
                    offers several types of mobile application testing before
                    launching it for users. Once the mobile app is developed, it
                    goes through different testing, which includes Unit testing,
                    widget testing, integration testing, and UI or functional
                    testing. There are some additional testing tools offered by
                    Flutter, which are Mockito: used for mocking
                    tFlutterndencies present in unit tests, which assists in
                    isolating the part in your app that is required to be
                    tested. FakeAsync: the name indicates that it instantly
                    helps to test asynchronous operations. Golden tests are used
                    to compare widgets and ensure that the UI matches the
                    client's requirements.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">React Native: </span>
                  <span>
                    On the other hand, react native also offers mobile app
                    testing tools, like Flutter, to test the application before
                    launch. These tools include end-to-end testing, component
                    testing, and unit testing.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Developer's choice: </span>
                  <span>
                    Flutter and React Native offer mobile app Flutter tools;
                    however, the choice depends on the developer's experience
                    and familiarity. Flutter is the ideal choice for UI and
                    widget testing, particularly. With the JavaScriFlutterystem,
                    React Native is a perfect choice with Jest and Detox tools
                    for E2E testing.
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="id-9"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Ecosystem and Community
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                A detailed discussion ecosystem and community are vital to
                understanding developers' preferences in a debate like Flutter
                vs. React Native. A strong developer community is important for
                any framework's growth. A larger community also ensures that
                developers can easily find solutions to their problems. It also
                provides access to resources, libraries, and tutorials to learn
                and be consistent.
              </p>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span className="font-semibold">Flutter: </span>
                  <span>
                    Although released in 2017, Flutter is comparatively new.
                    Yet, with Google's backing, Flutter has seen enormous growth
                    in its community. Mobile app development has been a
                    significant fraction of the community, and the community is
                    expanding, allowing developers to gain access to different
                    packages, libraries, and plugins to make development
                    smoother.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">React Native: </span>
                  <span>
                    On the other hand, Wake Native has been around since 2015.
                    It has a much larger community and vast ecosystem, helped by
                    Facebook's backing and massive usage of JavaScript.
                    Currently, React Native has been one of the most established
                    and popular frameworks for developers in mobile app
                    development. Extensive documentation, tutorials, and
                    widespread third-party libraries help developers resolve
                    trivial development troubles.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">
                    Developer's preference:{" "}
                  </span>
                  <span>
                    In this debate, react native and Flutter are equally
                    beneficial for develoFlutterReact Native's highly
                    established and larger community makes it effortless for
                    developers to gain support, resources, and libraries. On the
                    other hand, Flutter is growing and emerging with an
                    establFlutterommunity and is attractive, especially for
                    developers interested in building customized user
                    interfaces.
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="id-10"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Supporting the Platform
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Flutter vs React Native are compatible with multiple platforms,
                but the range of platforms can differ.
              </p>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span className="font-semibold">Flutter: </span>
                  <span>
                    It can support applications for different platforms, such as
                    iOS and Android, and web and desktop platforms, including
                    Windows, MacOS, and Linux. With such compatibility offered
                    by Flutter, it makes an easy choice for developerFlutterant
                    to develop a cross-platform application for different
                    devices using a single codebase.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">React Native: </span>
                  <span>
                    It mainly focused on mobile application development for
                    platforms like iOS and Android. React Native can also
                    support web and desktop applications through different
                    methods, like third-party libraries; however, these
                    solutions are not as fine and smooth as Flutter's
                    cross-platform compatibility.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">
                    Cross Platform App Development:{" "}
                  </span>
                  <span>
                    Flutter is suitable for developing multi platform
                    applications as it offers smooth development for web and
                    desktop apps. React Native, on the other hand, is perfect
                    for mobile apps, but it needs more effort to be compatible
                    with additional platforms. Another debate for native app vs
                    hybrid app development: Flutter once again has the upper
                    hand with its single codebase feature. It allows the
                    developer to create a hybrid application with the
                    functionality done with only a single codebase. However, for
                    native applications, the developer needs to rewrite and
                    redesign all the features of an app in a native app
                    development language.
                  </span>
                </li>
              </ul>
              <a href="#" className="w-full">
                <img
                  src="/blog-banner-3.gif"
                  alt="Blog Ads Banner"
                  className="w-full"
                />
              </a>
            </div>
            <div
              id="id-11"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Final Verdict
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Flutter vs React Native Google trends show some head-to-head
                debate in the mobile app development space, with the popularity
                of Flutter. According to Google Trends, since 2022, Flutter has
                gained more popularity and usability over React Native.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Secondly, Flutter is also the most searched query globally.
                However, the choice of a developer between Flutter and React
                Native solely depends on the requirements of the project itself,
                the developer's experience, and familiarity with the programming
                language.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                React Native benefits developers who are experienced with
                JavaScript and prefer a larger community. It offers a native
                touch to mobile applications and relies mostly on native
                components. React Native is preferred for developers who are
                familiar with JavaScript, but Flutter offers more control over
                the UI and Flutter platform compatibility.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Flutter offers high-performing capacity with rendering complex
                UIs and animations. It also provides better options for
                developers to develop applications compatible with multiple
                platforms, including desktop, web, and MacOS. Along with it, a
                widget-based architecture in Flutter offers even more
                flexibility in UI designs, as both platforms have the same type
                of tools to offer to mobile app developers regarding testing.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                It concludes that Flutter and React Native have their own
                benefits and limitations, and the choice solely depends on the
                developer.
              </p>
            </div>
            <div
              id="id-12"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Frequently Asked Questions
              </h2>
              {blog12FAQData.map((item, index) => {
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

export default BlogInner12Section;
