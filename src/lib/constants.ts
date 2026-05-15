export const SITE_NAME = 'Aidan Flynn'
export const SITE_URL = 'https://aidanflynn.com'
export const SITE_DESCRIPTION =
  'Aidan Flynn buys gold, silver, and platinum from people across the UK and Ireland. Transparent pricing. Free insured postage. Same-day payment.'

// While true, src/middleware.ts redirects every public route back to / and
// src/app/layout.tsx swaps the Navigation/Footer for a minimal landing shell.
// Set to false the moment the full site is ready to go live.
export const LANDING_MODE = true

export const CONTACT = {
  phone: '+447417497708',
  phoneDisplay: '+44 (0) 7417 497708',
  email: 'aidan@aidanflynn.com',
  trustpilotScore: '4.9',
  trustpilotReviews: '127',
}

export const NAV_ITEMS = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const

export const LOCATIONS = [
  {
    city: 'Brighton',
    slug: 'brighton',
    address: '14 The Lanes, Brighton, BN1 1HB',
    phone: '+44 1234 567890',
    phoneDisplay: '01234 567 890',
    hours: 'Mon–Fri: 9am–5pm, Sat: 10am–3pm',
    description: 'Serving Brighton, Hove, and the Sussex coast since 2024.',
    comingSoon: false,
  },
  {
    city: 'Belfast',
    slug: 'belfast',
    address: '22 Royal Avenue, Belfast, BT1 1DA',
    phone: '+44 2890 123456',
    phoneDisplay: '028 9012 3456',
    hours: 'Mon–Fri: 9am–5pm, Sat: 10am–3pm',
    description: 'Serving Belfast and Northern Ireland.',
    comingSoon: false,
  },
  {
    city: 'Dublin',
    slug: 'dublin',
    address: 'Grafton Street, Dublin 2, Ireland',
    phone: '+353 1 234 5678',
    phoneDisplay: '01 234 5678',
    hours: 'Coming soon',
    description: 'Serving Dublin and the Republic of Ireland.',
    comingSoon: true,
  },
] as const

// Spot prices per gram (hardcoded placeholders, March 2026)
export const SPOT_PRICES = {
  gold: {
    '24ct': 105.0,
    '22ct': 96.44,
    '18ct': 78.96,
    '14ct': 61.59,
    '9ct': 39.48,
  },
  silver: {
    '999': 1.65,
  },
  platinum: {
    '999': 25.0,
  },
} as const

// Buy percentages by carat
export const BUY_PERCENTAGES = {
  gold: {
    '24ct': 0.9,
    '22ct': 0.88,
    '18ct': 0.85,
    '14ct': 0.82,
    '9ct': 0.8,
  },
  silver: {
    '999': 0.75,
  },
  platinum: {
    '999': 0.8,
  },
} as const

export const EUR_CONVERSION_RATE = 1.19

export const METAL_OPTIONS = [
  { value: 'gold', label: 'Gold' },
  { value: 'silver', label: 'Silver' },
  { value: 'platinum', label: 'Platinum' },
] as const

export const CARAT_OPTIONS = {
  gold: [
    { value: '9ct', label: '9ct' },
    { value: '14ct', label: '14ct' },
    { value: '18ct', label: '18ct' },
    { value: '22ct', label: '22ct' },
    { value: '24ct', label: '24ct' },
  ],
  silver: [{ value: '999', label: '999 (Pure Silver)' }],
  platinum: [{ value: '999', label: '999 (Pure Platinum)' }],
} as const

export const TESTIMONIALS = [
  {
    quote:
      "I was nervous about posting my late mother's jewellery, but Aidan made the whole process feel safe and respectful. The valuation was fair and the money was in my account the same day.",
    name: 'Sarah M.',
    location: 'Brighton',
    rating: 5,
  },
  {
    quote:
      'Transparent from start to finish. I could see exactly how the price was calculated, and it was better than three other quotes I had received locally.',
    name: "James O'Neill",
    location: 'Belfast',
    rating: 5,
  },
  {
    quote:
      'The free returns policy gave me the confidence to try. Ended up accepting the offer because it was genuinely fair. Would recommend to anyone.',
    name: 'Margaret T.',
    location: 'Hove',
    rating: 5,
  },
] as const
// NOTE: Replace with real Trustpilot reviews via API integration

