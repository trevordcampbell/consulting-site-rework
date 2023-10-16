
import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import { UsersIcon, PuzzlePieceIcon, BriefcaseIcon, NewspaperIcon } from '@heroicons/react/24/solid'

const services = [
  {
    name: 'Consulting',
    description:
      'Embark on a collaborative journey with us to unveil the boundless data opportunities awaiting your business. Our seasoned team is adept at devising strategies for augmenting process efficiency, magnifying ROI, and creating a lasting impact.',
    href: '#',
    icon: BriefcaseIcon,
  },
  {
    name: 'Ready-Made AI Tools',
    description:
      'Explore our suite of low-code AI tools, versatile enough to address diverse business challenges. Tailor them to your unique requirements and accelerate your journey towards digital transformation.',
    href: '#',
    icon: PuzzlePieceIcon,
  },
  {
    name: 'AI Staff Augmentation',
    description:
      'Elevate your team’s capabilities with the infusion of top-tier AI talent sourced and nurtured by Prodify. Together, we’ll push the boundaries of what’s achievable.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Annotation, Curation & Validation',
    description:
      'Entrust us with your data as our experts meticulously curate, annotate, and validate it employing a human-in-the-loop approach, setting a solid foundation for superior ML model training.',
    href: '#',
    icon: NewspaperIcon,
  },


  
]

export function PrimaryServices() {
  return (
    <section
      id="services"
      aria-label="services we provide to our clients"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to Boost Efficiency & ROI
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Here&apos;s a range of the services we offer to our customers in Healthcare, Fintech, and other industries
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col bg-white p-6 shadow-xl shadow-blue-700/30 rounded-3xl border-8 border-blue-600/50">
                <dt className="text-2xl font-display font-semibold leading-7 text-blue-600">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-6 text-slate-700">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
