import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection2() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">From origin to foyer — coffee crafted for hospitality</h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p>
                            Zoe Coffee partners directly with growers to source Grade 2+ lots and roast them to spec for hotels, resorts, and cafés. <span className="font-medium">We blend provenance, consistency and service</span> so operations can depend on exceptional cups at scale.
                        </p>
                        <p>From curated sample packs to scheduled wholesale shipments and on-site cuppings, our team supports menu development, staff training, and reliable logistics tailored to hospitality workflows.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Hospitality‑ready</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Roast-to-spec deliveries and predictable inventory so your service teams never run low during peak shifts.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Traceable quality</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Cupping-verified lots, QA notes, and lot-level traceability to maintain consistent flavor across services and shifts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:mask-l-from-35% md:mask-l-to-55% mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                        <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                            <Image
                                src="/content1.png"
                                className="hidden rounded-[12px] dark:block"
                                alt="Zoe Coffee cupping table and roasted beans — hospitality line-up"
                                width={1207}
                                height={929}
                            />
                            <Image
                                src="/content2.png"
                                className="rounded-[12px] shadow dark:hidden"
                                alt="Zoe Coffee sample pack on a hotel breakfast table"
                                width={707}
                                height={329}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
