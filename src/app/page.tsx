import { Contact } from '@/components/Contact'
import { Usecases } from '@/components/Usecases'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Process } from '@/components/Process'
import { LargeLanguageModels } from '@/components/LargeLanguageModels'
import { SuccessStories } from '@/components/SuccessStories'
import { Testimonials } from '@/components/Testimonials'
import { Recipes } from '@/components/Recipes'
import { PrimaryServices } from '@/components/PrimaryServices'

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
