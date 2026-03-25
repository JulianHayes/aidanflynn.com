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
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-gold fill-gold' : 'text-stone'}
          />
        ))}
      </div>
      <blockquote className="text-body text-charcoal mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-semibold text-small text-charcoal">{name}</p>
        <p className="text-caption text-warm-grey">{location}</p>
      </div>
    </Card>
  )
}
