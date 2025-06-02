'use client'
import { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation'
import Typewriter from 'typewriter-effect';
import { WrenchScrewdriverIcon, AcademicCapIcon, PaperAirplaneIcon, FireIcon, BookmarkSquareIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const HeroSection = () => {
    const [done, setDone] = useState(false);

    return (
        <>
        <div className="relative isolate px-4 pt-5 lg:px-4">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-lato">
                Thrivvr 2.0 is coming soon. Packed with tools, resources & code power.{' '}
                <a href="#" className="font-semibold text-blue-800 hover:text-blue-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Learn more <span aria-hidden="true">&rarr;</span>
                </a>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-semibold tracking-wide text-gray-900 sm:text-6xl font-monts">
                    {!done && (
                        <Typewriter
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 50,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .typeString("I build tech, teach code, and ship products with passion.")
                            .callFunction(() => setDone(true)) // switch to static text
                            .start();
                        }}
                        />
                    )}
                    {done && (
                        <span className="text-gray-900 font-bold">
                        I build tech, teach code, and ship products with passion.
                        </span>
                    )}
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-base/8 font-lato">
                    Thrivvr is my digital space where I share dev tools, build products, teach what I learn, and help creators thrive.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 font-rale"
                    >
                        Get started
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900 font-rale">
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
            </div>
            <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
            </div>
        </div>
        </>
    )
}

const CoreSection = () => {
    const features = [
      {
        name: 'Build with Real Impact',
        description:
          'From full-stack web apps to backend tools — I build projects that solve actual problems in the real world.',
        icon: WrenchScrewdriverIcon,
      },
      {
        name: 'Learn by Doing',
        description:
          'I believe coding should be practical. My tutorials, blogs, and courses focus on clarity, hands-on practice, and building confidence.',
        icon: AcademicCapIcon,
      },
      {
        name: 'Ship Your Ideas',
        description:
          'Whether it’s a project, portfolio, or product — I guide you from idea to launch, with real tools and clean code.',
        icon: PaperAirplaneIcon,
      },
      {
        name: 'Built with Passion',
        description:
          'Everything at Thrivvr is made with purpose, heart, and hustle. This is more than a site — it’s a mission to help you thrive.',
        icon: FireIcon,
      },
    ]
    
    return (
        <div className="bg-white py-5 sm:py-12">
          <div className="mx-20 max-w-7xl px-6 lg:px-8">
            <div className="mx-20 max-w-2xl lg:text-left">
              <h2 className="text-base/7 font-semibold text-blue-800">Code with Purpose</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance font-monts">
                Thrivvr is all about…
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 font-lato">
                I create, teach, and build things that matter. My goal is to empower everyday learners, makers, and dreamers through tech and creativity.
              </p>
            </div>
            <div className="mx-20 mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base/7 font-semibold text-gray-900 font-lato">
                      <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-800">
                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-600 font-rale">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
    )
    
}

const WhoSection = (props) => {
    const { posts } = props
    // const posts = [
    //     {
    //       id: 1,
    //       title: 'Beginners Who Want to Learn Code',
    //       description:'You’ve just started learning programming, and everything feels overwhelming? Thrivvr gives you simplified, structured, and supportive guidance to keep you going.',
    //     },
    //     {
    //         id: 2,
    //         title: 'Developers Who Want to Build Real Stuff',
    //         description: 'Already know the basics? It’s time to ship projects that matter. We help you build, break, and level up through hands-on code, architecture, and side hustles.'
    //     },
    //     {
    //         id: 3,
    //         title: 'Creators Who Want to Teach and Share',
    //         description: 'Got a story, a skill, or a startup idea? Learn how to build your brand, design great content, and ship your first course or digital product with impact.'
    //     }
    //     ,
    //     {
    //         id: 4,
    //         title: 'Anyone Who’s Tired of Being Average',
    //         description: 'If you feel stuck, lost, or just not good enough — Thrivvr is your reset button. This is for the rebels, the grinders, and the silent fighters.'
    //     }
    //     // More posts...
    // ]
      
    return (
        <div className="bg-white my-20 py-40 sm:py-40 mx-20">
            <div className="mx-20 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl mb-10 font-monts">Who is Thrivvr for?</h2>
                    <p className="mt-2 text-lg/8 text-gray-600 font-lato">If you want to grow in tech, create boldly, and build your dream life — Thrivvr is your tribe.</p>
                </div>
                <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                        <div className="group relative">
                            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 font-lato">
                                {post.title}
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 font-rale">{post.description}</p>
                        </div>
                        </article>
                    ))}
                </div>
                <div className="mt-15 flex items-left gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 font-rale"
                        >
                            Find Your Path →
                        </a>
                    </div>
            </div>
        </div>
    )
      
      
}

