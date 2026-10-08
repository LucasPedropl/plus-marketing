import { useState } from 'react'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FREQUENTLY_ASKED_QUESTIONS } from '@/content/faq'
import { SALES_CONTACT_URL, SECTION_IDS } from '@/content/site'
import { cn } from '@/lib/cn'

export function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggleQuestion = (index: number) => {
    setExpandedIndex((currentIndex) => (currentIndex === index ? null : index))
  }

  return (
    <section
      id={SECTION_IDS.help}
      aria-labelledby="faq-title"
      className="border-t border-line py-16 sm:py-24"
    >
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHeader
          eyebrow="Tire suas Dúvidas"
          titleId="faq-title"
          title="Perguntas frequentes"
          description="Tudo o que você precisa saber para começar a usar o Bix Plus hoje mesmo."
          alignment="center"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FREQUENTLY_ASKED_QUESTIONS.map((item, index) => {
            const isExpanded = expandedIndex === index
            return (
              <div
                key={item.question}
                className={cn(
                  'rounded-xl border transition-colors',
                  isExpanded
                    ? 'border-brand/40 bg-ink-raised ring-1 ring-brand/20'
                    : 'border-line bg-ink-raised/50 hover:border-line hover:bg-ink-raised',
                )}
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-cream text-base sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-cream-dim transition-transform duration-200',
                      isExpanded && 'rotate-180 text-brand-light',
                    )}
                  />
                </button>

                {isExpanded ? (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className="border-t border-line/60 px-5 pb-5 pt-3"
                  >
                    <p className="text-sm leading-relaxed text-cream-dim sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-line bg-ink-sunken p-8 text-center sm:p-10">
          <MessageCircleQuestion className="mx-auto h-8 w-8 text-brand-light mb-3" />
          <h3 className="font-wide text-xl font-bold uppercase text-cream">
            Tem alguma pergunta específica para o seu comércio?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-cream-dim">
            Fale direto com nossa equipe pelo WhatsApp. Tiramos todas as dúvidas sobre seu fluxo de trabalho e montamos uma demonstração.
          </p>
          <div className="mt-6 flex justify-center">
            <ButtonLink href={SALES_CONTACT_URL} size="lg">
              Conversar com especialista no WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
