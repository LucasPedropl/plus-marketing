import { MessageCircle } from 'lucide-react'
import { SALES_CONTACT_URL, SALES_WHATSAPP_DISPLAY } from '@/content/site'

export function FloatingWhatsAppButton() {
  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={SALES_CONTACT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Conversar no WhatsApp pelo número ${SALES_WHATSAPP_DISPLAY}`}
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-4 pr-5 font-semibold text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] hover:shadow-[0_12px_36px_rgba(37,211,102,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <span className="relative flex h-7 w-7 items-center justify-center">
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
          </span>
          <MessageCircle className="h-6 w-6 fill-white" />
        </span>

        <span className="flex flex-col text-left leading-tight">
          <span className="text-[11px] font-medium text-white/90">Fale com vendas</span>
          <span className="font-mono text-xs font-bold">{SALES_WHATSAPP_DISPLAY}</span>
        </span>
      </a>
    </aside>
  )
}
