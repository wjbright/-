import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import scribblingImage from '@/images/scribbler.gif'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Writing my thoughts',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
      <SimpleLayout
      title="My thoughts."
      intro="All of my long-form thoughts on software and building user centric Product"
    >
      <div className='relative'>
        <Image 
          src={scribblingImage}
          alt="A scribling pen" 
          sizes="(min-width: 1024px) 32rem, 20rem"
          className="hidden lg:block absolute aspect-square rotate-3 w-48 h-48
          rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 right-4 mt-[-220px] "
        />
      
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </SimpleLayout>
    
  )
}
