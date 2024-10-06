import Image from 'next/image'

export default function HowItWorks() {
  return (
    <section id="how_it_works" className='w-full ' aria-label="How Recharm auto-organizes your video library">
      <div className="mt-8 overflow-hidden py-24 bg-gray-100 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600"></h2>
            <p className="mt-2 mb-12 font-display text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">How It Works</p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:pr-8">
              <div aria-label="Ingestion Steps" className="self-center justify-self-center">
                <ol role="list" className="overflow-hidden">
                  {steps.map((step, index) => (
                    <li key={index} className={`${index !== steps.length - 1 ? 'pb-10 ' : ''}relative`}>
                      {index !== steps.length - 1 && (
                        <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true"></div>
                      )}
                      <div className="group relative flex items-start" aria-current="step">
                        <span className="flex h-9 items-center" aria-hidden="true">
                          <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                            <span className="h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
                          </span>
                        </span>
                        <span className="ml-4 flex min-w-0 flex-col">
                          <span className="text-xl font-medium text-indigo-600">{step.title}</span>
                          <span className="text-lg text-gray-500">{step.description}</span>
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="lg:pr-8">
              <div className="relative h-full w-full">
                <Image
                  src="/recharm_demo.gif"
                  alt="Recharm library in action"
                  width={500}
                  height={500}
                  className="mx-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    title: "Upload videos",
    description: "Upload directly into Recharm, or connect your Google Drive. We'll take it from there."
  },
  {
    title: "Recharm cuts, labels, and organizes",
    description: "Our team (using our AI) cuts and categorizes all of your content so you can focus on pure creative work."
  },
  {
    title: "You make winning ads",
    description: "With organized videos, your team can create better content much faster and, more importantly, see results!"
  }
]