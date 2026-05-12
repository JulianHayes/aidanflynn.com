import { Metadata } from 'next'
import BlogPostCard from '@/components/BlogPostCard'
import { BLOG_POSTS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Guides and insights about selling gold, understanding hallmarks, precious metals pricing, and more from Aidan Flynn.',
  openGraph: {
    title: 'Blog | Aidan Flynn',
    description: 'Guides and insights about selling precious metals.',
  },
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="mb-6 font-serif text-hero-mobile text-charcoal md:text-hero">Blog</h1>
            <p className="text-body text-warm-grey md:text-subheading">
              Straightforward guides to help you understand what your gold is worth and how the
              precious metals market works.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-section-mobile md:py-section">
        <div className="mx-auto max-w-content px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <BlogPostCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
