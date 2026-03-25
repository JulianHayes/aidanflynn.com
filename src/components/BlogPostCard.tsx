import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Card from '@/components/ui/Card'
import { formatDate } from '@/lib/utils'

interface BlogPostCardProps {
  title: string
  slug: string
  date: string
  excerpt: string
}

export default function BlogPostCard({ title, slug, date, excerpt }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <p className="text-caption text-warm-grey mb-2">{formatDate(date)}</p>
      <h3 className="font-serif text-lg text-charcoal mb-3">{title}</h3>
      <p className="text-small text-warm-grey mb-6 flex-grow">{excerpt}</p>
      <Link
        href={`/blog/${slug}`}
        className="inline-flex items-center gap-2 text-small font-medium text-navy hover:text-navy-light transition-colors"
      >
        Read more <ArrowRight size={14} />
      </Link>
    </Card>
  )
}
