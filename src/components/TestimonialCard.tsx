import { Star } from 'lucide-react'
import Card from '@/components/ui/Card'

interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  rating: number
}

export default function TestimonialCard({ quote, name, location, rating }: TestimonialCardProps) {
  return (
    <Card>
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className={i < rating ? 'fill-gold text-gold' : 'text-stone'} />
        ))}
      </div>
      <blockquote className="mb-6 text-body text-charcoal">&ldquo;{quote}&rdquo;</blockquote>
      <div>
        <p className="text-small font-semibold text-charcoal">{name}</p>
        <p className="text-caption text-warm-grey">{location}</p>
      </div>
    </Card>
  )
}