const ProductSection = () => {
    const features = [
      {
        name: 'Codebase (Coming Soon)',
        description:
          'An all-in-one platform for beginner coders to learn, build, and test code — with real-world project challenges.',
        icon: WrenchScrewdriverIcon,
      },
      {
        name: 'Courses (Coming Soon)',
        description:
          'Free, beginner-friendly courses in full-stack development, product thinking, and digital creation.',
        icon: AcademicCapIcon,
      },
      {
        name: 'eBooks & Digital Kits (Coming Soon)',
        description:
          'No-fluff guides, productivity tools, and creator toolkits built from experience, not theory.',
        icon: BookmarkSquareIcon,
      },
    ]
    
    return (
        <div className="bg-white py-5 sm:py-12">
          <div className="mx-20 max-w-7xl px-6 lg:px-8">
            <div className="mx-20 max-w-2xl lg:text-left">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance font-monts">
                What I’m Working On
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 font-lato">
                These are the projects I’m building (or about to). Real tools. Real impact. Thrivvr is just the beginning.
              </p>
            </div>
            <div className="mx-20 mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base/7 font-semibold text-gray-900 font-lato">
                      <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-800">
                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-600 font-rale">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
    )
    
}

const CtaSection = () => {
    return (
        <>
            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <figure className="mt-10">
                    <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                        <p className='font-monts'>
                            “Something big is coming.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <Box sx={{ml:37, mb: 4, '& > :not(style)': { m: 1, mx: 3 } }}>
                          <Fab color="primary" aria-label="Instagram" sx={{ bgcolor: "#0C359E" }}>
                            <InstagramIcon />
                          </Fab>
                          <Fab color="primary" aria-label="Gmail" sx={{ bgcolor: "#0C359E" }}>
                            <FacebookIcon />
                          </Fab>
                          <Fab color="primary" aria-label="Gmail" sx={{ bgcolor: "#0C359E"}}>
                            <LinkedInIcon />
                          </Fab>
                        </Box>
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                          <div className="font-semibold text-gray-900 font-lato">Stay tuned or connect with me on</div>
                        </div>
                    </figcaption>
                    </figure>
                </div>
            </section>
        </>
    )
}

const FooterSection = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubscribe = async () => {
    try {
      const res = await axios.post('https://thrivvr.onrender.com/api/newsletter', { email });
      setMsg(res.data.message);
      setEmail('');
    } catch (err) {
      console.error(err.response?.data?.error || 'Subscription failed');
    }
  };
  
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
            <h2 className="text-4xl font-semibold tracking-tight text-white font-monts">Subscribe to our newsletter</h2>
            <p className="mt-4 text-lg text-gray-300 font-lato">
              Built with heart. Made to help you thrive.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only font-lato">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 font-lato"
              />
              <button
                type="submit"
                onClick={handleSubscribe}
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 font-rale"
              >
                Subscribe
              </button>
            </div>
            {msg && <p className="mt-2 text-sm text-gray-300">{msg}</p>}
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

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
        try {
            const res = await axios.get('https://thrivvr.onrender.com/api/meta/posts');
            console.log(res);
            setPosts(res.data);
        } catch (err) {
            console.error("❌ Navigation fetch error", err);
        }
        };
  
        fetchPost();
    }, []);
    return (
    <div className="bg-white">
        <Navigation />
        <HeroSection />
        <CoreSection />
        <WhoSection posts={posts}/>
        <ProductSection />
        <CtaSection />
        <FooterSection />
    </div>
  )
}

export default HomePage;
