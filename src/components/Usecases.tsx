import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

interface Usecase {
    title: string
    description: string
    image: string
}

const usecases: Usecase[] = [
  {
    title: 'Knowledge Assistants',
    description: 'Harness your business data to construct robust knowledge bases for swift internal references or enhanced customer information access, fueled by model-driven text completion.',
    image:
      'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
  },
  {
    title: 'Call Center Operations',
    description: 'Revolutionize your call center operations with precise call transcriptions, succinct summaries, and automated ticketing – all geared towards soaring efficiency.',
    image:
      'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
  },
  {
    title: 'Process Automations',
    description: 'Streamline your onboarding, refine lead vetting, personalize your outreach, and discover bespoke solutions for any business scenario with our automation expertise.',
    image:
      'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
  },
  {
    title: 'Chatbots & Agents',
    description: 'Craft multi-turn dialogue chatbots and agents embodying your brand’s persona and tone, fostering engaging interactions with your clientele.',
    image:
      'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
  },
  {
    title: 'Scrape & Label',
    description: 'Utilize our LLMs to diligently curate and label both internal and public datasets, fulfilling your model training requisites with precision.',
    image:
      'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
  },
  // More people...
]

function UsecaseElement({usecase}: {usecase: Usecase}) {
  return(
    <li key={usecase.title}>
      <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={usecase.image} alt="" />
      <h3 className="mt-6 text-2xl font-display font-semibold leading-8 text-slate-900">{usecase.title}</h3>
      <p className="mt-2 text-base leading-7 text-gray-600">{usecase.description}</p>
    </li>
  )
}

export function Usecases() {
  return (
    <section
      id="usecases"
      aria-labelledby="What we can build for you"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-4xl md:text-center">
          <h1 className="font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-5xl">
            Wondering {' '}
              <span className="relative sm:whitespace-nowrap text-blue-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute hidden sm:block left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">What We Can Build</span>
              </span>{' '}
            for you? Here's a handful of ideas...
          </h1>
        </div>
        <ul
          role="list"
          className="mx-auto mt-24 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 lg:mx-0 lg:max-w-none lg:gap-x-8"
        >
          {usecases.map((usecase) => (
            <UsecaseElement key={usecase.title} usecase={usecase} />
          ))}
        </ul>

        <div className="mt-24 mx-auto max-w-4xl md:text-center">
          <h1 className="font-display text-2xl tracking-tight text-slate-900 sm:text-3xl">
            The possibilites are endless... {' '}
          </h1>
        </div>
      </Container>
    </section>
  )
}
