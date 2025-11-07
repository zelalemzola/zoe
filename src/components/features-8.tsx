import { Card, CardContent } from '@/components/ui/card'
import { Coffee, Truck, Package, Users, Handshake } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-3">
                        {/* Large stat card */}
                        <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
                            <CardContent className="relative m-auto size-fit pt-6 text-center">
                                <div className="relative flex h-24 w-56 items-center">
                                    {/* <Coffee className="text-muted absolute inset-0 size-full" aria-hidden /> */}
                                    <span className="mx-auto block w-fit text-5xl font-semibold">100%</span>
                                </div>
                                <h2 className="mt-6 text-center text-3xl font-semibold">Consistent Roasts</h2>
                                <p className="mt-3 text-sm text-muted-foreground">Roast profiles tuned for hospitality — every cup tastes like the one before.</p>
                            </CardContent>
                        </Card>

                        {/* Logistics */}
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6 text-center">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                    <Truck className="m-auto size-24" aria-hidden />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2">
                                    <h3 className="text-lg font-medium">Hospitality‑grade logistics</h3>
                                    <p className="text-foreground">Scheduled deliveries, bulk packing and priority handling built around hotel and resort service windows.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Samples */}
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6 text-center">
                                <div className="pt-6 lg:px-6 flex items-center justify-center">
                                    <Package className="m-auto size-24" aria-hidden />
                                </div>
                                <div className="relative z-10 mt-14 space-y-2">
                                    <h3 className="text-lg font-medium">Fast sample turnaround</h3>
                                    <p className="text-foreground">Order curated sample packs and receive them within 48–72 hours to evaluate blends on your equipment.</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Menu & training */}
                        <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="grid pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        <Users className="m-auto size-5" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-medium text-zinc-800">Menu & training support</h3>
                                        <p className="text-foreground">Barista training, brew recipes and pairing guides so your team serves a consistent, signature cup.</p>
                                    </div>
                                </div>
                                <div className="rounded-tl-(--radius) relative -mb-6 -mr-6 mt-6 h-fit border-l border-t p-6 py-6 sm:ml-6">
                                    <div className="absolute left-3 top-2 flex gap-1">
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10" />
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10" />
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Account management */}
                        <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        <Handshake className="m-auto size-6" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-medium">Dedicated account management</h3>
                                        <p className="text-foreground">A single point of contact for orders, cupping notes and on-site support — we coordinate so you don't have to.</p>
                                    </div>
                                </div>
                                <div className="before:bg-(--color-border) relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
                                    <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                                        <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                                            <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">Head Barista</span>
                                            <div className="ring-background size-7 ring-4">
                                                <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/102558960?v=4" alt="" />
                                            </div>
                                        </div>
                                        <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                                            <div className="ring-background size-8 ring-4">
                                                <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="" />
                                            </div>
                                            <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">Ops Manager</span>
                                        </div>
                                        <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                                            <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">Executive Chef</span>
                                            <div className="ring-background size-7 ring-4">
                                                <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/31113941?v=4" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
