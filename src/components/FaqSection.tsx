
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqItems = [
    {
      question: "Quanto tempo leva para implementar a plataforma Itus?",
      answer: "O processo completo de implementação leva em média de 2 a 3 semanas, incluindo treinamento da equipe escolar e customização da plataforma para as necessidades específicas da sua instituição."
    },
    {
      question: "Como os alunos ganham as moedas digitais?",
      answer: "Os alunos ganham moedas através de diversas atividades definidas pela escola, como presença nas aulas, participação em sala, notas acima da média, comportamento positivo, e conclusão de desafios educacionais."
    },
    {
      question: "Quem administra o sistema na escola?",
      answer: "O sistema pode ser administrado pela coordenação pedagógica, professores e funcionários designados. Nossa interface é intuitiva e oferecemos treinamento completo para toda a equipe envolvida."
    },
    {
      question: "É possível personalizar as recompensas disponíveis?",
      answer: "Sim, cada escola pode personalizar completamente o catálogo de recompensas de acordo com sua realidade e recursos disponíveis, desde itens físicos até privilégios e experiências."
    },
    {
      question: "Como o modelo de cashback educacional funciona?",
      answer: "Estabelecemos parcerias com empresas locais que podem oferecer produtos ou patrocínios para a loja da escola. Em troca, ganham visibilidade junto à comunidade escolar e contribuem para a educação."
    },
    {
      question: "A plataforma oferece relatórios e métricas de desempenho?",
      answer: "Sim, a plataforma oferece dashboards completos com métricas de engajamento, desempenho acadêmico e comportamental, além de relatórios personalizáveis para gestores escolares."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-itus-green/10 px-3 py-1 text-sm text-itus-green">
              Dúvidas
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-itus-blue">
              Perguntas Frequentes
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Respostas para as dúvidas mais comuns sobre nossa plataforma
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-itus-blue font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
