import Navigation from "../../components/Navigation";

const callouts = [
    {
      name: 'Coding',
      description: 'Coder Earth',
      imageSrc: '/CodeEarth Logo.png',
      imageAlt: 'Code Earth Logo here',
      href: '#',
    },
    {
      name: 'E-Commerce',
      description: 'Storybooks and other books',
      imageSrc: '/BookPic.png',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Budget',
      description: 'Budget Planner',
      imageSrc: '/BudgetPlanning.avif',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
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
                <a href="/">About Us</a>
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
  
const ProjectPage = () => {
    return (
      <>
      <Navigation />
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900 font-lato">Projects (Comming Soon)</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                    <img
                        alt={callout.imageAlt}
                        src={callout.imageSrc}
                        className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                    />
                     <span className="mt-6 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset font-lato">
                        {callout.name}
                    </span>
                  <h3 className="mt-3  text-base font-semibold text-gray-900 font-rale">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.description}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900"></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
      </>
    )
}

export default ProjectPage;