import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Aidan Flynn. Phone, email, visit us in Brighton or Belfast, or send us a message. We reply within one working day.',
  openGraph: {
    title: 'Contact | Aidan Flynn',
    description: 'Get in touch with Aidan Flynn. Phone, email, or visit us.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
