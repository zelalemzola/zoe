import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'María Álvarez',
        role: 'Executive Chef — Seaside Resort',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        quote: 'Zoe’s consistency and on-time deliveries transformed our breakfast and banquet service. The roast profiles are spot on and our guests notice the difference.',
    },
    {
        name: 'Liam Carter',
        role: 'Head Barista — Central Hotel',
        image: 'https://randomuser.me/api/portraits/men/21.jpg',
        quote: 'We switched to Zoe Coffee for our café and the training and recipes they provided helped our team dial in the espresso instantly. Guests keep complimenting the cup.',
    },
    {
        name: 'Aisha Bello',
        role: 'F&B Manager — Sunrise Resort',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        quote: 'Their wholesale program is flexible and reliable. Scheduled deliveries and clear cupping reports make inventory and quality planning effortless.',
    },
    {
        name: 'Daniel Kim',
        role: 'Owner — Brightside Coffee House',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        quote: 'From sample to bulk, Zoe helped us craft a private blend that matches our menu. The guests love it and our operations are simpler now.',
    },
    {
        name: 'Evelyn Park',
        role: 'Banquet Manager — Grandview Hotel',
        image: 'https://randomuser.me/api/portraits/women/12.jpg',
        quote: 'Their logistics team coordinates perfectly with our service windows — deliveries arrive when we need them, not before or after.',
    },
    {
        name: 'Samuel Ortiz',
        role: 'Head Chef — Mountain Retreat',
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        quote: 'The traceability and cupping notes give us confidence in every roast. It’s become a trusted ingredient in our breakfast program.',
    },
    {
        name: 'Nora Jensen',
        role: 'Operations Manager — Harbor Inn',
        image: 'https://randomuser.me/api/portraits/women/28.jpg',
        quote: 'Dedicated account management and responsive support mean we never worry about stock during peak season.',
    },
    {
        name: 'Marcus Liu',
        role: 'Barista Trainer — Urban Resorts',
        image: 'https://randomuser.me/api/portraits/men/14.jpg',
        quote: 'Their on-site cupping and training helped our teams standardize pours across 6 locations — consistency that guests can taste.',
    },
    {
        name: 'Priya Desai',
        role: 'Café Owner — Corner Brew',
        image: 'https://randomuser.me/api/portraits/women/37.jpg',
        quote: 'Sample packs arrived quickly and the roast suggestions matched our equipment. Conversion from sample to regular order was seamless.',
    },
    {
        name: 'Omar Hassan',
        role: 'Purchasing Lead — Lakeside Group',
        image: 'https://randomuser.me/api/portraits/men/19.jpg',
        quote: 'Zoe’s quality control and SLA options made them the obvious partner for our portfolio of properties.',
    },
    {
        name: 'Chiara Romano',
        role: 'Restaurant Manager — Bella Cucina',
        image: 'https://randomuser.me/api/portraits/women/10.jpg',
        quote: 'Guests notice a difference in our coffee now — richer aromatics and consistent crema. Our morning covers improved.',
    },
    {
        name: 'André Moreau',
        role: 'Hotel General Manager',
        image: 'https://randomuser.me/api/portraits/men/27.jpg',
        quote: "Partnering with Zoe simplified our supply chain and elevated the guest experience — exactly what we needed.",
    },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold">Loved by the Community</h2>
                        <p className="mt-6">Harum quae dolore orrupti aut temporibus ariatur.</p>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div
                                key={chunkIndex}
                                className="space-y-3">
                                {chunk.map(({ name, role, quote, image }, index) => (
                                    <Card key={index}>
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                            <Avatar className="size-9">
                                                <AvatarImage
                                                    alt={name}
                                                    src={image}
                                                    loading="lazy"
                                                    width="120"
                                                    height="120"
                                                />
                                                <AvatarFallback>ST</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-medium">{name}</h3>

                                                <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                                <blockquote className="mt-3">
                                                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
