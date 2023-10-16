// import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/motion/FadeIn'
import { MDXComponents } from '@/components/content-pages/MDXComponents'
import { PageLinks } from '@/components/content-pages/PageLinks'
import { formatDate } from '@/lib/formatDate'
import { type Article, type MDXEntry, loadArticles } from '@/lib/mdx'
import { Footer } from '@/components/Footer'
import { Contact } from '@/components/marketing/Contact'
import { Header } from '@/components/Header'
import { PageIntro } from '@/components/content-pages/PageIntro'

export default async function BlogArticleWrapper({
  article,
  children,
}: {
  article: MDXEntry<Article>
  children: React.ReactNode
}) {
  let allArticles = await loadArticles()
  let moreArticles = allArticles
    .filter(({ metadata }) => metadata !== article)
    .slice(0, 2)

  return (
    <>
      <Header />
      <Container as="article" className="">
        <FadeIn>
          <PageIntro
            eyebrow={formatDate(article.date)}
            title={article.title}
            centered
          >
            <p className="mt-6 text-sm font-semibold text-neutral-950">
              by {article.author.name}, {article.author.role}
            </p>
          </PageIntro>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {moreArticles.length > 0 && (
        <PageLinks
          className="my-24 sm:my-32 lg:my-40"
          title="More articles"
          pages={moreArticles}
        />
      )}

      <Contact />

      <Footer />
    </>
  )
}