export const FAQ_SECTIONS = [
  {
    title: 'About selling',
    items: [
      {
        question: 'How do I know what carat my gold is?',
        answer:
          'Most gold jewellery sold in the UK and Ireland carries a hallmark stamped by an assay office. Look for numbers like 375 (9ct), 585 (14ct), 750 (18ct), 916 (22ct), or 999 (24ct). If you cannot find a hallmark, do not worry — we test every item we receive and will tell you exactly what it is.',
      },
      {
        question: 'Do I need to weigh my items before sending?',
        answer:
          'No. We weigh everything on calibrated, certified scales when it arrives. Our calculator gives you an estimate based on the weight you enter, but your final valuation is based on our tested weight and purity.',
      },
      {
        question: 'What items do you accept?',
        answer:
          'We accept gold, silver, and platinum jewellery, coins, bars, and scrap. This includes rings, necklaces, bracelets, earrings, watches (precious metal cases), dental gold, and broken items. We do not currently buy gemstones or diamonds separately.',
      },
      {
        question: 'Do you buy silver and platinum as well as gold?',
        answer:
          'Yes. We buy silver and platinum at published rates, just like gold. Check our pricing page for current rates per gram.',
      },
      {
        question: 'What about diamonds and gemstones?',
        answer:
          'We value items based on their precious metal content only. Diamonds and gemstones are returned to you unless you tell us otherwise. We do not currently offer diamond or gemstone valuations.',
      },
    ],
  },
  {
    title: 'About the process',
    items: [
      {
        question: 'How long does the whole process take?',
        answer:
          'Most customers receive their kit within 24 hours, and valuations are completed within 24 hours of us receiving your items. If you accept, payment is made the same day. The whole process typically takes 3–5 days from start to finish.',
      },
      {
        question: 'Is my post insured?',
        answer:
          'Yes. The pre-paid envelope we send you includes full Royal Mail Special Delivery insurance. Your items are covered from the moment you hand them over at the post office.',
      },
      {
        question: 'What happens if I do not accept the offer?',
        answer:
          'We return everything to you, fully insured, at no cost. No questions asked. You have 7 days to decide, and there is no pressure to accept.',
      },
      {
        question: 'How quickly do I get paid?',
        answer:
          'Same day. Once you accept our offer, the money is transferred to your bank account within hours. Most customers see it within 2–4 hours.',
      },
      {
        question: 'Can I watch my items being tested?',
        answer:
          'If you visit one of our locations in person, yes. For postal customers, we provide a full written breakdown of every item: weight, purity test results, spot price at the time of testing, and the exact calculation behind our offer.',
      },
    ],
  },
  {
    title: 'About trust and safety',
    items: [
      {
        question: 'How do I know I can trust you?',
        answer:
          "We are registered with HMRC for anti-money laundering supervision, accredited by Trading Standards under the Buy With Confidence scheme, and rated Excellent on Trustpilot. Our pricing is published and our founder's name is on the business.",
      },
      {
        question: 'Are you registered and regulated?',
        answer:
          'Yes. We are registered with HMRC as a dealer in precious metals under the Money Laundering Regulations. We are also accredited by Trading Standards.',
      },
      {
        question: 'What if my items are worth more than I thought?',
        answer:
          'We pay you based on what they are actually worth, not what you estimated. If your items test at a higher purity or weigh more than you expected, your offer will reflect that. We have no interest in underpaying — it does not build the kind of business we want to run.',
      },
      {
        question: 'What if I change my mind after accepting?',
        answer:
          'Once you have accepted an offer and payment has been made, the transaction is complete. This is why we give you 7 days to decide before accepting — take your time.',
      },
    ],
  },
  {
    title: 'For Irish customers',
    items: [
      {
        question: 'Do you operate in the Republic of Ireland?',
        answer:
          'Yes. We accept items from across the Republic of Ireland and our Dublin location is opening soon. You can use our postal service from anywhere in Ireland.',
      },
      {
        question: 'Can I be paid in Euro?',
        answer:
          'Yes. We can pay you in either GBP or EUR. Our calculator lets you toggle between both currencies so you can see exactly what you will receive.',
      },
      {
        question: 'What is the postal process from Ireland?',
        answer:
          'We send you a pre-paid, insured envelope via An Post. The process is identical to the UK service — fully insured from the moment you post it.',
      },
    ],
  },
] as const

export const BLOG_POSTS = [
  {
    title: 'How to tell what your gold is worth',
    slug: 'how-to-tell-what-your-gold-is-worth',
    date: '2026-03-15',
    excerpt:
      'A straightforward guide to understanding the value of your gold jewellery, from hallmarks to weight to the live spot price.',
  },
  {
    title: 'Understanding hallmarks: a plain-English guide',
    slug: 'understanding-hallmarks',
    date: '2026-03-08',
    excerpt:
      'Those tiny stamps on your jewellery tell a story. Here is how to read them and what they mean for the value of your gold.',
  },
  {
    title: 'What happens to your jewellery when you sell it',
    slug: 'what-happens-to-your-jewellery',
    date: '2026-02-28',
    excerpt:
      'Ever wondered where your gold goes after you sell it? We explain the refining process and why it matters.',
  },
  {
    title: 'Gold prices in 2026: what sellers need to know',
    slug: 'gold-prices-2026',
    date: '2026-02-20',
    excerpt:
      'Gold prices have been climbing steadily. Here is what is driving the market and what it means if you are thinking of selling.',
  },
] as const