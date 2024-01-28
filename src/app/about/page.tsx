import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Bright Williams. I live in Lagos, Nigeria, where I build for the world.',
}

export default function About() {
  return (
    <Container className="mt-10 lg:mt-20">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="An image of Bright williams"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="hidden lg:block aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
           A dynamic Software Engineer and Product Manager with a flair for data-driven user friendly products. 
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I am Bright Williams, a dedicated professional with a diverse background in software engineering,
             product management, and data analysis. My journey in tech began with my role as a software engineer, 
             where I played a pivotal role in developing core features and systems for early-stage products. 
             As a co-founder and head of product & engineering at MyStash Inc, 
             I led product teams to build innovative solutions, 
            significantly growing our customer base and enhancing our product performance.
            </p>
            <p>
            
            Over the last 6 years, I&rsquo;ve worked in the logistics, finance, and
            B2B retail industry building hardware and software to make them better. 
            One product at a time; one company at a time. 
            I haven&rsquo;t been successful with all of them but I do have a lot of stories to tell from them.
            Take them as my badges of honor! Haha! But I definitely have tasted success in quite a number of my ventures.
            </p>
            <p>
            What sets me apart is my ability to lead with empathy, 
            think critically, and adapt quickly to new challenges. 
            My achievements, including winning the Facebook Accelerator and securing significant grants, 
            are a testament to my commitment to excellence and innovation. 
            I&rsquo;m enthusiastic about leveraging my skills in new environments and 
            contributing to projects that have a real impact on people&rsquo;s lives.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/_wjbright?s=20" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://www.instagram.com/_wjbright?igsh=MnZ1Nmg0dDdrMmI1" icon={InstagramIcon} className="mt-4">
              Find me on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/wjbright" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/bright-williams/" icon={LinkedInIcon} className="mt-4">
              Connect with me on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:brightasima@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              brightasima@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
