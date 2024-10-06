import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQAccordion() {
  const faqs = [
    {
      question: "What is Recharm?",
      answer:
        "Recharm is a video auto-organization system designed to cut your videos into modular clips, categorize them, and make them searchable. It helps creative teams scale their video production and create more content faster by repurposing existing footage.",
    },
    {
      question: "How does Recharm work?",
      answer:
        "Recharm takes your uploaded videos, or content from integrated platforms like Google Drive, and uses AI to cut, label, and organize the footage. The organized clips can then be used to create better content, streamline collaboration, and save time.",
    },
    {
      question: "Can I use Recharm for creating video ads?",
      answer:
        "Yes! Recharm helps you scale video ad production by allowing you to quickly find clips, remix user-generated content, and create variations of winning ads with minimal effort. It's designed to maximize ROI on your video collection.",
    },
    {
      question: "Is Recharm suitable for teams?",
      answer:
        "Absolutely. Recharm makes it easy for teams to collaborate on video projects by enabling seamless onboarding for new editors and eliminating the need to share or transfer files manually. Everyone can access organized video clips and start working immediately.",
    },
    {
      question: "What are the benefits of using Recharm?",
      answer:
        "Recharm helps teams find hidden gems in their video footage, reuse content efficiently, reduce approval cycles, and create briefs faster. This results in a streamlined production process and higher output of high-quality ads and video content.",
    },
    {
      question: "How do I get started with Recharm?",
      answer:
        "You can get started by signing up for a 14-day free trial on our website. Connect your content storage, upload your videos, and let Recharm handle the rest. Our AI will automatically categorize and tag your content, so you can start creating immediately.",
    },
    {
      question: "What if I encounter issues while using Recharm?",
      answer:
        "We offer support through our help center, community forums, and direct support tickets. For users on premium plans, we provide priority support options to resolve your issues quickly.",
    },
    {
      question: "Is my content secure?",
      answer:
        "Yes, we take security and privacy seriously. All uploaded files are encrypted, stored securely, and only accessed for the purpose of running your video organization and automations. We never share or sell your data.",
    },
  ]

  return (
    <div className="w-full max-w-7xl py-12 sm:py-32">
      <div className=" max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold text-black">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="my-1 text-left text-lg text-black">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-black">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
