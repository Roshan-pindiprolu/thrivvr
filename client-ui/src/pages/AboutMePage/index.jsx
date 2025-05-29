import Navigation from "../../components/Navigation";
import { AdjustmentsHorizontalIcon, FireIcon, ArrowTrendingUpIcon, WrenchIcon, UserGroupIcon, CodeBracketSquareIcon, IdentificationIcon, SparklesIcon } from '@heroicons/react/20/solid'    

const AboutMePage = () => {

    const featuresFirst = [
        {
          name: 'Simplicity over Complexity',
          description:
            'Make it simple. Keep it impactful.',
          icon: AdjustmentsHorizontalIcon,
        },
        {
          name: 'Passion over Perfection',
          description: 'Built with heart, not for hype.',
          icon: FireIcon,
        },
        {
          name: 'Progress over Excuses',
          description: 'Done is better than planned.',
          icon: ArrowTrendingUpIcon,
        },
        {
            name: "Build > Consume",
            description: "Makers > Scrollers.",
            icon: WrenchIcon
        }
    ]
    const featureSecond = [
        {
          name: 'Human Before Hacker',
          description: 'We don’t just teach code — we guide people.',
          icon: UserGroupIcon,
        },
        {
          name: 'Not Just Theory — Real Projects',
          description: 'You’ll build more than “To-do apps.',
          icon: CodeBracketSquareIcon,
        },
        {
          name: 'One Creator. Full Transparency',
          description: 'No corporate gimmicks. Just one passionate dev.',
          icon: IdentificationIcon,
        },
        {
            name: "Community of Doers, Not Just Viewers",
            description: "You don’t learn alone here.",
            icon: SparklesIcon
        }
    ]

    const nextPoint = [
        {
            name: "Code Earth",
            description: "A platform for devs to learn and ship"
        },
        {
            name: "Written in India",
            description: "A platform where there will be storybooks written by me and also there will be some e-books"
        },
        {
            name: "Spendthing",
            description: "A platform for monthly budget checkup and all the thing required to track where your money is going"
        }
    ]

    const FooterSection = () => {
        return (
          <div className="relative isolate overflow-hidden bg-slate-800 py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                  <div className="flex items-center">
                    <img
                        alt="Your Company"
                        src="/ThrivvrNewLogo.png"
                        className="h-20 w-auto"
                    />
                  </div>
                  <p className="mt-4 text-lg text-gray-300 font-lato">
                    Built with heart. Made to help you thrive.
                  </p>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                  <div className="flex flex-col items-start font-rale">
                    <dd className="mt-4 text-base text-gray-400 hover:text-white">
                      <a href="/">Home</a>
                    </dd>
                    <dd className="mt-2 text-base/7 text-gray-400 hover:text-white">
                      <a href="/projects">Projects</a>
                    </dd>
                    <dd className="mt-2 text-base/7 text-gray-400 hover:text-white">
                      <a href="/about">About Us</a>
                    </dd>
                    <dd className="mt-2 text-base/7 text-gray-400 hover:text-white">
                      <a href="/contact">Contact Us</a>
                    </dd>
                  </div>
                  <div className="flex flex-col items-start">
                    <dt className="mt-4 text-base font-semibold text-white font-monts">© 2025 Thrivvr. All rights reserved.</dt>
                    <dd className="mt-2 text-base/7 text-gray-400 font-lato">
                      <p className="mt-1"><a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms</a></p>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        )
    }

    return (
        <>
            <Navigation />
            <header className="bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 mt-20">
                    <h1 className="text-5xl text-center font-bold tracking-tight text-gray-900 py-20 font-monts">About</h1>
                </div>
            </header>
            <div className="bg-white">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-lato">Mission Statement</h2>
                        <p className="mt-4 text-gray-500 font-lato">
                            At Thrivvr, we build, teach, and share with purpose. Our mission is to empower creators, coders, and dreamers through impactful tools, practical learning, and authentic content. Whether you're a beginner or a builder, Thrivvr helps you thrive.
                        </p>
                    </div>
                    <div className="bg-slate-800 w-full h-150">
                    </div>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="bg-slate-800 w-full h-150">
                        <img
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-01.jpg"
                            className="rounded-lg bg-gray-100"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-lato">My Story / The Creator</h2>
                        <p className="mt-4 text-gray-500 font-lato">
                            Thrivvr started as a personal journey. As a self-taught developer and creator, I struggled to find real, honest resources. So I built one. A place that grows with me and helps others grow too — not just in skills, but in mindset, discipline, and purpose.
                        </p>
                    </div>
                </div>
                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="lg:pt-4 lg:pr-8">
                                <div className="lg:max-w-lg mt-20">
                                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5x font-latol">
                                        Core Values
                                    </p>
                                    <p className="mt-6 text-lg/8 text-gray-600 font-lato">
                                        Thrivvr is built with heart, not hype. We don't chase perfection; we chase progress fueled by genuine curiosity and love for building.
                                    </p>
                                    <dl className=" max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none font-rale">
                                        {featuresFirst.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-slate-800" />
                                            {feature.name}
                                            </dt>{' '}
                                            <dd className="inline ml-2">{feature.description}</dd>
                                        </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                            <div className="bg-slate-800 w-full h-150">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="bg-slate-800 w-full h-170">
                            </div>
                            <div className="lg:pt-4 lg:pr-8">
                                <div className="lg:max-w-lg my-10">
                                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5x font-latol">
                                        What Makes Thrivvr Different?
                                    </p>
                                    <p className="mt-6 text-lg/8 text-gray-600 font-lato">
                                        At Thrivvr, we’re not just another code site or content hub. We believe in people — in their struggles, potential, and power to create change. What sets us apart is our philosophy: learn with purpose, build with passion, and grow with a community that actually cares. This is where raw talent becomes real impact.
                                    </p>
                                    <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none font-rale">
                                        {featureSecond.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-slate-800" />
                                            {feature.name}
                                            </dt>{' '}
                                            <dd className="inline ml-2">{feature.description}</dd>
                                        </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="lg:pt-4 lg:pr-8">
                                <div className="lg:max-w-lg mt-20">
                                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5x font-latol">
                                        What’s Coming Next
                                    </p>
                                    <p className="mt-6 text-lg/8 text-gray-600 font-lato">
                                        From full-stack tools to creator kits, Thrivvr is evolving. Stay tuned for:
                                    </p>
                                    <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none font-rale">
                                        {nextPoint.map((points) => (
                                        <div key={points.name} className="relative">
                                            <dt className="inline font-semibold text-gray-900">
                                            {points.name}
                                            </dt>{' '}
                                            <dd className="inline ml-2">{points.description}</dd>
                                        </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                            <div className="bg-slate-800 w-full h-150">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    )
}

export default AboutMePage;