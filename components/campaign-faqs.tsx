import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQ {
  id: string
  question: string
  answer: string
}

interface CampaignFAQsProps {
  faqs: FAQ[]
}

export default function CampaignFAQs({ faqs }: CampaignFAQsProps) {
  if (faqs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No FAQs available for this campaign yet.</p>
      </div>
    )
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
