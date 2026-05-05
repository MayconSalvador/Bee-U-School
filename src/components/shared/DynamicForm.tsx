import { useState } from "react";

type Audience = "self" | "other" | "";
type PhoneType = "celular" | "fixo";

interface DynamicFormProps {
  title: string;
  id?: string;
}

const ageOptions = ["18-24 anos", "25-34 anos", "35 anos ou +", "17 anos ou -"];

const DynamicForm = ({ title, id = "form-section" }: DynamicFormProps) => {
  const [phoneType, setPhoneType] = useState<PhoneType>("celular");
  const [audience, setAudience] = useState<Audience>("");
  const [age, setAge] = useState("");

  return (
    <section id={id} className="w-full px-6 md:px-[80px] lg:px-[160px] py-16 bg-light-blue">
      <div className="max-w-[520px] mx-auto bg-navy rounded-2xl p-6 md:p-8 shadow-xl">
        <p className="text-primary-foreground text-center text-base font-bold mb-6">
          {title}
        </p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Nome"
              className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 text-sm py-2 outline-none focus:border-gold transition-colors"
            />
            <input
              type="text"
              placeholder="Sobrenome"
              className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 text-sm py-2 outline-none focus:border-gold transition-colors"
            />
          </div>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 text-sm py-2 outline-none focus:border-gold transition-colors"
          />

          {/* Tipo de telefone */}
          <div className="pt-2">
            <p className="text-primary-foreground/80 text-xs mb-2">Tipo de telefone</p>
            <div className="flex gap-2">
              {(["celular", "fixo"] as PhoneType[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setPhoneType(t)}
                  className={`flex-1 text-xs font-semibold py-2 rounded-md border transition-colors capitalize ${
                    phoneType === t
                      ? "bg-gold text-navy border-gold"
                      : "border-primary-foreground/30 text-primary-foreground/80 hover:border-gold"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <input
              type="tel"
              placeholder={phoneType === "celular" ? "(00) 00000-0000" : "(00) 0000-0000"}
              className="mt-3 w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 text-sm py-2 outline-none focus:border-gold transition-colors"
            />
          </div>

          {/* Para quem é o curso */}
          <div className="pt-2">
            <p className="text-primary-foreground/80 text-xs mb-2">Para quem é o curso?</p>
            <div className="flex gap-2">
              {[
                { v: "self", l: "Para mim" },
                { v: "other", l: "Para outra pessoa" },
              ].map((o) => (
                <button
                  key={o.v}
                  type="button"
                  onClick={() => {
                    setAudience(o.v as Audience);
                    setAge("");
                  }}
                  className={`flex-1 text-xs font-semibold py-2 rounded-md border transition-colors ${
                    audience === o.v
                      ? "bg-gold text-navy border-gold"
                      : "border-primary-foreground/30 text-primary-foreground/80 hover:border-gold"
                  }`}
                >
                  {o.l}
                </button>
              ))}
            </div>
          </div>

          {/* Idade condicional */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              audience ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-primary-foreground/80 text-xs mb-2 pt-2">
              {audience === "self" ? "Qual sua idade?" : "Qual a idade dele(a)?"}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {ageOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setAge(opt)}
                  className={`text-xs font-semibold py-2 rounded-md border transition-colors ${
                    age === opt
                      ? "bg-gold text-navy border-gold"
                      : "border-primary-foreground/30 text-primary-foreground/80 hover:border-gold"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-gold text-navy font-bold text-sm tracking-wider py-3 rounded-md hover:bg-gold-light transition-colors"
          >
            QUERO COMEÇAR
          </button>
        </form>
      </div>
    </section>
  );
};

export default DynamicForm;
