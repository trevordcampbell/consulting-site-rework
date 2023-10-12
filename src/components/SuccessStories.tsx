import Link from "next/link"

interface CaseStudy {
  title: string
  description: string
  date?: string
  industry?: "healthcare" | "corporate" | "call center" | undefined
  image: string
}

const casestudies: CaseStudy[] = [
  {
    title: "Hiring Agent Transformation",
    description: "Revolutionized the staffing process by automating critical tasks, thereby achieving a seamless match between resumes and employer requirements. Our lead vetting system further streamlined operations, culminating in significant staff cost reductions.",
    industry: "corporate",
    image: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Call Center Optimization",
    description: "By automating support ticket creation and facilitating succinct call summarization, we significantly enhanced call center efficiency. The resulting operational cost reduction was a testament to the efficacy of our solutions.",
    industry: "call center",
    image: "https://images.pexels.com/photos/7658355/pexels-photo-7658355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Patient Risk Forecast",
    description: "Crafted a sophisticated risk prediction model by integrating EHR system data with patient logs. Our model empowers providers with proactive alerts regarding patient needs, markedly enhancing care outcomes and minimizing insurance costs.",
    industry: "healthcare",
    image: "https://images.pexels.com/photos/8460126/pexels-photo-8460126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Healthcare Provider Efficiency Enhancement",
    description: "Developed cutting-edge AI solutions to streamline post-operative inquiries concerning exercises, rehabilitation, and medications. By leveraging medical records and chat logs, our chatbots have drastically improved patient care efficiency, saving invaluable time for providers while elevating patient outcomes.",
    industry: "healthcare",
    image: "https://images.pexels.com/photos/6129237/pexels-photo-6129237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
]

function Badge({title}: {title: string | undefined}) {

  if (!title) {
    return(
      <></>
    )
  }

  if (title === "healthcare") {
    return(
      <span className="px-3 py-2 text-xs font-bold tracking-widest text-green-700 uppercase bg-green-100 rounded border-2 border-green-700/50">
        {title}
      </span>
    )
  }

  if (title === "call center") {
    return(
      <span className="px-3 py-2 text-xs font-bold tracking-widest text-amber-700 uppercase bg-amber-100 rounded border-2 border-amber-700/50">
        {title}
      </span>
    )
  }

  if (title === "corporate") {
    return(
      <span className="px-3 py-2 text-xs font-bold tracking-widest text-indigo-700 uppercase bg-indigo-100 rounded border-2 border-indigo-700/50">
        {title}
      </span>
    )
  }

}

function StoryItem({casestudy}: {casestudy: CaseStudy}) {
  return (
    <div className="relative overflow-hidden rounded-xl max-w-4xl sm:w-full shadow-xl shadow-blue-700/30">
      <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src={casestudy.image} alt=""/>
      </div>
      <div
        className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-r from-slate-900 via-slate-900/50 lg:via-slate-900/75 to-transparent">
      </div>

      <div className="relative p-8 sm:py-12 sm:px-16 sm:max-w-lg">
        <Badge title={casestudy.industry} />
        <p className="mt-12 text-2xl font-display font-medium text-white sm:text-3xl">
          <a href="#" title="" className="">
            {casestudy.title}
          </a>
        </p>
        <p className="mt-4 text-sm font-medium text-white">
          {casestudy.date}
        </p>
        <p className="mt-4 text-base font-normal leading-7 text-white">
          {casestudy.description}
        </p>
        <div className="mt-12">
          <a href="#" title=""
            className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            role="button">
            Read full case study
          </a>
        </div>
      </div>
    </div>
  )
}

export function SuccessStories() { 
  return(
    <section id="success-stories" aria-labelledby="customer success stories" className="py-12 sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

        <div className="mx-auto max-w-3xl md:text-center">
          <h1 className="font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-5xl">
            Here's some {' '}
              <span className="relative sm:whitespace-nowrap text-blue-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute hidden sm:block left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">Success Stories</span>
              </span>{' '}
            from our previous clients:
          </h1>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center">
          {casestudies.map((casestudy) => (
            <StoryItem key={casestudy.title} casestudy={casestudy}/>
           )
          )}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg tracking-tight text-slate-700">
            Discover how our AI-powered solutions have catalyzed operational excellence across diverse sectors
          </p>
          <a href="#" title=""
            className="mt-2 inline-flex items-center text-sm font-semibold text-blue-600 transition-all duration-200 group hover:text-blue-400 hover:underline">
            See all from our blog
            <svg
              className="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
