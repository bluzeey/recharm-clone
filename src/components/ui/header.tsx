import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronDown, Menu } from 'lucide-react'

const resourceLinks = [
  { href: "https://recharm.com/get_hired", title: "Get Hired By Brands", description: "Tell us about yourself" },
  { href: "https://recharm.com/example_video_ads", title: "Creative Strategists", description: "Build new concepts and iterations quickly" },
  { href: "https://recharm.com/for_media_buyers", title: "Media Buyers", description: "End creative bottlenecks" },
  { href: "https://recharm.com/blog", title: "Blog", description: "Creative Ops Blog" },
]

export default function Header() {
  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between items-center">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <div className="flex items-center justify-start">
                <Image
                  src="/recharm_logo.png"
                  alt="Recharm logo"
                  width={200}
                  height={40}
                  priority
                />
              </div>
            </Link>
            <div className="hidden md:flex md:items-center md:gap-x-6">
              <NavLink href="/case_studies">Case Studies</NavLink>
              <NavLink href="/#how_it_works" className="hidden xl:inline">How It Works</NavLink>
              <Popover >
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="inline-flex items-center gap-x-1 rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    Resources
                    <ChevronDown className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-screen max-w-md bg-white">
                  <div className="p-4">
                    {resourceLinks.map((link, index) => (
                      <div key={index} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                        <div>
                          <Link href={link.href} className="font-semibold text-gray-900">
                            {link.title}
                            <span className="absolute inset-0"></span>
                          </Link>
                          <p className="mt-1 text-gray-600">{link.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              <NavLink href="https://recharm.com/get_hired" className="hidden lg:inline">Get Hired By Brands</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="https://app.recharm.com/auth/">Login</NavLink>
            </div>
            <Button asChild className="group bg-indigo-600 text-white hover:text-slate-100 hover:bg-indigo-500 active:bg-indigo-800 active:text-indigo-100 focus-visible:outline-indigo-600">
              <Link href="/get_started">
                <span className="inline md:hidden xl:inline">Get Started</span>
              </Link>
            </Button>
            <div className="-mr-1 md:hidden">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none" aria-label="Toggle Navigation">
                    <Menu className="h-3.5 w-3.5 overflow-visible stroke-slate-700" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  {/* Add your mobile menu content here */}
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

function NavLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 ${className}`}>
      {children}
    </Link>
  )
}