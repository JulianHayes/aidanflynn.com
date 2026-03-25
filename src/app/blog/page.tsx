import { Metadata } from 'next'
import BlogPostCard from '@/components/BlogPostCard'
import { BLOG_POSTS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Guides and insights about selling gold, understanding hallmarks, precious metals pricing, and more from Aidan Flynn.',
  openGraph: {
    title: 'Blog | Aidan Flynn',
    description: 'Guides and insights about selling precious metals.',
  },
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-hero-mobile md:text-hero text-charcoal mb-6">
              Blog
            </h1>
            <p className="text-body md:text-subheading text-warm-grey">
              Straightforward guides to help you understand what your gold is worth and how the precious metals market works.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-section-mobile md:py-section">
        <div className="max-w-content mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <BlogPostCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
