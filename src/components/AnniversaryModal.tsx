import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, X } from "lucide-react";
import anniversaryArt from "@/assets/anniversary-2026.jpg";
import { WHATSAPP_NUMBER } from "@/config/contact";
import { DialogOverlay } from "@/components/ui/dialog";

const SESSION_KEY = "beeu:anniversary-2026:seen";
// Includes all of November 8 in the school's timezone (Brasília).
const CAMPAIGN_END = Date.parse("2026-11-09T00:00:00-03:00");
const DETAILS_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Vim pelo site da Bee U e gostaria de saber mais sobre as promoções de aniversário de 8 anos.",
)}`;

function shouldShowCampaign() {
  if (Date.now() >= CAMPAIGN_END) return false;
  try {
    return sessionStorage.getItem(SESSION_KEY) !== "true";
  } catch {
    // The promotion still works when browser storage is unavailable.
    return true;
  }
}

export default function AnniversaryModal() {
  const [open, setOpen] = useState(shouldShowCampaign);

  useEffect(() => {
    if (!open) return;
    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // Keep the close button usable even with blocked browser storage.
    }

    let timeout: ReturnType<typeof setTimeout>;
    const scheduleExpiry = () => {
      const remaining = CAMPAIGN_END - Date.now();
      if (remaining <= 0) {
        setOpen(false);
        return;
      }
      timeout = setTimeout(scheduleExpiry, Math.min(remaining, 2_147_483_647));
    };
    scheduleExpiry();
    return () => clearTimeout(timeout);
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <DialogOverlay className="bg-slate-950/80 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh-32px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-[#041d35] text-white shadow-2xl outline-none focus-visible:ring-2 focus-visible:ring-white"
          style={{ width: "min(calc(100vw - 32px), 560px, calc(100dvh - 152px))" }}
        >
          <Dialog.Title className="sr-only">Aniversário de 8 anos da Bee U</Dialog.Title>
          <Dialog.Description className="sr-only">
            No aniversário Bee U, quem ganha o presente é você. Conheça as promoções
            de aniversário até 8 de novembro de 2026.
          </Dialog.Description>
          <img
            src={anniversaryArt}
            alt="Bee U: 8 anos fazendo uma revolução no ensino e aprendizado da língua inglesa. No aniversário Bee U, quem ganha o presente é você."
            width={1254}
            height={1254}
            className="block h-auto w-full"
          />
          <Dialog.Close
            aria-label="Fechar promoção"
            className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#041d35]/95 text-white shadow-lg transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#041d35]"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </Dialog.Close>
          <div className="space-y-3 px-5 py-4 text-center">
            <a
              href={DETAILS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#ed0024] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#c9001e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#041d35]"
            >
              Saiba mais <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <p className="text-xs text-slate-300">Até 8 de novembro de 2026.</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
