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
    <Card className="flex h-full flex-col">
      <p className="mb-2 text-caption text-warm-grey">{formatDate(date)}</p>
      <h3 className="mb-3 font-serif text-lg text-charcoal">{title}</h3>
      <p className="mb-6 flex-grow text-small text-warm-grey">{excerpt}</p>
      <span className="inline-flex items-center gap-2 text-small font-medium text-warm-grey">
        Coming soon
      </span>
    </Card>
  )
}
