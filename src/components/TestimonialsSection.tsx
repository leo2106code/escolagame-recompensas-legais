
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "A plataforma Itus transformou completamente o ambiente da nossa escola. Os alunos estão mais motivados e os índices de participação aumentaram significativamente. Foi um dos melhores investimentos que fizemos.",
      author: "Maria Silva",
      role: "Diretora Pedagógica",
      school: "Colégio Inovação"
    },
    {
      quote: "Implementamos a solução da Itus há 6 meses e já percebemos uma melhora impressionante no engajamento dos alunos. O sistema de recompensas é intuitivo e a equipe de suporte está sempre disponível para ajudar.",
      author: "Carlos Mendes",
      role: "Coordenador Pedagógico",
      school: "Escola Municipal Dr. Paulo Freire"
    },
    {
      quote: "O que mais me impressionou foi a facilidade de implementação e o retorno rápido. Os alunos adoram o sistema de moedas e os pais elogiam a iniciativa. Recomendo para todas as escolas.",
      author: "Ana Beatriz",
      role: "Gestora Escolar",
      school: "Centro Educacional Futuro"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-itus-green/10 px-3 py-1 text-sm text-itus-green">
              Depoimentos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-itus-blue">
              O que dizem sobre nós
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja a opinião de gestores escolares que já implementaram nossa solução
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative rounded-lg border bg-white p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 text-5xl text-itus-green/20">"</div>
              <div className="relative z-10">
                <blockquote className="mb-6 text-gray-700">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-itus-blue/10 flex items-center justify-center text-itus-blue font-bold">
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold text-itus-blue">{testimonial.author}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}, {testimonial.school}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
