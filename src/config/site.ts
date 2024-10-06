import { SiteConfig } from "@/types"
import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Recharm - Scale creative production. Make creative teams more productive.",
  author: "Recharm",
  description: "Auto-organize videos to find the best scenes. Remix UGC videos to scale your video production. Write briefs and scripts very quickly.",
  keywords: ["Video Auto-organization", "UGC Remixing", "Creative Production", "Video Tagging", "Video Search"],
  url: {
    base: "https://recharm.com",
    author: "https://recharm.com",
  },
  links: {
    github: "https://github.com/recharm", // Assuming there's a GitHub link
  },
  ogImage: "https://www.recharm.com/recharm_social_pic_v3.png",
  
}
