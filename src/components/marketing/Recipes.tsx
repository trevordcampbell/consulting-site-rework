
import Image, { StaticImageData } from 'next/image'
import { Container } from '@/components/Container'
import { AdjustmentsHorizontalIcon, BuildingLibraryIcon, ChatBubbleLeftRightIcon, CircleStackIcon, CloudArrowUpIcon, CubeTransparentIcon, DocumentTextIcon, ForwardIcon, LockClosedIcon, PhoneArrowUpRightIcon, ShieldExclamationIcon, TagIcon } from '@heroicons/react/20/solid'

import imageSearchRetrieval from '@/images/generated-images/search-1.png'
import imageDialogManagementSystem from '@/images/generated-images/chat-1.png'
import imageNLPClassificationExtraction from '@/images/generated-images/filter-1.png'
import imageGuardrailsSecurity from '@/images/generated-images/ai-train-1.png'

interface Recipe {
  headline: string
  eyebrow: string
  description?: string
  listItems: 
    {
      title: string
      description: string
      icon: any
    }[]
  image: StaticImageData
  direction?: "left" | "right" | undefined
}

const recipes: Recipe[] = [
  {
    headline: "Search and Retrieval",
    eyebrow: "Find what you need, effortlessly",
    listItems: [
      {
        title: 'Seamlessly ingest data in any format.',
        description:
          'Pave the way for robust information retrieval at your fingertips.',
        icon: CloudArrowUpIcon,
      },
      {
        title: 'Refine document management.',
        description: 'We use intelligent chunking, splitting, and ranking, to enable quicker access to relevant content.',
        icon: DocumentTextIcon,
      },
      {
        title: 'Role-based privacy controls.',
        description: 'Ensure secure data handling in your organization through compliant data-access schemes.',
        icon: LockClosedIcon,
      },
      {
        title: 'Efficient data management and retrieval.',
        description: 'We leverage graph databases, vector stores, and API connectors to make your data easy access whenever and however it may be needed.',
        icon: CircleStackIcon,
      },
    ],
    image: imageSearchRetrieval,
    direction: "left",
  },
  {
    headline: "Dialogue Management System",
    eyebrow: "Engagement through catered interactions",
    listItems: [
      {
        title: 'Context-driven multi-turn dialogues.',
        description:
          "Enhance your users' interaction experience with rich conversations tailored to them.",
        icon: ChatBubbleLeftRightIcon,
      },
      {
        title: 'Fine-tune conversations to your specific use-case.',
        description: "We'll integrate chat logs to ensure each interaction is meaningful and productive.",
        icon: AdjustmentsHorizontalIcon,
      },
    ],
    image: imageDialogManagementSystem,
    direction: "right",
  },
  {
    headline: "NLP Classification & Extraction",
    eyebrow: "Supercharged data insights",
    listItems: [
      {
        title: 'Text classification and labeling.',
        description:
          "Harness transformer-based or traditional NLP pipelines for precise and rapid results.",
        icon: TagIcon,
      },
      {
        title: 'Streamline communication and operational workflows.',
        description: "Implement an alerting, routing, and triage system to maximize visibility while minimizing room for error.",
        icon: ForwardIcon,
      },
      {
        title: 'Accurate call transcription with Speech-to-Text Models',
        description: "Benefit from industry-standard models to summarize and analyze your audio data, driving enhanced decision-making.",
        icon: PhoneArrowUpRightIcon,
      },      
    ],
    image: imageNLPClassificationExtraction,
    direction: "left",
  },
  {
    headline: "Guardrails & Security",
    eyebrow: "Peace of mind without the hassle",
    listItems: [
      {
        title: 'Content screening and moderation.',
        description:
          "Effectively screen out harmful content, ensuring a safe and reliable user experience for everyone in your community.",
        icon: ShieldExclamationIcon,
      },
      {
        title: 'Keep AI within the lines.',
        description: "We'll establish safeguards against AI hallucinations, promoting accurate and trustworthy interactions between human and machine.",
        icon: CubeTransparentIcon,
      },
      {
        title: 'Trained on *your* data and processes.',
        description: "Utilize our guardrails framework to integrate your business APIs and knowledge base, achieving precise and reliable responses while maintaining a high level of security.",
        icon: BuildingLibraryIcon,
      },
    ],
    image: imageGuardrailsSecurity,
    direction: "right",
  },
]

function CaseElement({recipe}: {recipe: Recipe}) {

  if (!recipe.direction) {
    return(
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold font-display leading-7 text-blue-400">{recipe.eyebrow}</h2>
            <p className="mt-2 text-3xl font-medium font-display tracking-tight text-white sm:text-4xl">{recipe.headline}</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {recipe.description}
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
              {recipe.listItems.map((listItem) => (
                <div key={listItem.title} className="relative pl-9">
                  <dt className="inline font-semibold text-blue-400">
                    <listItem.icon className="absolute left-1 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                    {listItem.title}
                  </dt>{' '}
                  <dd className="inline text-white">{listItem.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        
        <Image
          className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          src={recipe.image}
          alt=""
          sizes="52.75rem"
          objectFit='cover'
          width={2432}
          height={1442}
        />
      </div>
    )
  }

  if (recipe.direction === "right") {
    return(
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold font-display leading-7 text-blue-400">{recipe.eyebrow}</h2>
            <p className="mt-2 text-3xl font-medium font-display tracking-tight text-white sm:text-4xl">{recipe.headline}</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {recipe.description}
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
              {recipe.listItems.map((listItem) => (
                <div key={listItem.title} className="relative pl-9">
                  <dt className="inline font-semibold text-blue-400">
                    <listItem.icon className="absolute left-1 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                    {listItem.title}
                  </dt>{' '}
                  <dd className="inline text-white">{listItem.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
          <Image
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            src={recipe.image}
            alt=""
            sizes="52.75rem"
            objectFit='cover'
            width={2432}
            height={1442}
          />
      </div>
    )
  }

  if (recipe.direction === "left") {
    return(
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold font-display leading-7 text-blue-400">{recipe.eyebrow}</h2>
            <p className="mt-2 text-3xl font-medium font-display tracking-tight text-white sm:text-4xl">{recipe.headline}</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {recipe.description}
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
              {recipe.listItems.map((listItem) => (
                <div key={listItem.title} className="relative pl-9">
                  <dt className="inline font-semibold text-blue-400">
                    <listItem.icon className="absolute left-1 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                    {listItem.title}
                  </dt>{' '}
                  <dd className="inline text-white">{listItem.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="flex items-start justify-end lg:order-first">
          <Image
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            src={recipe.image}
            alt=""
            sizes="52.75rem"
            objectFit='cover'
            width={2432}
            height={1442}
          />
        </div>
      </div>
    )
  }
  
}

export function Recipes() {
  return (
    <section
      id="recipes"
      aria-label="Our Ready-Built AI Recipes and Frameworks"
      className="relative overflow-hidden bg-slate-900 pb-28 pt-20 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Our Ready-Built {' '}
            <span className="relative sm:whitespace-nowrap text-blue-400">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute hidden sm:block left-0 top-2/3 h-[0.58em] w-full fill-blue-300/30"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">AI Recipes</span>
              </span>{' '}
              and Frameworks
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Accelerate your operational readiness with our pre-structured recipes and frameworks. We take charge of deployment, monitoring, and enhancements, ensuring seamless integration within your existing infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-32 gap-32">
          {recipes.map((recipe) => (
              <CaseElement key={recipe.headline} recipe={recipe} />
            )
          )}
        </div>
      </Container>
    </section>
  )
}
