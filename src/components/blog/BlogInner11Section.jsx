"use client";

import { useState } from "react";
import { blog11FAQData } from "@/data/faq/BlogFAQData";
import BlogFAQSection from "@/utils/faq/BlogFAQSection";
const BlogInner11Section = ({ blogTableOfContentData }) => {
  const [dropDown, setDropDown] = useState(false);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [],
  };

  blog11FAQData.forEach((item) => {
    faqSchema.mainEntity.push({
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
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                What is Xamarin?
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                A startup called Xamarin offers software development tools that
                let customers create apps for Windows, iOS, and Android using C#
                and the .NET foundation. Because Xamarin is based on the .NET
                Framework, users may run it efficiently on various platforms.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Users must wait to use the enhanced functionality of the
                impending update for the iOS and{" "}
                <a
                  href="/services/android-application"
                  className="text-[#5DD1FF]"
                >
                  Android app development services
                </a>{" "}
                right away since Microsoft owns the tech giant Xamarin. Although
                Xamarin apps have a similar appearance to native ones, the user
                interface cannot resemble native forms; nevertheless, native UI
                may be achieved by adding platform-specific code.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                There are two options for creating a user interface: integrating
                Xamarin and using the original native methods.Forms. If these
                forms are selected over native UI technology, they may
                simultaneously generate user interfaces for several platforms
                and share nearly all of \ their code.
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
              id="id-2"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                What is Flutter?
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Flutter is an open-source framework and UI (User Interface)
                toolkit for creating mobile and cross-platform apps. Google
                created Flutter to provide Windows, Linux, and Mac operating
                systems, as well as developers of Android and{" "}
                <a href="/services/ios-application" className="text-[#5DD1FF]">
                  custom iOS app development services
                </a>
                , with great performance and quality.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Flutter was released in May 2017 and offers a robust,
                user-friendly, effective, and straightforward SDK for creating
                mobile applications in Google's Dart programming language. Its
                extra benefit is its built-in widgets, which come with its UI
                toolkits and don't need third-party ones.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Additionally, Flutter has hot reload functionality, which allows
                developers to see the changes without restarting the apps.
                Flutter quickly rebuilds the whole framework after every
                modification, including engine rendering.
              </p>
            </div>
            <div
              id="id-3"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Flutter vs Xamarin: Key Differences
              </h2>
            </div>
            <div
              id="id-4"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Programming Language
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                The learning curve is increased if you have to pick up a new
                development language to begin using a new framework. Consider
                spending time on a framework if it forces you to learn an
                entirely new language that isn't useful outside of it.
              </p>
            </div>
            <div
              id="id-5"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Xamarin
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                C# and F# are among the new languages used by Xamarin. These are
                well-known languages with a variety of applications outside of
                Xamarin. This makes the time and money you invest in learning
                these languages worthwhile. As a developer, upskilling in C#
                will lead to many opportunities.
              </p>
            </div>
            <div
              id="id-6"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Flutter
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Conversely, Dart is a relatively recent language. It was first
                released in Chrome to work with JavaScript. Later, it focused on
                compiling JavaScript for client apps, where Flutter and Dart
                meet. Since then, Dart has gained popularity as the programming
                language used by Flutter. These days, it is hardly ever employed
                as a stand-alone device.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                The difference in learning curves between the Dart and .NET
                languages is insignificant if you are new to both. However, .NET
                languages are used more widely than Dart, and in addition to
                lock-in concerns, Dart also adds a learning curve for
                developers. Gaining knowledge of Dart will only help you when
                working on Flutter projects. In the dynamic industrial industry,
                thinking about what you desire is essential.
              </p>
            </div>
            <div
              id="id-7"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Flutter vs Xamarin: Performance
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                A crucial component of developing mobile applications is
                performance, directly impacting the app's user experience and
                perception. This is a performance comparison between Xamarin and
                Flutter:
              </p>
            </div>
            <div
              id="id-8"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Flutter
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Flutter offers nearly native performance. Flutter's Dart code is
                turned straight into native machine code, removing the
                requirement for a JavaScript bridge, which may create
                performance issues in other frameworks. Flutter's exceptional
                speed is partly a result of its rendering engine, which can
                swiftly and effectively design user interfaces.
              </p>
            </div>
            <div
              id="id-9"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Xamarin
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Because Xamarin compiles native code for iOS and Android, it
                also provides near-native performance. However, because of the
                overheads of the.NET runtime and trash collector, it could
                perform worse than Flutter and native apps in situations
                involving intricate operations or significant calculations.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Although Flutter and Xamarin offer close-to-native performance,
                one may be a better fit depending on the use case and app
                complexity. Flutter's method may offer a higher frame rate and
                more fluid graphics for apps with many graphics. Xamarin may
                perform better for apps that need a closer connection with the
                native platform.
              </p>
            </div>
            <div
              id="id-10"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Flutter vs Xamarin: Testing and Development Speed of Flutter and
                Xamarin
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Flutter's rapid reload and widget architecture may enable
                speedier UI creation, even if Xamarin and Flutter offer options
                to expedite development and provide rigorous testing
                capabilities. However, Xamarin benefits from a wider variety of
                testing tools and a direct connection with the Visual Studio
                environment. The particular requirements of the project, as well
                as the preferences and experience of the development team,
                determine which option is best.
              </p>
            </div>
            <div
              id="id-11"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Flutter
              </h3>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span>
                    The hot reload capability accelerates development. A rich
                    range of customizable widgets allows for rapid Ul
                    development.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    It offers a comprehensive suite of testing tools for
                    integration, widget, and unit testing.
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="id-12"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Xamarin
              </h3>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span>
                    Xamarin.Forms speeds up development by enabling standard Ul
                    code across iOS and Android.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    Xamarin's hot reload functionality makes faster updates and
                    feedback possible.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>testing</span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    Xamarin.UI The Visual Studio IDE incorporates Test for Ul
                    tests. Use Xamarin Test Cloud for cloud-based testing across
                    several devices. Unit testing is done with NUnit.
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="id-13"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                UI/UX design in Flutter vs Xamarin
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                An app's UI and design significantly impact user happiness and
                engagement. Let's see how Xamarin and Flutter differ in these
                areas:
              </p>
            </div>
            <div
              id="id-14"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Flutter
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Flutter is highly praised for its elegant and adaptable user
                interface features. Its extensive collection of widgets allows
                developers to construct dynamic and highly adjustable
                interfaces. Hot Reload is another unique feature that Flutter
                provides, helping with UI development by enabling developers to
                monitor UI changes in real time. Because Flutter draws widgets
                using its rendering engine, developers have complete control
                over each pixel on the screen and may produce incredibly
                customized designs.
              </p>
            </div>
            <div
              id="id-15"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Xamarin
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Using native UI controls, Xamarin can produce interfaces that
                closely resemble native apps in terms of appearance and feel.
                However, Flutter may provide more UI design freedom than
                Xamarin.Forms, which is utilized for cross-platform user
                interfaces. While Xamarin may be used to develop visually
                appealing user interfaces, it usually takes more work and
                complexity than Flutter.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Both Flutter and Xamarin allow you to create excellent user
                interfaces. However, Flutter is distinguished by its more
                configurable widgets and better UI rendering. Xamarin offers a
                more native appearance and feel but may require more effort for
                intricate interfaces. Your particular demands, including the
                intricacy of the user interface, the significance of a native
                look and feel, and the resources available, will determine which
                option is best for you.
              </p>
            </div>
            <div
              id="id-16"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Flutter vs Xamarin: Ecosystem Comparison
              </h2>
            </div>
            <div
              id="id-17"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Community
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                A development framework's community support is essential to its
                expansion and resolving issues that may arise for developers
                when utilizing it. The community comparison between Xamarin and
                Flutter is as follows:
              </p>
            </div>
            <div
              id="id-18"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Flutter
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                The Flutter community has grown significantly since Google
                launched it in 2017. As of 2024, the number of Flutter-related
                queries on sites like Stack Overflow and the vast number of
                projects on GitHub demonstrate how quickly the community is
                expanding. The Flutter community continually develops and
                maintains various plugins and packages. Google frequently
                organizes and participates in Flutter-related events, such as
                Flutter Engage, which helps the community flourish.
              </p>
            </div>
            <div
              id="id-19"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Xamarin
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Because Xamarin has existed since 2011 and was acquired by
                Microsoft in 2016, it has a solid and mature community,
                especially among .NET developers. Although Xamarin's community
                isn't growing as quickly as Flutter's, it is still active and
                strong. The Xamarin developer community contributes to Numerous
                NuGet packages and repositories on GitHub. In addition to
                frequent events and educational materials, Microsoft's support
                for Xamarin strengthens the Xamarin community. There are robust
                communities for Xamarin and Flutter, each with unique
                advantages. The Xamarin community is established, stable, and
                closely connected to .NET developers, while the Flutter
                community is active and expanding quickly.
              </p>
              <a href="#" className="w-full">
                <img
                  src="/blog-banner-2.gif"
                  alt="Blog Ads Banner"
                  className="w-full"
                />
              </a>
            </div>
            <div
              id="id-20"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                App Testing in Flutter vs Xamarin
              </h2>
            </div>
            <div
              id="id-21"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Which mobile applications Flutter power?
              </h3>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span>Google Pay</span>
                </li>
                <li className={`list-disc`}>
                  <span>Xianyu by Alibaba</span>
                </li>
                <li className={`list-disc`}>
                  <span>eBay Motors</span>
                </li>
                <li className={`list-disc`}>
                  <span>ByteDance</span>
                </li>
                <li className={`list-disc`}>
                  <span>Mazibook</span>
                </li>
                <li className={`list-disc`}>
                  <span>Nubank</span>
                </li>
                <li className={`list-disc`}>
                  <span>PUBG Mobile</span>
                </li>
                <li className={`list-disc`}>
                  <span>Toyota</span>
                </li>
                <li className={`list-disc`}>
                  <span>Kijiji</span>
                </li>
              </ul>
            </div>
            <div
              id="id-22"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Which mobile apps are driven by Xamarin?
              </h3>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span>The World Bank</span>
                </li>
                <li className={`list-disc`}>
                  <span>Seeing AI by Microsoft</span>
                </li>
                <li className={`list-disc`}>
                  <span>Alaska Airlines</span>
                </li>
                <li className={`list-disc`}>
                  <span>Academy of Motion Picture Arts and Sciences</span>
                </li>
                <li className={`list-disc`}>
                  <span>UPS</span>
                </li>
                <li className={`list-disc`}>
                  <span>Azure App by Microsoft</span>
                </li>
                <li className={`list-disc`}>
                  <span>The Postage</span>
                </li>
                <li className={`list-disc`}>
                  <span>Storyo</span>
                </li>
                <li className={`list-disc`}>
                  <span>Insightly CRM American Cancer Society</span>
                </li>
              </ul>
            </div>
            <div
              id="id-23"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                What distinctions exist between Xamarin and Flutter in mobile
                app development?
              </h2>
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Flutter and Xamarin app development
              </h3>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span>
                    Whereas Xamarin exclusively supports Visual Studio as an
                    IDE, Flutter may be used with any IDE.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    Flutter uses the Dart language for development, while
                    Xamarin uses the C# language for programming.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    Flutter could need third-party services, but Xamarin
                    doesn't.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    Installing Xamarin and Flutter is simple and hassle-free.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    The documentation for Xamarin and Flutter is well-written
                    and easy to comprehend, so developers are in for a treat.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    For more code reuse, both the Flutter and Xamarin frameworks
                    receive votes.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    Regarding project complexity, testing, and development,
                    Flutter delivers more capacity and margin for developed apps
                    than Xamarin.
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="id-24"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Flutter vs Xamarin: Development Cost Comparison
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Development time, necessary resources, and possible license fees
                are some variables to consider when comparing Flutter vs
                Xamarin's expenses. Let's examine both:
              </p>
            </div>
            <div
              id="id-25"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Flutter
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Flutter is open-source and free, and there are no licensing
                fees. Its comprehensive collection of pre-designed widgets and
                features like hot reload allow for faster development, which may
                result in reduced expenses. However, employing additional
                engineers or providing training might increase your expenses if
                your staff needs to learn Dart, the programming language used by
                Flutter.
              </p>
            </div>
            <div
              id="id-26"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Xamarin
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Additionally, Xamarin is free for open-source projects and small
                teams. However, larger businesses might need to pay for a Visual
                Studio membership. Compared to separate native development,
                Xamarin allows you to leverage a single tech stack (C# and.NET)
                across numerous platforms, potentially saving money. Because C#
                and.NET are so prominent in the business, it may be simpler to
                locate Xamarin developers than Flutter developers. On the other
                hand, more experienced Xamarin developers could earn more money.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                It's crucial to remember that some variables, such as the
                project's complexity and the location of the app development
                company, affect the development cost. As a result, it is
                essential to account for them when calculating development
                expenses.
              </p>
            </div>
            <div
              id="id-27"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Integration Capabilities of Flutter and Xamarin
              </h2>
            </div>
            <div
              id="id-28"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                App examples
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                You probably use these frameworks every day without even
                realizing it, and many well-known firms have used them to
                develop their apps. Here are a few examples of popular apps
                created with these frameworks.
              </p>
            </div>
            <div
              id="id-29"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Flutter
              </h3>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span>
                    Flutter was used to develop the Google Ads mobile platform,
                    which lets marketers control and improve their ad campaigns
                    from their mobile devices.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    Alibaba, the global trading division of Alibaba Group,
                    employed Flutter to provide a stunning user experience with
                    fluid animations for its Xianyu app.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    Reflectly is an AI-driven diary app that takes advantage of
                    Flutter's robust user interface development capabilities.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    Flutter was used to develop the official app for the
                    Broadway musical Hamilton. The app provides a goods store,
                    show-related information, daily lotteries, and more.
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="id-30"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Xamarin
              </h3>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span>
                    Xamarin is used by the Microsoft Azure management console's
                    Azure Mobile App, enabling customers to manage their Azure
                    resources while on the road.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    The UPS mobile app, which offers consumers a smooth delivery
                    tracking experience, is built utilizing Xamarin.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    Alaska Airlines, Xamarin developed the award-winning mobile
                    app for Alaska Airlines, which includes functions like
                    flight booking and status checking.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span>
                    Xamarin was used to create the BBC Good Food recipe app,
                    which offers a wide selection of recipes from the BBC Good
                    Food team.
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="id-31"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                So, Flutter vs Xamarin? Which Framework Is Ideal for New
                Businesses?
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Given that these two frameworks have been used for some time,
                many developers are asking themselves this issue. It's easy to
                understand why each framework has unique advantages that make it
                appealing depending on the kind of software you're developing.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                The kind of app you wish to make will determine the answer to
                this question. Using a single codebase, developers may create
                native apps in C#, Swift, or Objective-C with the help of{" "}
                <a
                  href="/services/cross-platform-application"
                  className="text-[#5DD1FF]"
                >
                  cross-platform mobile app development
                </a>{" "}
                tools like Xamarin and Flutter. The primary distinction between
                the two is how they put together their apps. IL2CPP, which
                Xamarin uses to compile its apps, performs better in Android
                Studio and iOS Simulator than the default JIT compiler. Because
                of this, it's an excellent tool for creating games and other
                high-performance apps where user happiness depends on quickness.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Compared to Flutter, Xamarin offers a few benefits. Among these
                is that Xamarin performs better than Flutter on low-end devices,
                including smartphones with 1GB of RAM or less. Using Visual
                Studio Code (VS Code) rather than Android Studio (AS) has
                additional benefits. Compared to AS for Java or Kotlin, Visual
                Studio Code offers far superior help debugging C# code. Since
                Xamarin has access to native APIs (application programming
                interfaces) and can fully utilize them, it is, without a doubt,
                the best when it comes to performance.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                One of Xamarin's drawbacks is that it offers fewer customization
                options than Flutter. What you want to achieve with your app
                will determine whether you should utilize Flutter or Xamarin.
                For instance, since Flutter was created especially for this use
                case, it could be preferable to utilize it if you want an
                application with many custom views and animations.
              </p>
              <a href="#" className="w-full">
                <img
                  src="/blog-banner-3.gif"
                  alt="Blog Ads Banner"
                  className="w-full"
                />
              </a>
            </div>
            <div
              id="id-32"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Concluding remarks on Flutter vs Xamarin
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                You should ask yourself which framework you feel most at ease
                with. Xamarin is the best option if you are a C# developer.
                However, Flutter would be the ideal option for your next project
                if you have prior expertise with Java or Kotlin. Whether or not
                you want an open-source project is another thing to think about.
                Currently, Flutter has more community-driven features than
                Xamarin.
              </p>
            </div>
            <div
              id="id-33"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Frequently Asked Questions
              </h2>
              {blog11FAQData.map((item, index) => {
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

export default BlogInner11Section;
