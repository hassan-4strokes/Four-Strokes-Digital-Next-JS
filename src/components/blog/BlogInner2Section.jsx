"use client";

import { useState } from "react";
import { blog2FAQData } from "@/data/faq/BlogFAQData";
import BlogFAQSection from "@/utils/faq/BlogFAQSection";

const BlogInner2Section = ({ blogTableOfContentData }) => {
  const [dropDown, setDropDown] = useState(false);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [],
  };

  blog2FAQData.forEach((item) => {
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
                What is Flutter?
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Being an open-source framework, Flutter Developer is a powerful
                tool that lets developers build gorgeous mobile applications at
                unbelievable speed and efficiency. Built on Google's Dart
                programming language, it is a modern approach to app building
                like JavaScript or TypeScript, but with a twist: its reactive
                programming model.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                That is, you will not have to worry about updating the UI while
                writing your application and doing this manually, as Flutter
                will take care of that and make your development smoother and
                more intuitive.
              </p>
            </div>
            <div
              id="id-2"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Why Flutter?
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                The most compelling feature of Flutter might be a hot reload.
                Visualize coding and immediately see changes instantiated in
                your application; you do not need to wait for long compile
                times. It quickens the rate of development while making the
                process not only fast but also fun.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                But what makes Flutter Mobile Apps truly sparkly are its
                widgets. Think of them as app LEGO blocks. You have a rich set
                of pre-designed widgets that can be very easily customized. From
                complex navigation systems to scrolling lists and sliders, these
                widgets save you precious time and let you focus on what
                matters: the business logic and user experience of your app.
              </p>
            </div>
            <div
              id="id-3"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Performance That Impresses
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                It was particularly strong in performance, taking advantage of
                Skia, its graphics engine. This gives the flexibility to draw
                every pixel on the screen, allowing it to enjoy smooth
                animations at 60 frames per second on relatively less powerful
                devices. This guarantees that your application feels responsive
                and engaging and keeps users hooked.
              </p>
            </div>
            <div
              id="id-4"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                As a Thriving Community with Resources
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                It's more than a framework; it's a movement. You have a gigantic
                growing community of developers, and with that, you have oceans
                at your fingertips in terms of resources. Always complete
                documentation and a packaging library and plugin repository,
                making it easy to add features such as maps, networking, and
                local storage to your app. The spirit of the community going
                forward means you'll never feel alone in your development
                journey.
              </p>
            </div>
            <div
              id="id-5"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Exceptional Benefits of Flutter: Revolutionizing Mobile
                Application Development
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Google's Flutter is changing the game for mobile app developers.
                This powerful, fully open-source framework lets you build
                fantastic, high-performance applications for iOS, Android, and
                the web, all from a single codebase. Let's review the
                outstanding features that make Flutter one of the top
                development tools.
              </p>
              <a href="#" className="w-full"><img src="/blog-banner-1.gif" alt="Blog Ads Banner" className="w-full" /></a>
            </div>
            <div
              id="id-6"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                About Dart Programming Language-A Perfect Match
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                The heart of Flutter lies in Dart, a modern programming language
                with qualities like Java and JavaScript. Its model of reactive
                programming is revolutionary for UI development. Any change to
                code will refresh the UI instantly, making its workflow smoother
                and faster. Dart is well-suited to the needs of today's app
                development and provides a responsive and agile environment for
                development.
              </p>
            </div>
            <div
              id="id-7"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Hot Reload: Instant Gratification
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                One of Flutter's crown jewels is its Hot Reload feature. With
                this feature, you can change your code and see the changes in
                real-time without a restart. This means phenomenal efficiency
                boosts when fine-tuning UI designs or debugging, as hot reload
                keeps one in the creative flow with enormous speeding up of the
                development process and quick iterations.
              </p>
            </div>
            <div
              id="id-8"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Treasure Trove of Pre-Designed Widgets
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                This is one of the main reasons Flutter is going to rock: its
                rich library of pre-designed widgets. You can go from basic UI
                components such as buttons and text fields to complex elements
                like toolbars and scrollable lists. These widgets are intended
                to adhere strictly to Material and Cupertino guidelines, so your
                app will always feel native on any given platform. Now, with the
                features to customize whatever look and functionality you want,
                you can make the UI stand out even more.
              </p>
            </div>
            <div
              id="id-9"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Unparalleled Performance and Seamless Animations
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Because Flutter Mobile Apps uses the Skia graphics engine, your
                apps can have silky, high-performance animations at 60 frames
                per second on less expensive devices. Direct rendering makes for
                smooth interactions and visually pleasing content, which all
                combine to boost overall responsiveness and polish.
              </p>
            </div>
            <div
              id="id-10"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Thriving Community and Heaps of Resources
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                A big boon of Flutter is the passionate and ever-growing
                community of developers supporting the cause - it offers as much
                as you can lay your hands on. Tutorials, guides, forums, and
                Stack Overflow discussions are at the tips of your fingers,
                gathering a plethora of knowledge to help with your Flutter
                journey. It's easy to tap into Flutter's vast capabilities
                through its comprehensive documentation. Plus, it has a rich
                ecosystem of packages and plugins for quick integration of
                features such as maps, networking, and storage.
              </p>
            </div>
            <div
              id="id-11"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Cross-Platform Development: One Codebase, Many Platforms
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Flutter supports{" "}
                <a
                  href={"/services/android-application"}
                  className="text-[#5DD1FF]"
                >
                  custom android development
                </a>
                , so you can write the code once and run it on both iOS and
                Android platforms. This cannot only save your development time
                but also help you save time and resources on maintenance and
                updates.
              </p>
            </div>
            <div
              id="id-12"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Customizable and Adaptive UI
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                You are permitted to add flexibility because flexibility is the
                essence of Flutter's widgets, enabling you to create visually
                stunning and adaptive interfaces. Whether you are implementing
                Material Design or going for your look, Flutter gives you the
                flexibility to achieve an experience that looks great on any
                device, its built-in layout adaptability shining through as your
                app's screens change with screen size and orientation.
              </p>
            </div>
            <div
              id="id-13"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Integration with Existing Code
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                You can use Flutter to update your current Android and iOS apps
                with app updates. Alternatively, you can integrate Flutter into
                existing apps by integrating it easily with your current Android
                or iOS apps or using platform channels to connect with native
                functionalities. Integration of this kind will raise the level
                of your development process, leveraging Flutter in line with
                other tools and workflows in which you are already invested.
              </p>
            </div>
            <div
              id="id-14"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Fast Time to Market: Get Your Ideas Out There
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Flutter Mobile Apps allows you to express your vision without
                hassle and in an extremely rapid manner. Powered by a hot reload
                and an all-inclusive set of tools and widgets, you streamline
                the development cycle and get a polished application to market
                much faster. The rapid iteration ability ensures that you adapt
                to changes very quickly and helps keep you even farther ahead of
                the curve at deadlines.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                It is not only a framework but a complete approach to changing
                the way mobile applications are built. A product with such great
                features and people backing it makes Flutter there to lead the
                way and build the next generation of mobile applications.
              </p>
            </div>
            <div
              id="id-15"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                The Key Differentiation Between React Native and Flutter:
                Rendering Approaches
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Many popular frameworks, such as React Native and Flutter, are
                always in the limelight in mobile app development. While both
                are soundly capable, rendering components is found to be the
                single most important difference between the two.
              </p>
              <a href="#" className="w-full"><img src="/blog-banner-2.gif" alt="Blog Ads Banner" className="w-full" /></a>
            </div>
            <div
              id="id-16"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Flutter: Independent Canvas
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                The philosophy of Flutter Mobile Apps is altogether different as
                it renders all its components on its canvas. That means it
                controls all of the visually relevant things in the app,
                independent of the underlying platform. This is why Flutter apps
                are not impacted by whatever the native components choose to do
                during a native upgrade-even iOS 16. Because Flutter's approach
                ensures your app's design will be predictable and consistent,
                you will appreciate it when you're in control of how your
                components look and behave.
              </p>
            </div>
            <div
              id="id-17"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                React Native: Seamless Integration with Native Components
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                <span className="font-bold">
                  React native mobile app development
                </span>{" "}
                takes the opposite approach by natively rendering JavaScript
                components. That means changes and updates to native components
                will automatically apply to your React Native applications, so
                therefore, your app can 'catch up' with the latest design trends
                without any extra effort. If you enjoy keeping up with the
                updates on platforms and have an interest in keeping your app in
                line with the latest native styles, React Native makes this
                easy.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                However, if you want to use a different look than the ones
                natively introduced, React Native gives you an option to disable
                these automatic updates. In this way, you can style your
                components according to your view.
              </p>
            </div>
            <div
              id="id-18"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                The Bottom Line: Choose Your Path
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Flutter vs React Native which to use? The decision is yours,
                which one you prefer for your development purposes. If you need
                consistent and controlled design experience, then Flutter
                remains the same when it's upgraded natively. However, if what
                you want is an app to automatically take all the new native
                designs on components, React Native has a bright spot. In either
                case, both frameworks benefit each developer differently
                according to their different choices which comprise of what they
                prefer them to be, so weigh them and hit a path according to
                your vision.
              </p>
            </div>
            <div
              id="id-19"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                A Step-by-Step Guide to Creating Your First Flutter App
              </h2>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Flutter mobile app development roadmap is an amazing framework
                that makes mobile app development much simpler. It gives you one
                code base you can run both Android as well as iOS. So, are you
                ready to start your Flutter journey? Let's break it down into a
                series of steps for creating a mobile application!
              </p>
            </div>
            <div
              id="id-20"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Step 1: Installation of Flutter
              </h3>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span className="font-semibold">
                    Download the Flutter SDK:{" "}
                  </span>
                  <span>
                    First, you'll need to install the Flutter SDK on your
                    system. Go to the Flutter installation page, download the
                    version appropriate for your operating system—macOS or
                    Linux- and unpack the SDK, saving it somewhere handy on your
                    machine.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Extract and Set Up: </span>
                  <span>
                    On extraction, you will be asked to assign the folder
                    containing the SDK as your Flutter directory. Then, you
                    would have to add the flutter/bin directory to your system's
                    PATH environment variable. This way, the Flutter commands
                    will be executed in any terminal, making the entire
                    development process much smoother.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Choose an Editor: </span>
                  <span>
                    There are also options, such as choosing the right code
                    editor, which will be crucial in your journey to
                    development. Other options include Android Studio and VS
                    Code, which have the best integration features for Flutter.
                    It would help if you also considered the familiarity of the
                    tools and the functionalities that they provide when picking
                    out the best one for you.
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="id-21"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Step 2: Install Necessary Plugins
              </h3>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span className="font-semibold">Open Your IDE: </span>
                  <span>
                    To begin, open your chosen IDE. Then, go to the options menu
                    and locate the area with the word "Plugins."
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Find and Configure: </span>
                  <span>
                    Then, in the Plugins Marketplace, you'll find and install
                    the Flutter plugin. If the Dart plugin does not install
                    automatically, you will do that yourself as well. This will
                    add some finesse to your development experience and provide
                    some crucial tools for Flutter coding.
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="id-22"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Step 3: Create a New Flutter Project
              </h3>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span className="font-semibold">Start a New Project: </span>
                  <span>
                    In your IDE, select 'Create a new Flutter project' and then
                    choose "Flutter Application."
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">
                    Configure Your Project:{" "}
                  </span>
                  <span>
                    Simply enter a name for your project, such as "hello_world."
                    Then, select the path to the Flutter SDK and a unique
                    package or domain name.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Done Setup: </span>
                  <span>
                    Click 'Finish' to create your project, and relax as your IDE
                    does the rest!
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="id-23"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Step 4: Your First Code
              </h3>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span className="font-semibold">Change the Main File: </span>
                  <span>
                    Open up your lib/main.dart file and start coding now.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Example Code: </span>
                  <span>
                    Launch your app with an old-fashioned "Hello World." Replace
                    the default code with this straightforward snippet.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">Run Your Application: </span>
                  <span>
                    It is now time to run your app. Use your IDE's built-in
                    tools to compile and run your project, and you will see your
                    'Hello, World!' messages pop out.
                  </span>
                </li>
              </ul>
            </div>
            <div
              id="id-24"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-3xl text-[#5DD1FF]">
                Step 5: Enhancing the Functionality of Your App
              </h3>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                You now have a simple app up and running; it's now time to add
                functionality to the application. You may want to consider
                adding features such as:
              </p>
              <ul className="text-sm xl:text-base 2xl:text-lg font-['Creato_Display'] pl-5">
                <li className={`list-disc`}>
                  <span className="font-semibold">Database Integration: </span>
                  <span>
                    Integrate services to manage and store data efficiently.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">API Connectivity: </span>
                  <span>
                    Implement RESTful APIs to connect the application with
                    external services and data sources.
                  </span>
                </li>
                <li className={`list-disc`}>
                  <span className="font-semibold">UI/UX Design: </span>
                  <span>
                    Care about building a user-friendly interface which is both
                    aesthetically pleasant and security-aware. When expanding
                    the functionality of your application, remember best
                    practice scenarios for implementing scalability and
                    performance.
                  </span>
                </li>
              </ul>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                A combination that runs flutter mobile app with laravel api lets
                the front-end and back-end intercommunicate well. The reactive
                UI of Flutter permits silky smooth user experiences, while a
                robust framework in Laravel perfectly lets there be construction
                of RESTful APIs. In this setting, it is possible to handle data
                efficiently and hence increases the rate of development. It
                allows one to have high-performance cross-platform applications.
              </p>
            </div>
            <div
              id="id-25"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Conclusion
              </h2>
              <a href="#" className="w-full"><img src="/blog-banner-3.gif" alt="Blog Ads Banner" className="w-full" /></a>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Though creating a flutter & dart essentials-built mobile apps
                like a pro project may look straightforward, the most critical
                challenge often happens when strong features and functionalities
                have to be incorporated into an application. In case you are a
                new web or mobile application developer, this landscape can be
                intimidating. So, in such circumstances, the best idea would be
                to hire experts to design your Flutter app perfectly.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                Looking for expert Flutter developers? We're here to help! Our
                team will give you some of the most high-performing, native-like
                Flutter applications while also keeping you updated on what's
                happening in terms of the latest technology trends in the
                Flutter ecosystem.
              </p>
              <p className="text-sm xl:text-base 2xl:text-lg tracking-wide font-['Creato_Display']">
                An{" "}
                <a
                  href={"/services/cross-platform-application"}
                  className="text-[#5DD1FF]"
                >
                  android and ios app developer
                </a>{" "}
                specializes in creating applications for both mobile platforms.
                They are proficient in programming languages such as Java and
                Kotlin for Android, and Swift or Objective-C for iOS. As an{" "}
                <a
                  href={"/services/ios-application"}
                  className="text-[#5DD1FF]"
                >
                  ios application developer
                </a>
                , they focus on delivering user-friendly and efficient apps that
                enhance the user experience. These developers work closely with
                designers and stakeholders to turn concepts into functional
                applications while staying updated with the latest industry
                trends and technologies.
              </p>
            </div>
            <div
              id="id-27"
              className="inner-section w-full flex flex-col gap-3 -mt-5"
            >
              <h2 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#369DC5]">
                Frequently Asked Questions
              </h2>
              {blog2FAQData.map((item, index) => {
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

export default BlogInner2Section;
