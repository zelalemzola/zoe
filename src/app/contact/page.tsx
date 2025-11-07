import React, { ReactNode } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Phone, Mail, Package, Handshake } from 'lucide-react'

const ContactPage = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">Let’s craft your coffee experience</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Zoe Coffee brings hospitality-first coffee and service to hotels, restaurants and venues. Whether you need samples, wholesale pricing, or on-site training — our team is ready.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Card className="group">
            <CardHeader className="flex items-start gap-6 pb-2">
              <CardDecorator>
                <Phone className="size-5" aria-hidden />
              </CardDecorator>
              <div>
                <h2 className="text-lg font-medium">Call or WhatsApp</h2>
                <p className="text-sm text-muted-foreground">Orders, logistics and account support — message or call any time.</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="tel:+251988745721" className="text-primary-600 hover:underline">+251 98 874 5721</a>
                </li>
                <li>
                  <a href="tel:+251994784492" className="text-primary-600 hover:underline">+251 99 478 4492</a>
                </li>
                <li>
                  <a href="tel:+251973382848" className="text-primary-600 hover:underline">+251 97 338 2848</a>
                </li>
                <li>
                  <a href="tel:+251912216579" className="text-primary-600 hover:underline">+251 91 221 6579</a>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group">
            <CardHeader className="flex items-start gap-6 pb-2">
              <CardDecorator>
                <Mail className="size-5" aria-hidden />
              </CardDecorator>
              <div>
                <h2 className="text-lg font-medium">Email</h2>
                <p className="text-sm text-muted-foreground">For samples, pricing, or to introduce your property — expect a prompt reply.</p>
              </div>
            </CardHeader>
            <CardContent>
              <a href="mailto:zoecoffeeplc@gmail.com" className="text-primary-600 hover:underline">zoecoffeeplc@gmail.com</a>
              <div className="mt-4">
                <h3 className="text-sm font-medium">Office hours</h3>
                <p className="text-sm text-muted-foreground mt-1">Mon–Fri 08:00–18:00 • Sat 09:00–14:00 (responses within one business day)</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 items-start">
          <Card className="group">
            <CardHeader className="flex items-start gap-6 pb-2">
              <CardDecorator>
                <Package className="size-5" aria-hidden />
              </CardDecorator>
              <div>
                <h3 className="text-lg font-medium">Request a sample</h3>
                <p className="text-sm text-muted-foreground">Tell us your venue type, daily cups and preferred roast — we’ll curate a sample pack for your team.</p>
              </div>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:zoecoffeeplc@gmail.com?subject=Request%20Sample"
                className="mt-2 inline-block rounded-md bg-primary-600 text-white px-4 py-2"
              >
                Request a sample
              </a>
            </CardContent>
          </Card>

          <Card className="group">
            <CardHeader className="flex items-start gap-6 pb-2">
              <CardDecorator>
                <Handshake className="size-5" aria-hidden />
              </CardDecorator>
              <div>
                <h3 className="text-lg font-medium">Wholesale & partnerships</h3>
                <p className="text-sm text-muted-foreground">Minimums, pricing and logistics tailored to hospitality. We assign an account manager to every partner.</p>
              </div>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:zoecoffeeplc@gmail.com?subject=Wholesale%20Inquiry"
                className="mt-2 inline-block rounded-md border px-4 py-2"
              >
                Start wholesale conversation
              </a>
            </CardContent>
          </Card>
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">Prefer a human touch? Send a WhatsApp message to any phone above and we’ll reply within one business day.</p>
      </div>
    </section>
  )
}

export default ContactPage

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-12">
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t rounded-md">{children}</div>
  </div>
)