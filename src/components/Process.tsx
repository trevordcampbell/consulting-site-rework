interface Step {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Discovery & Consulting',
    description:
      'Join forces with our adept team to unearth untapped data potentials and identify swift ROI-driven solutions',
  },
  {
    number: '2',
    title: 'Development & Deployment',
    description:
      'Whether adapting our existing solutions or crafting new ones from scratch, we ensure a snug fit for your use case, ensuring smooth deployment.',
  },
  {
    number: '3',
    title: 'Evaluation & Feedback Loop',
    description:
      "We'll engage in constructive dialogues with your team's key stakeholders to assess system effectiveness, establish a continuous improvement loop, and pinpoint areas for refinement.",
  },
  {
    number: '4',
    title: 'Continued Long-term Support',
    description:
      "Our commitment doesn't end post-deployment. We're here for the long haul, ensuring your solutions run flawlessly and continue to meet your evolving needs.",
  },

]

function StepElement({step}: {step: Step}) {

  return(
    <div className="relative flex flex-row items-start lg:flex-col">
      <span
        className="absolute w-px h-full -ml-px border-l-2 border-gray-200 border-dashed lg:border-l-0 lg:border-t-2 top-16 left-6 sm:left-8 lg:w-full lg:h-0 lg:top-8 lg:left-0"
        aria-hidden="true"></span>

      <div
        className="inline-flex items-center justify-center ring-[20px] lg:ring-[36px] ring-white relative w-12 h-12 text-xl font-medium text-blue-600 bg-blue-100 rounded-full shrink-0 sm:text-3xl sm:h-16 sm:w-16">
        {step.number}
      </div>
      <div className="ml-6 lg:ml-0 lg:mt-8">
        <h3 className="text-2xl font-display font-semibold text-slate-900">
          {step.title}
        </h3>
        <p className="mt-4 font-normal text-gray-700">
          {step.description}
        </p>
      </div>
    </div>
  )
}

export function Process() {
  return (
    <section id="process" aria-label="What it's like to work with us" className="overflow-hidden">
      <div className="relative bg-blue-600 overflow-hidden">
        <div className="absolute top-0 left-0  mix-blend-overlay">
          <img className="object-cover w-full opacity-20 2xl:opacity-100" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/how-it-works/3/ring-pattern.svg"
            alt="" />
        </div>

        <div className="h-56 bg-gray-900 sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2">
          <img className="object-cover w-full h-full" src="https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>

        <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-16 lg:py-20 xl:py-24">
          <div className="md:mr-auto md:w-1/2 md:pr-10">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
              Our Process
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-blue-200 lg:text-lg lg:mt-6 lg:leading-8">
              We'll work in partnership with your team at every step along the way - from initial discovery to post-deployment support.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white sm:py-16 lg:py-20 xl:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-20 lg:gap-x-16">

            {steps.map((step) => (
                <StepElement key={step.number} step={step} />
              )
            )}

          </div>
        </div>
      </div>

    </section>
  );
}

{/* <video width="320" height="240" autoPlay muted >
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video> */}