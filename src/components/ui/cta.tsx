import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section id="get-started-today" className="relative overflow-hidden bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="mx-auto max-w-7xl relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-gray-900 sm:text-4xl">
            Scale your video production today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-700">
            If you cannot make videos fast because your video library is a mess, sign up today!
          </p>
          <Button asChild className="mt-6 bg-indigo-600 text-white hover:text-slate-100 hover:bg-indigo-500 active:bg-indigo-800 active:text-indigo-100 focus-visible:outline-indigo-600 px-6 py-3">
            <Link href="https://recharm.com/get_started" className="text-lg">
              Start a trial
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}