import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 max-w-7xl my-24">
      <div className="w-full lg:w-[55%]">
        <h1 className="mx-auto font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-slate-900">
          Scale video production. Find{' '}
          <span className="relative whitespace-nowrap text-indigo-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-indigo-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">3x winning ads.</span>
          </span>
        </h1>
        <p className="mt-6 text-center lg:text-left text-lg leading-8 text-gray-600">
          Create more video ads with modular content, categorized clips, and swift execution.
        </p>
        <p className="mt-4 text-center lg:text-left text-sm text-gray-600">
          Start your 14-day free trial. No credit card required.
        </p>
        <div className="mt-2 flex justify-center lg:justify-start">
          <Button asChild className="bg-indigo-600 px-3 py-6 text-white hover:text-slate-100 hover:bg-indigo-500 active:bg-indigo-800 active:text-indigo-100 focus-visible:outline-indigo-600">
            <Link href="/get_started">
              <span className="text-lg px-8">Try Now</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative w-full overflow-hidden lg:w-[45%] m-auto">
        {/* Updated the video component to include proper poster URLs and control attributes */}
        <video 
          className="block w-full rounded-md lg:hidden" 
          poster="https://recharm-experiments.s3.amazonaws.com/landingpage_videos/recharm_demo_9x16_poster_2.png" 
          controls
        >
          <source src="https://recharm-experiments.s3.amazonaws.com/landingpage_videos/recharm_demo_v4_9x16_small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video 
          className="hidden w-full rounded-md lg:block" 
          poster="https://recharm-experiments.s3.amazonaws.com/landingpage_videos/recharm_Demo_16x9_poster_2.png" 
          controls
        >
          <source src="https://recharm-experiments.s3.amazonaws.com/landingpage_videos/recharm_demo_v4_16x9_small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute -top-10 left-0 flex h-full w-full cursor-pointer items-center justify-center">
          <div className="mt-20 flex h-20 w-20 items-center justify-center rounded-full bg-black bg-opacity-60">
            <button className="p-10 text-4xl text-white">►</button>
          </div>
        </div>
      </div>
    </div>
  )
}
