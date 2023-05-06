import DarkModeToggle from "@src/components/darkModeToggle";
import { useDarkMode } from "@src/hooks/useTheme";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FiMoon, FiSun } from "react-icons/fi";
import Logo from "@src/components/logo";
import BuyMeCoffeeButton from "@src/components/buyMeCoffe";

const Header = () => {
  return <div className="fixed top-0 h-10 w-full bg-red-500"></div>;
};

const LandingPage = () => {
  const [isDark] = useDarkMode();

  return (
    <div className={`w-full  ${isDark ? "bg-[#202123]" : "bg-white"}`}>
      <div
        className={`site-content  ${
          isDark ? "bg-[#202123]" : "bg-white"
        } overflow-hidden max-w-[1400px] ml-auto mr-auto`}
        data-testid="site-content"
      >
        {/* <section
          className={` ${
            isDark ? "bg-[#202123]" : "bg-white"
          } }  pt-8 overflow-hidden sm:pt-12 lg:relative `}
        >
          
        </section> */}
        <div
          className={`flex items-center px-4 justify-between py-8 border-b ${
            isDark ? "border-[#444654]" : "border-gray-100"
          } `}
        >
          <Logo size={40} showTitle />
          <div className="flex flex-row">
            {/* <BuyMeCoffeeButton /> */}
            <DarkModeToggle />
          </div>
        </div>
        <div className="px-2 flex flex-1 flex-col">
          <section
            id="s1e7qf8mst"
            className={` ${
              isDark ? "bg-[#202123]" : "bg-white"
            } }  pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-24 xl:py-36 2xl:py-48`}
            // sectionName="hero"
            //   imagestretch="true"
            //   sectioncomponent="Hero"
            //   sortorder="0"
          >
            <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
              <div className="relative z-[1]">
                <div className="">
                  <div className=" sm:max-w-xl">
                    <h1
                      className={`text-4xl font-black tracking-tight ${
                        isDark ? "text-white" : "text-gray-900"
                      } sm:text-6xl md:text-7xl`}
                    >
                      Smart Hiring Starts Here
                      <span
                        className={`${
                          isDark ? "text-white" : "text-gray-900"
                        } text-primary`}
                      >
                        .
                      </span>
                    </h1>
                    <h2
                      className={`mt-6 text-lg ${
                        isDark ? "text-white" : "text-gray-500"
                      }  sm:text-xl`}
                    >
                      Maximize your hiring efficiency with AI-powered resume
                      analysis and our interactive chat page.
                    </h2>
                  </div>
                  <div className="mt-10 space-y-4">
                    <div
                      id="ile-1"
                      className="mt-4 sm:max-w-lg"
                      data-v-app=""
                      // hydrated=""
                    >
                      {/* <form className="grid gap-2 grid-cols-1 sm:w-full sm:flex sm:items-center sm:flex-wrap mt-4 sm:max-w-lg">
                      <label htmlFor="hero-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="hero-email"
                        type="email"
                        className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary focus-visible:ring-primary flex-1"
                        required
                        placeholder="Enter your email..."
                      /> */}
                      <div>
                        <Link
                          href="/chat"
                          className={`rounded-full bg-orange-500 hover:bg-orange-700 shadow-md py-[12px] md:py-[14px] px-28 md:px-32 text-md md:text-xl xl:text-xxl text-white font-semibold`}
                          type="submit"
                        >
                          Start Chat
                        </Link>
                      </div>
                      {/* </form> */}
                    </div>
                  </div>
                  {/* <!-- Social Proofing --><!-- User Review --> */}
                  <div className="mt-6">
                    <div className="inline-flex items-center">
                      <img
                        src="https://storage.googleapis.com/mixo-files/public/img/avatars/female-12.png"
                        alt="Teresa Lia"
                        className="object-cover inline-block mr-3 border-2 border-primary rounded-full sm:mr-2 h-10 w-10"
                      />
                      <div>
                        <p
                          className={`sm:pl-2.5  font-black tracking-tight ${
                            isDark ? "text-white" : "text-gray-800"
                          }  text-sm max-w-sm`}
                        >
                          ”Talent Scan has helped us save so much time in our
                          recruitment process, and the summaries are spot-on.”
                        </p>
                        <p className="sm:pl-2.5 text-base font-bold text-gray-500">
                          Teresa Lia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:pl-6">
              <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="hidden sm:block">
                  <div className="absolute inset-y-0 w-screen left-1/2 bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
                  <svg
                    className="absolute -mr-3 top-8 right-1/2 lg:m-0 lg:left-0"
                    width="404"
                    height="392"
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        ></rect>
                      </pattern>
                    </defs>
                    <rect
                      width="404"
                      height="392"
                      fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                    ></rect>
                  </svg>
                </div>
                <div className="relative pl-4 ml-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:flex lg:items-center xl:pl-12">
                  <img
                    className="w-full rounded-l-3xl lg:w-auto 2xl:h-full 2xl:max-w-none 2xl:rounded-3xl"
                    src="https://images.unsplash.com/photo-1542435503-956c469947f6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMzczODV8MHwxfHNlYXJjaHw0fHxyZXN1bWV8ZW58MHwwfHx8MTY4Mjc2MDg3MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                    alt="Resume Analyzer"
                  />
                </div>
              </div>
            </div>
          </section>
          <section
            className={`${
              isDark ? "bg-[#202123]" : "bg-white"
            } relative pt-16 pb-32 overflow-hidden  space-y-24`}
            //   sectionName="features"
            id="8p9e3nl6nt"
            sectioncomponent="Features"
            sortorder="1"
            site-name="Resume Analyzer"
            site-id="6hdJYjD7ces5HzWSl0KM"
            site-logo-url="https://storage.googleapis.com/mixo-files/logos/resumeAnalyzer-1682767628468.svg"
            site-logo-size="md"
            hide-site-name="false"
          >
            <div>
              <div className="lg:mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24">
                <div className="lg:col-start-2 lg:mx-0 lg:px-0 lg:pr-8 max-w-xl px-4 mx-auto space-y-6 sm:px-6 lg:py-28 xl:py-32 2xl:mx-0">
                  {/* <!-- Feature --> */}
                  <div>
                    <h2
                      className={`text-4xl font-extrabold tracking-tight ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Accurate resume summaries
                      <span
                        className={`text-primary ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        .
                      </span>
                    </h2>
                    <p
                      className={`mt-4 text-lg leading-relaxed ${
                        isDark ? "text-white" : "text-gray-500"
                      } sm:text-xl`}
                    >
                      Talent Scan uses cutting-edge AI technology to provide
                      accurate and insightful summaries of candidate resumes, so
                      you can find the best fit for your organization.
                    </p>
                  </div>
                  {/* <!-- CTA --> */}
                  <div></div>
                  {/* <!-- Review --> */}
                </div>
                {/* <!-- Image --> */}
                <div className="lg:col-start-1 mt-12 sm:mt-16 lg:mt-0">
                  <div
                    className={`pr-4 -sm:ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex lg:items-center`}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMzczODV8MHwxfHNlYXJjaHw3fHxyZXN1bWV8ZW58MHwwfHx8MTY4Mjc2MDg3MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                      className="lg:right-0 rounded-r-2xl w-full 2xl:max-h-[44rem]"
                      alt="Accurate resume summaries"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24">
                <div className="lg:mx-auto lg:max-w-3xl xl:pl-12 2xl:pl-20 2xl:justify-self-end max-w-xl px-4 mx-auto space-y-6 sm:px-6 lg:py-28 xl:py-32 2xl:mx-0">
                  {/* <!-- Feature --> */}
                  <div>
                    <h2
                      className={`text-4xl font-extrabold tracking-tight ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Time-saving
                      <span
                        className={`${
                          isDark ? "text-white" : "text-gray-900"
                        } text-primary`}
                      >
                        .
                      </span>
                    </h2>
                    <p
                      className={`mt-4 text-lg leading-relaxed ${
                        isDark ? "text-white" : "text-gray-500"
                      } sm:text-xl`}
                    >
                      Our tool saves you valuable time by automating the
                      time-consuming task of resume screening, allowing you to
                      focus on other important aspects of your recruitment
                      process.
                    </p>
                  </div>
                  {/* <!-- CTA --> */}
                  <div></div>
                  {/* <!-- Review --> */}
                </div>
                {/* <!-- Image --> */}
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="pl-4 sm:-mr-48 sm:-mr-6 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex lg:items-center">
                    <img
                      src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMzczODV8MHwxfHNlYXJjaHwzfHxyZXN1bWV8ZW58MHwwfHx8MTY4Mjc2MDg3MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                      className="rounded-l-2xl lg:left-0 w-full 2xl:max-h-[44rem]"
                      alt="Time-saving"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24">
                <div className="lg:col-start-2 lg:mx-0 lg:px-0 lg:pr-8 max-w-xl px-4 mx-auto space-y-6 sm:px-6 lg:py-28 xl:py-32 2xl:mx-0">
                  {/* <!-- Feature --> */}
                  <div>
                    <h2
                      className={`text-4xl font-extrabold tracking-tight ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Error-free<span className="text-primary">.</span>
                    </h2>
                    <p
                      className={`mt-4 text-lg leading-relaxed ${
                        isDark ? "text-white" : "text-gray-500"
                      } sm:text-xl`}
                    >
                      Say goodbye to human errors that occur during manual
                      screening - our AI-powered tool provides error-free
                      screening results, giving you confidence in your hiring
                      decisions.
                    </p>
                  </div>
                  {/* <!-- CTA --> */}
                  <div></div>
                  {/* <!-- Review --> */}
                </div>
                {/* <!-- Image --> */}
                <div className="lg:col-start-1 mt-12 sm:mt-16 lg:mt-0">
                  <div className="pr-4 -sm:ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex lg:items-center">
                    <img
                      src="https://images.unsplash.com/photo-1520970014086-2208d157c9e2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMzczODV8MHwxfHNlYXJjaHw4fHxyZXN1bWV8ZW58MHwwfHx8MTY4Mjc2MDg3MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                      className="lg:right-0 rounded-r-2xl w-full 2xl:max-h-[44rem]"
                      alt="Error-free"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className={`py-12 overflow-hidden ${
              isDark ? "bg-[#202123]" : "bg-white"
            }   md:py-20`}
            //   sectionName="testimonials"

            id="aq875p9lzj"
            //   sectioncomponent="Testimonials"
            //   sortorder="2"
            site-name="Resume Analyzer"
            site-id="6hdJYjD7ces5HzWSl0KM"
            site-logo-url="https://storage.googleapis.com/mixo-files/logos/resumeAnalyzer-1682767628468.svg"
            site-url="https://www.mixo.io/site/resume-analyzer-fbe4y"
            site-logo-size="md"
            hide-site-name="false"
            reselecting-images="false"
          >
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
              <svg
                className="absolute transform top-full right-full translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2 rotate-3"
                width="404"
                height="404"
                fill="none"
                viewBox="0 0 404 404"
                role="img"
                aria-labelledby="svg-squares"
              >
                <title id="svg-squares">squares</title>
                <defs>
                  <pattern
                    id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      fill={`${isDark ? "white" : "black"} `}
                    ></rect>
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="404"
                  fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
                ></rect>
              </svg>

              <div className="relative ">
                <blockquote>
                  <div
                    className={`max-w-3xl mx-auto text-xl font-bold leading-7 text-center ${
                      isDark ? "text-white" : "text-gray-900"
                    } md:leading-10 md:text-3xl text-shadow-sm`}
                  >
                    <p>
                      "It's amazing how much more accurate and efficient our
                      recruitment process has become since implementing Resume
                      Analyzer."
                    </p>
                  </div>
                  <footer className="mt-8">
                    <div className="md:flex md:items-center md:justify-center">
                      <div className="md:flex-shrink-0">
                        <img
                          src="https://storage.googleapis.com/mixo-files/public/img/avatars/female-6.png"
                          className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover"
                          alt="Testimonial"
                        />
                      </div>
                      <div className="mt-3 text-center md:mt-0 md:ml-3 md:flex md:items-center text-shadow-sm">
                        <div
                          className={`text-lg font-medium ${
                            isDark ? "text-white" : "text-gray-500"
                          } `}
                        >
                          Rosa Tinkler
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </section>
          <section
            className="relative py-12 sm:py-20 md:py-24 lg:py-32"
            //   sectionname="cta"
            id="j1hyy41de4"
            //   sectioncomponent="Cta"
            //   sortorder="4"
            site-name="Resume Analyzer"
            site-logo-url="https://storage.googleapis.com/mixo-files/logos/resumeAnalyzer-1682767628468.svg"
            site-url="https://www.mixo.io/site/resume-analyzer-fbe4y"
            site-logo-size="md"
            hide-site-name="false"
            reselecting-images="false"
            data-v-77b1cd82=""
          >
            <div aria-hidden="true" className="block" data-v-77b1cd82="">
              <div
                className={`absolute inset-y-0 left-0 w-1/2 ${
                  isDark ? "bg-black" : "bg-gray-50"
                }  rounded-r-3xl mb-12`}
                data-v-77b1cd82=""
              ></div>
              <svg
                className="absolute -ml-3 top-8 left-1/2"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
                data-v-77b1cd82=""
              >
                <defs data-v-77b1cd82="">
                  <pattern
                    id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                    data-v-77b1cd82=""
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                      data-v-77b1cd82=""
                    ></rect>
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
                  data-v-77b1cd82=""
                ></rect>
              </svg>
            </div>
            <div
              className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
              data-v-77b1cd82=""
            >
              <div
                className={`relative px-6 py-10 overflow-hidden  ${
                  isDark ? "bg-[#202123]" : "bg-white"
                } border-primary border-2 shadow-xl rounded-2xl sm:px-12 sm:py-20`}
                data-v-77b1cd82=""
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                  data-v-77b1cd82=""
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                    data-v-77b1cd82=""
                  >
                    <path
                      className="text-primary/5"
                      fill="currentColor"
                      d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                      data-v-77b1cd82=""
                    ></path>
                    <path
                      className="text-primary/10"
                      fill="currentColor"
                      d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                      data-v-77b1cd82=""
                    ></path>
                  </svg>
                </div>
                <div className="relative" data-v-77b1cd82="">
                  <div
                    className="flex flex-wrap justify-center w-full mx-auto sm:max-w-3xl"
                    data-v-77b1cd82=""
                  >
                    <img
                      src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="User ben"
                      className="user-avatar rounded-full h-8 w-8 mx-2 md:h-12 md:w-12 object-cover object-top"
                      data-v-77b1cd82=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
                      alt="User beth"
                      className="user-avatar rounded-full h-8 w-8 mx-2 md:h-12 md:w-12 object-cover object-top"
                      data-v-77b1cd82=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1598257006463-7c64a5a538cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt="User claire"
                      className="user-avatar rounded-full h-8 w-8 mx-2 md:h-12 md:w-12 object-cover object-top"
                      data-v-77b1cd82=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="User iwan"
                      className="user-avatar rounded-full h-8 w-8 mx-2 md:h-12 md:w-12 object-cover object-top"
                      data-v-77b1cd82=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                      alt="User lori"
                      className="user-avatar rounded-full h-8 w-8 mx-2 md:h-12 md:w-12 object-cover object-top"
                      data-v-77b1cd82=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="User mali"
                      className="user-avatar rounded-full h-8 w-8 mx-2 md:h-12 md:w-12 object-cover object-top"
                      data-v-77b1cd82=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80"
                      alt="User mi"
                      className="user-avatar rounded-full h-8 w-8 mx-2 md:h-12 md:w-12 object-cover object-top"
                      data-v-77b1cd82=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                      alt="User nim"
                      className="user-avatar rounded-full h-8 w-8 mx-2 md:h-12 md:w-12 object-cover object-top"
                      data-v-77b1cd82=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                      alt="User san"
                      className="user-avatar rounded-full h-8 w-8 mx-2 md:h-12 md:w-12 object-cover object-top"
                      data-v-77b1cd82=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1566218546931-cd8f7ce1deb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="User sanjid"
                      className="user-avatar rounded-full h-8 w-8 mx-2 md:h-12 md:w-12 object-cover object-top"
                      data-v-77b1cd82=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="User steph"
                      className="user-avatar rounded-full h-8 w-8 mx-2 md:h-12 md:w-12 object-cover object-top"
                      data-v-77b1cd82=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1548661211-e559d8c17537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                      alt="User zak"
                      className="user-avatar rounded-full h-8 w-8 mx-2 md:h-12 md:w-12 object-cover object-top"
                      data-v-77b1cd82=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="User judith"
                      className="user-avatar rounded-full h-8 w-8 mx-2 md:h-12 md:w-12 object-cover object-top"
                      data-v-77b1cd82=""
                    />
                  </div>
                  <div
                    className="mt-6 sm:mt-12 sm:text-center"
                    data-v-77b1cd82=""
                  >
                    <h2
                      className={`text-2xl text-center font-black tracking-tight ${
                        isDark ? "text-white" : "text-gray-900"
                      } 0 sm:text-4xl md:text-5xl md:leading-tight md:max-w-4xl md:mx-auto`}
                      data-v-77b1cd82=""
                    >
                      Try Talent Scan today and streamline your recruitment
                      process
                      <span className="text-primary" data-v-77b1cd82="">
                        .
                      </span>
                    </h2>
                  </div>
                  <div
                    className="mt-6 sm:mt-12 sm:mx-auto sm:max-w-lg flex flex-col items-center"
                    data-v-77b1cd82=""
                  ></div>
                  <div
                    id="ile-3"
                    className="mt-6 sm:mt-12 sm:mx-auto sm:max-w-lg"
                    data-v-app=""
                    //   hydrated=""
                  >
                    {/* <form className="grid gap-2 grid-cols-1 sm:w-full sm:flex sm:items-center sm:flex-wrap mt-6 sm:mt-12 sm:mx-auto sm:max-w-lg">
                      <label htmlFor="cta-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary focus-visible:ring-primary flex-1"
                        required
                        placeholder="Enter your email..."
                      />
                      <div>
                        <button
                          // to=""
                          className=" bg-white px-10 py-3 rounded-md font-bold text-md"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer
        className={`${
          isDark
            ? "bg-[#202123] border-[#444654] text-white"
            : "text-gray-900 bg-white border-gray-200"
        }  font-semibold py-4 px-6 border-t`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <p>
            Copyright © {new Date().getFullYear()} Talent Scan All Rights
            Reserved.
          </p>
          <div>
            <a href="#" className="mr-4 hover:text-gray-400">
              Terms of Use
            </a>
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
