import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <section className="mb-16 rounded-3xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Shopware B2B Development Hub 🚀
          </h1>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300">
            Learn Shopware 6 B2B development, architecture, plugins, workflows and merchant
            strategies. Built for developers and merchants.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="rounded-xl bg-black px-5 py-2 text-white dark:bg-white dark:text-black"
            >
              Explore Blog
            </Link>

            <a
              href="https://youtube.com"
              target="_blank"
              className="rounded-xl border border-gray-300 px-5 py-2 dark:border-gray-700"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </section>
      <section className="mb-16 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-6 transition hover:shadow-lg">
          <h2 className="text-2xl font-bold">👨‍💻 Developers</h2>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Plugins, DAL, APIs, Administration, Docker, B2B architecture and integrations.
          </p>
        </div>

        <div className="rounded-2xl border p-6 transition hover:shadow-lg">
          <h2 className="text-2xl font-bold">🛒 Merchants</h2>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            B2B workflows, customer groups, pricing, approvals and enterprise commerce concepts.
          </p>
        </div>
      </section>
      <section className="mb-20">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">Learning Roadmap</h2>

          <p className="mt-2 text-gray-500">
            Structured Shopware B2B learning path for developers and merchants.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Fundament — Setup & Umgebung</h3>

              <span className="text-sm text-gray-500">Month 1–2</span>
            </div>

            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Shopware 6 with Docker</li>
              <li>• Architecture basics</li>
              <li>• B2B vs B2C</li>
              <li>• First plugin</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Customer Groups & Pricing</h3>

              <span className="text-sm text-gray-500">Month 3–4</span>
            </div>

            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Dynamic pricing</li>
              <li>• Rules engine</li>
              <li>• Customer permissions</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
