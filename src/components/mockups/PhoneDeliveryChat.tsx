import { CheckCheck } from 'lucide-react'
import { DELIVERY_CHAT_MESSAGES, DEMO_STORE_NAME } from '@/content/mockupData'
import { cn } from '@/lib/cn'

interface PhoneDeliveryChatProps {
  accessibleDescription: string
  className?: string
}

const MESSAGE_STAGGER_MS = 260

export function PhoneDeliveryChat({ accessibleDescription, className }: PhoneDeliveryChatProps) {
  return (
    <div
      role="img"
      aria-label={accessibleDescription}
      className={cn(
        'phone-viewport relative mx-auto w-full max-w-[300px] rounded-[2.4rem] bg-ink-sunken p-2.5 shadow-[0_40px_80px_-30px_hsl(var(--brand)/0.4)] ring-1 ring-line',
        className,
      )}
    >
      <div aria-hidden="true" className="phone-content flex aspect-[9/18] flex-col overflow-hidden rounded-[1.9rem] bg-ink-raised">
        <div className="flex items-center gap-[0.6em] border-b border-line bg-ink px-[0.9em] pb-[0.6em] pt-[1.6em]">
          <span className="flex h-[2.2em] w-[2.2em] items-center justify-center rounded-full bg-brand font-wide text-[0.75em] font-extrabold text-ink">
            LE
          </span>
          <div className="min-w-0">
            <p className="truncate text-[0.85em] font-semibold text-cream">{DEMO_STORE_NAME}</p>
            <p className="text-[0.62em] text-signal">online</p>
          </div>
        </div>

        <ol className="flex flex-1 flex-col justify-end gap-[0.7em] px-[0.8em] pb-[1.2em]">
          {DELIVERY_CHAT_MESSAGES.map((chatMessage, messageIndex) => (
            <li
              key={chatMessage.stageLabel}
              className="max-w-[88%] animate-screen-in rounded-[0.9em] rounded-tl-[0.2em] bg-ink px-[0.8em] py-[0.55em] ring-1 ring-line"
              style={{ animationDelay: `${messageIndex * MESSAGE_STAGGER_MS}ms` }}
            >
              <span className="font-mono text-[0.58em] uppercase tracking-[0.12em] text-brand-light">
                {chatMessage.stageLabel}
              </span>
              <p className="mt-[0.15em] text-[0.78em] text-cream">{chatMessage.text}</p>
              <span className="mt-[0.2em] flex items-center justify-end gap-[0.25em] font-mono text-[0.55em] text-cream-dim">
                {chatMessage.timeLabel}
                <CheckCheck className="h-[1.3em] w-[1.3em] text-signal" />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
