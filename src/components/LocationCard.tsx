import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

interface LocationCardProps {
  city: string
  slug: string
  description: string
  comingSoon?: boolean
}

export default function LocationCard({ city, slug, description, comingSoon }: LocationCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-navy" />
          <h3 className="font-serif text-xl text-charcoal">{city}</h3>
        </div>
        {comingSoon && <Badge variant="gold">Coming soon</Badge>}
      </div>
      <p className="text-small text-warm-grey mb-6 flex-grow">{description}</p>
      <Link
        href={`/locations/${slug}`}
        className="inline-flex items-center gap-2 text-small font-medium text-navy hover:text-navy-light transition-colors"
      >
        Learn more <ArrowRight size={14} />
      </Link>
    </Card>
  )
}
