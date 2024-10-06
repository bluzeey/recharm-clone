import Image from 'next/image'

interface FeatureProps {
  title: string
  subtitle: string
  description: string
  quote: string
  author: {
    name: string
    role: string
    image: string
  }
  image: string
  reverse?: boolean
}

const Feature: React.FC<FeatureProps> = ({ title, subtitle, description, quote, author, image, reverse = false }) => (
  <div className={`mx-auto my-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:mt-16 lg:mb-32 lg:max-w-none lg:grid-cols-5 ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
    <div className={`lg:col-span-2 lg:pr-8 lg:pt-4 ${reverse ? 'lg:col-start-4' : ''}`}>
      <div className="lg:max-w-lg">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">{title}</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">{subtitle}</p>
        <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-600">
          <blockquote className="text-base leading-7">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-x-4 text-sm leading-6">
            <Image
              src={author.image}
              alt=""
              width={100}
              height={100}
              className="h-16 w-16 flex-none rounded-full border border-gray-100 shadow-lg"
            />
            <div>
              <span className="font-semibold text-gray-900">{author.name}</span> – {author.role}
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
    <Image
      src={image}
      alt="Product screenshot"
      width={3125}
      height={2214}
      className={`w-[48rem] self-center rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem] md:-ml-4 lg:col-span-3 lg:-ml-0 ${
        reverse ? 'row-start-2 md:row-start-1' : ''
      }`}
    />
  </div>
)

export default function Features() {
  return (
    <section id="features" aria-label="Features for running your books">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="font-medium tracking-tight my-8 mt-12 text-center font-display text-3xl text-gray-900 sm:text-4xl">
          How Recharm helps in scaling video creative production
        </h1>
        <Feature
          title="FOOTAGE ORGANIZATION"
          subtitle="Maximize reuse of video footage"
          description="Effortlessly find hidden gems with a speedy interface and get maximum ROI on your video collection."
          quote="Being able to put a piece of content from three years ago next to a piece of content that was produced last week, and just repurposing all of that to get even more content without having to involve anyone else or without having to go through our typical approval cycle makes everything so much faster."
          author={{
            name: "Emily Arons",
            role: "Senior Performance Marketer",
            image: "/emily_arons.png"
          }}
          image="/website_graphics_v4.png"
        />
        <Feature
          title="EXTERNAL COLLABORATION"
          subtitle="Onboard new video editors in an instant"
          description="Avoid the usual delay in sharing, understanding and sorting through content. No files to transfer, no knowledge to share. Teammates start working on briefs in seconds."
          quote="After every shoot, it is very easy for our new editors to identify what clips to throw into any of their sequence. We don't have to manually look through our folders and files on Google Drive. It makes onboarding of editors very easy."
          author={{
            name: "Jordan Perez-Hughes",
            role: "Creative Strategist",
            image: "/jordan_purdy.png"
          }}
          image="/maximize_reuse.png"
          reverse={true}
        />
        <Feature
          title="BRIEF WRITING"
          subtitle="Write briefs in minutes"
          description="Quickly find clips, share links and eliminate the hassle of noting timestamps or file names. Reduce unncessary back and forth."
          quote="For Hook testing purposes, It would probably take five times longer [without Recharm]. [For variations], I can't even quantify how much longer that would take without Recharm."
          author={{
            name: "Jacob Bigger",
            role: "Senior Performance Marketer",
            image: "https://recharm.com/_next/static/media/jacob_bigger.4d5ac9c7.jpeg"
          }}
          image="/briefs.png"
        />
      </div>
    </section>
  )
}