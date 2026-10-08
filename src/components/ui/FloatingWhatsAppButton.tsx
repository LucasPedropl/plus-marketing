import { MessageCircle } from 'lucide-react'
import { SALES_CONTACT_URL, SALES_WHATSAPP_DISPLAY } from '@/content/site'

export function FloatingWhatsAppButton() {
  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 sm:right-6"
    >
      <a
        href={SALES_CONTACT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Conversar no WhatsApp pelo número ${SALES_WHATSAPP_DISPLAY}`}
        title="Contato pelo WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.34)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-1 hover:bg-[#20ba59] hover:shadow-[0_14px_36px_rgba(37,211,102,0.42)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <MessageCircle className="h-6 w-6 fill-white" aria-hidden="true" />
      </a>
    </aside>
  )
}
