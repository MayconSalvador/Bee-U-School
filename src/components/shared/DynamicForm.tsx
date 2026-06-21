import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/config/contact";

interface DynamicFormProps {
  title: string;
  id?: string;
  pageOrigin?: "home" | "kids" | "empresas" | "outro";
}

const DynamicForm = ({ title, id = "form-section", pageOrigin = "home" }: DynamicFormProps) => {
  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section id={id} className="w-full px-6 md:px-[80px] lg:px-[160px] py-16 bg-light-blue">
      <div className="max-w-[520px] mx-auto bg-navy rounded-2xl p-6 md:p-8 shadow-xl">
        <p className="text-primary-foreground text-center text-base font-bold mb-6">{title}</p>
        <div className="space-y-4 flex flex-col items-center text-center">
          <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
            Clique no botão abaixo para entrar em contato conosco via WhatsApp e conversar com um dos nossos especialistas!
          </p>
          
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-gold text-navy font-bold text-sm tracking-wider py-3 rounded-md hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
          >
            QUERO COMECAR <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DynamicForm;
