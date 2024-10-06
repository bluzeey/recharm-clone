import Image from 'next/image'

export default function TrustedCompanies() {
  return (
    <div className="mt-16 text-center">
      <p className="mt-6 font-display text-base text-slate-900">Trusted by many companies</p>
      <div className="mt-1 flex flex-row items-center justify-center gap-x-8 overflow-visible overflow-x-auto sm:mt-0 sm:gap-y-10 md:flex-wrap xl:gap-x-12 xl:gap-y-0">
        <Image 
          alt="HexClad" 
          width={294} 
          height={102} 
          className="my-4" 
          src="https://recharm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhexclad_logo_cropped.d8694638.png&amp;w=640&amp;q=75" 
        />
        <Image 
          alt="BarkBox" 
          width={168} 
          height={46} 
          className="my-4" 
          src="https://recharm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbarkbox_logo.592b5122.png&amp;w=384&amp;q=75" 
        />
        <Image 
          alt="Harrys" 
          width={168} 
          height={29} 
          className="my-4" 
          src="https://recharm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fharrys_logo.b57a6cf3.png&amp;w=384&amp;q=75" 
        />
        <Image 
          alt="MAGIC SPOON" 
          width={126} 
          height={59} 
          className="my-4" 
          src="https://recharm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmagicspoon-logo.f4a6f6c6.png&amp;w=256&amp;q=75" 
        />
        <Image 
          alt="MudWtr" 
          width={210} 
          height={38} 
          className="my-4" 
          src="https://recharm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmudwtr_logo.ea033835.png&amp;w=640&amp;q=75" 
        />
      </div>
    </div>
  );
}
