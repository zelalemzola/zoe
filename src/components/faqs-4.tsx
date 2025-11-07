'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsFour() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'Do you offer sample packs for evaluation?',
            answer: 'Yes — our Sample Pack lets you test 3–4 roast profiles (light → dark) on your equipment. Samples typically ship within 48–72 hours and arrive ready for cupping.',
        },
        {
            id: 'item-2',
            question: 'What are your minimums for wholesale orders?',
            answer: 'Minimums depend on the program: standard wholesale orders start at 10 x 5kg bags, while enterprise contracts can be customized. Contact sales for a tailored quote.',
        },
        {
            id: 'item-3',
            question: 'Can you roast to our specification or create private blends?',
            answer: 'Absolutely — we offer tailored roast profiles and private-label blends. We’ll schedule a cupping session and sample run to finalize the profile before full production.',
        },
        {
            id: 'item-4',
            question: 'How do delivery schedules work for hotels and resorts?',
            answer: 'We coordinate deliveries around your service windows — weekly or monthly schedules are available. For high-volume accounts we provide priority logistics to match peak operations.',
        },
        {
            id: 'item-5',
            question: 'What if a shipment has quality issues?',
            answer: 'Quality is core to our service. If you receive an issue, notify your account manager within 48 hours. We’ll arrange a replacement, credit, or next-step cupping to resolve it quickly.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1">
                        {faqItems.map((item) => (
                            <div
                                className="group"
                                key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="/contact"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
