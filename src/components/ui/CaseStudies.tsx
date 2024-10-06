import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

interface CaseStudy {
  href: string
  imageSrc: string
  title: string
}

const caseStudies: CaseStudy[] = [
  {
    href: "/case_study/cat_person",
    imageSrc: "https://recharm.com/_next/static/media/cat_person_case_study.318bd999.jpg",
    title: "Discover how Cat Person found 4x more winners with 25% lower CPAs"
  },
  {
    href: "/case_study/fabfitfun",
    imageSrc: "https://recharm.com/_next/static/media/fabfitfun_case_study.c55d9ce2.jpg",
    title: "See how FabFitFun scaled from 100 to 400 videos in a quarter"
  },
  {
    href: "/case_study/purdy_and_figg",
    imageSrc: "https://recharm.com/_next/static/media/purdy_and_figg_case_study.12c115e3.jpg",
    title: "Find out how Purdy & Figg saved 25 hours per week while growing their team"
  },
  {
    href: "/case_study/lume",
    imageSrc: "https://recharm.com/_next/static/media/lume_case_study.6acfcd79.jpg",
    title: "Learn how Lume lowered their CPCs by 25% with 2x more winners"
  }
]

export default function CaseStudies() {
  return (
    <section id="case_studies" className="w-full" aria-label="Case studies of how Recharm made customers successful.">
      <div className="mt-4 bg-purple-300 pt-8 pb-12 w-full">
        <div className="mx-auto max-w-7xl flex w-full flex-col px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-center font-display text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">Case Studies</h2>
          </div>
          <ul role="list" className="mx-auto mt-12 grid w-full grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {caseStudies.map((study, index) => (
              <li key={index} className="flex h-full flex-col justify-between gap-y-2 hover:cursor-pointer">
                <Link href={study.href} className="flex flex-col h-full">
                  <div className="group flex-grow">
                    <Image
                      src={study.imageSrc}
                      alt=""
                      width={200}
                      height={250}
                      className="group-hover:shadow-glow w-full rounded-2xl object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                    />
                    <h3 className="mt-6 text-center font-display text-2xl font-normal text-gray-900 group-hover:font-medium">
                      {study.title}
                    </h3>
                  </div>
                  <div className="mt-auto pt-4 text-center">
                    <Button
                      className="w-full bg-indigo-600 text-white hover:text-slate-100 hover:bg-indigo-500 active:bg-indigo-800 active:text-indigo-100 focus-visible:outline-indigo-600"
                    >
                      Read case study
                    </Button>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}