import { Contact } from '@/components/marketing/Contact'
import { Usecases } from '@/components/marketing/Usecases'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/marketing/Hero'
import { Process } from '@/components/marketing/Process'
import { LargeLanguageModels } from '@/components/marketing/LargeLanguageModels'
import { SuccessStories } from '@/components/marketing/SuccessStories'
import { Testimonials } from '@/components/marketing/Testimonials'
import { Recipes } from '@/components/marketing/Recipes'
import { PrimaryServices } from '@/components/marketing/PrimaryServices'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryServices />
        <Usecases />
        <Recipes />
        <LargeLanguageModels />
        <Process />
        <SuccessStories />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
