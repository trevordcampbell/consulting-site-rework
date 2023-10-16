'use client'

import Image, { type ImageProps } from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import imageOffTheShelfCustomization from '@/images/generated-images/llm-puzzle-2.png'
import imageFineTuneLLM from '@/images/generated-images/finetune-1.png'
import imageCloudDeployLLM from '@/images/generated-images/cloud-deploy-1.png'

interface Feature {
  name: React.ReactNode
  summary: string
  description: string
  image: ImageProps['src']
  icon: React.ComponentType
}

const features: Array<Feature> = [
  {
    name: 'Off-the-Shelf Customization',
    summary: 'Utilize Ready To-Use LLMs to enhance your business quickly',
    description:
      'Leverage publicly available models via an API, intertwining Retrieval Augmented Generation (RAG) with your datasets, CRMs, and systems, for a streamlined operation.',
    image: imageOffTheShelfCustomization,
    icon: function ReportingIcon() {
      return (
        <>
          <path fill='#fff' opacity="0.3" d="M17.1 10.4c0-.4-.2-.8-.5-1.1-.3-.3-.4-.7-.4-1.1C16.2 7 17.4 6 18.8 6s2.6 1 2.6 2.1c0 .4-.1.8-.4 1.1-.2.3-.5.7-.5 1.1 0 .4.3.7.7.7 2.2-.1 4.3-.4 6.4-.8h.3c.1 0 .2.1.3.1.1.1.2.2.2.3.1.1.1.2.1.3.3 2.1.4 4.1.4 6.2 0 .1 0 .2-.1.3 0 .1-.1.2-.2.2-.1.1-.2.1-.2.2-.1 0-.2.1-.3.1-.4 0-.8-.2-1.1-.5-.3-.3-.7-.4-1.1-.4-1.2 0-2.1 1.1-2.1 2.6 0 1.4 1 2.6 2.1 2.6.4 0 .8-.1 1.1-.4.3-.2.7-.5 1.1-.5.4 0 .6.3.6.6-.1 1.8-.4 3.7-.7 5.5 0 .2-.1.3-.2.5-.1.1-.3.2-.5.2-2.1.4-4.2.6-6.3.7h-.3c-.1 0-.2-.1-.2-.1l-.2-.2c-.1-.1-.1-.2-.1-.3 0-.4.2-.8.5-1.1.3-.3.4-.7.4-1.1 0-1.2-1.1-2.1-2.6-2.1s-2.6 1-2.6 2.1c0 .4.1.8.4 1.1.2.3.5.7.5 1.1 0 .1 0 .2-.1.3 0 .1-.1.2-.2.2-.1.1-.2.1-.2.2-.1 0-.2.1-.3.1-1.8-.1-3.6-.2-5.3-.4-.1 0-.2-.1-.3-.1-.1-.1-.2-.1-.3-.2-.1-.1-.1-.2-.1-.3v-.3c.3-1.8.6-3.7.7-5.6v-.2c0-.1-.1-.1-.1-.2-.1-.1-.1-.1-.2-.1h-.2c-.4 0-.8.2-1.1.5-.3.3-.7.4-1.1.4-1-.3-2-1.4-2-2.9C6 18.2 7 17 8.1 17c.4 0 .8.1 1.1.4.3.2.7.5 1.1.5.1 0 .2 0 .3-.1.1 0 .2-.1.2-.2.1-.1.1-.2.2-.2 0-.1.1-.2.1-.3 0-1.8-.1-3.7-.4-5.5v-.4c0-.1.1-.2.2-.3.1-.1.2-.2.3-.2.1 0 .3-.1.4 0 1.5.2 3.1.3 4.6.3h.3c.1 0 .2-.1.2-.2l.2-.2c.2 0 .2-.1.2-.2z"/>
          <path fill='#fff' stroke='#fff' strokeWidth={0.75} d="M16.3 29.5c-1.8-.1-3.6-.2-5.4-.4-.2 0-.4-.1-.5-.2-.2-.1-.3-.2-.4-.4-.1-.1-.2-.3-.2-.5v-.5c.3-1.8.6-3.7.7-5.5l-.1-.1c-.3 0-.5.1-.8.3-.4.3-.9.5-1.4.5-1.5 0-2.6-1.4-2.6-3.1 0-1.7 1.2-3.1 2.6-3.1.5 0 1 .2 1.4.5.3.2.6.4.8.4h.2v-.2c0-1.8-.1-3.6-.3-5.4 0-.2 0-.4.1-.6.1-.2.2-.4.3-.5.1-.1.3-.3.5-.3.2-.1.4-.1.6-.1 1.5.2 3.1.3 4.6.3h.1l.1-.1.1-.2c0-.2-.1-.5-.4-.8-.3-.4-.5-.9-.5-1.4 0-1.5 1.4-2.6 3.1-2.6 1.7 0 3.1 1.2 3.1 2.6 0 .5-.2 1-.5 1.4-.2.3-.4.6-.4.8v.1h.1c2.1-.1 4.2-.4 6.3-.8h.5c.2 0 .3.1.5.2.1.1.3.2.4.4.1.2.2.3.2.5.3 2.1.4 4.2.4 6.3 0 .2 0 .3-.1.5s-.2.3-.3.4c-.1.1-.3.2-.4.3-.2.1-.3.1-.5.1-.6 0-1.1-.3-1.4-.6-.2-.2-.5-.3-.8-.3-.9 0-1.6.9-1.6 2.1s.7 2.1 1.6 2.1c.3 0 .6-.1.8-.3.3-.2.8-.6 1.4-.6.3 0 .6.1.8.4.2.2.3.5.3.8-.1 1.9-.4 3.7-.7 5.6 0 .3-.2.5-.4.7-.2.2-.4.3-.7.4-2.1.4-4.2.6-6.4.7-.2 0-.3 0-.5-.1-.1-.1-.3-.1-.4-.2s-.2-.2-.3-.4c.1 0 .1-.2.1-.3 0-.6.3-1.1.6-1.4.2-.3.3-.5.3-.8 0-.9-.9-1.6-2.1-1.6s-2.1.7-2.1 1.6c0 .3.1.6.3.8.2.3.6.8.6 1.4 0 .2 0 .3-.1.5s-.2.3-.3.4c-.1.1-.3.2-.4.3h-.5zm4.7-1.1h.1c2.1-.1 4.2-.4 6.3-.7.1 0 .1 0 .2-.1s.1-.1.1-.2c.3-1.8.5-3.6.7-5.5l-.1-.1c-.2 0-.5.1-.8.4-.4.3-.9.5-1.4.5-1.5 0-2.6-1.4-2.6-3.1 0-1.7 1.2-3.1 2.6-3.1.5 0 1 .2 1.4.5.3.2.6.3.8.3h.2l.1-.1v-.1c0-2-.2-4.1-.4-6.1v-.1l-.1-.1s-.1 0-.1-.1h-.1c-2.1.4-4.3.6-6.5.8-.3 0-.6-.1-.9-.3-.4-.2-.5-.5-.5-.8 0-.6.3-1.1.6-1.4.2-.3.3-.5.3-.8 0-.9-.9-1.6-2.1-1.6s-2.1.7-2.1 1.6c0 .3.1.6.3.8.2.3.6.8.6 1.4 0 .2 0 .3-.1.5s-.2.3-.3.4c-.1.1-.3.2-.4.3-.2.1-.3.1-.5.1-1.6 0-3.1-.2-4.7-.3h-.2s-.1 0-.1.1l-.1.1v.2c.2 1.8.3 3.7.4 5.5 0 .2 0 .3-.1.5s-.2.3-.3.4c-.1.1-.3.2-.4.3-.2.1-.3.1-.5.1-.6 0-1.1-.3-1.4-.6-.3-.2-.5-.3-.8-.3-.9 0-1.6.9-1.6 2.1s.7 2.1 1.6 2.1c.3 0 .6-.1.8-.3.3-.2.8-.5 1.4-.6.1 0 .3 0 .4.1.1.1.3.1.4.3.1.1.2.2.2.4.1.1.1.3.1.4-.1 1.9-.4 3.8-.7 5.7v.1s0 .1.1.1l.1.1h.1c1.8.2 3.5.4 5.3.4h.2l.1-.2c0-.2-.1-.5-.4-.8-.3-.4-.5-.9-.5-1.4 0-1.5 1.4-2.6 3.1-2.6 1.7 0 3.1 1.2 3.1 2.6 0 .5-.2 1-.5 1.4-.3.2-.4.4-.4.7v.1z"/>
        </>
      )
    },
  },
  {
    name: 'Exactly the Results You Need',
    summary:
      'Fine-Tune LLMs on your own data-sets for tailored outcomes',
    description:
      'Custom-tailor a model to resonate with your business’s tone and persona, employing either an open-source LLM or a foundational proprietary model.',
    image: imageFineTuneLLM,
    icon: function InventoryIcon() {
      return (
        <>
    <path fill="#fff" opacity=".5" d="M27 19h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2Zm-9-9a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1Zm0 16a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H19a1 1 0 0 1-1-1ZM7 11h2a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Zm2 16H7a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm-3-9a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Z"/>
  <path fill="#fff" d="M14 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5 11a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-5 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
        </>
      )
    },
  },
  {
    name: 'No Vendor Lock-In',
    summary:
      'Deploy open-source LLMs in your own secure cloud environment',
    description:
      'Collaborate with us for solutions prioritizing your privacy and security, deploying and refining open-source models on platforms like AWS, Azure, or any GPU-supported cloud provider.',
    image: imageCloudDeployLLM,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      )
    },
  },
]

function IndividualFeature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature
  isActive: boolean
}) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500',
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <IndividualFeature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <IndividualFeature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="ui-not-focus-visible:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function LargeLanguageModels() {
  return (
    <section
      id="large-language-models"
      aria-label="We make Large Language Models work for you."
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-4xl md:text-center">
          <h1 className="font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-5xl">
            We make {' '}
              <span className="relative sm:whitespace-nowrap text-blue-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute hidden sm:block left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">Large Language Models</span>
              </span>{' '}
            work for you.
          </h1>

        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
