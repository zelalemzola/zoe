export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Zoe Coffee by the numbers</h2>
                    <p>Supplying hotels, resorts and cafés with grade 2+ coffees, flexible roast profiles, and logistics built for hospitality — from bulk contracts to door-to-door sample deliveries.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">1,200+</div>
                        <p>Hospitality partners served</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">4</div>
                        <p>Roast styles available (Light → Dark)</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">Next‑day</div>
                        <p>Logistics & doorstep deliveries</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
