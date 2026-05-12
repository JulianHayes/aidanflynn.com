import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dublin \u2014 Sell Gold in Dublin & Ireland',
  description:
    'Aidan Flynn is opening in Dublin soon. In the meantime, our postal service is available across Ireland with payment in Euro. Free insured postage via An Post.',
  openGraph: {
    title: 'Sell Gold in Dublin | Aidan Flynn',
    description: 'Coming soon to Dublin. Postal service available now across Ireland.',
  },
}

export default function DublinLayout({ children }: { children: React.ReactNode }) {
  return children
}
