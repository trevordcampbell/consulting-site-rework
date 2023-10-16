import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container className='overflow-hidden'>
        <div className="py-16">
          <Link href="/" aria-label="Home">
            <Logo className="mx-auto h-10 w-auto" />
          </Link>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 mx-auto grid sm:flex item-center justify-center gap-x-6">
              <NavLink href="/#usecases">Use Cases</NavLink>
              <NavLink href="/#recipes">AI Recipes</NavLink>
              <NavLink href="/#large-language-models">Large Language Models</NavLink>
              <NavLink href="/work">Our Work</NavLink>
              <NavLink href="/blog">Our Blog</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Prodify. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
