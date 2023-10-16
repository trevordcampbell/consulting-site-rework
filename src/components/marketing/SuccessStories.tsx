import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/motion/FadeIn'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

export async function SuccessStories() {
  let caseStudies = (await loadCaseStudies()).slice(0, 6)

  return (
    <section
      id="success-stories"
      aria-labelledby="customer success stories"
      className="py-12 sm:pb-16 lg:pb-20 xl:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl md:text-center">
          <h1 className="font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-5xl">
            Here&apos;s some{' '}
            <span className="relative text-blue-600 sm:whitespace-nowrap">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 hidden h-[0.58em] w-full fill-blue-300/70 sm:block"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">Success Stories</span>
            </span>{' '}
            from our previous clients:
          </h1>
        </div>
        <CaseStudies caseStudies={caseStudies} />

        <div className="mt-20 text-center">
          <p className="text-lg tracking-tight text-slate-700">
            Discover how our AI-powered solutions have catalyzed operational
            excellence across diverse sectors...
          </p>
          <a
            href="#"
            title=""
            className="group mt-2 inline-flex items-center text-sm font-semibold text-blue-600 transition-all duration-200 hover:text-blue-400 hover:underline"
          >
            See more of our previous work
            <svg
              className="ml-1 h-5 w-5 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
