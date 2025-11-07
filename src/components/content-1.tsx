import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">From origin to cup — coffee built for hospitality</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/content2.png" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/content2.png" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            Zoe Coffee partners directly with growers to source grade 2+ lots, roast to specification, and deliver on schedules that fit hospitality operations. <span className="text-accent-foreground font-bold">Consistency and traceability</span> are core to every shipment.
                        </p>
                        <p className="text-muted-foreground">From large weekly contracts for resorts to single-bag sample deliveries for boutique cafés, we handle blending, profiling, and logistics so your team can focus on service.</p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>"Zoe’s consistency and on-time deliveries transformed our breakfast and banquet service. The roast profiles are spot on and our guests notice the difference."</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="block font-medium">María Álvarez, Executive Chef — Seaside Resort</cite>
                                    <img className="h-5 w-fit dark:invert" src="/bg1.png" alt="Hospitality partner logo" height="20" width="auto" />
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
