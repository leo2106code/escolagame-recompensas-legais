
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Aluno participa",
      description: "Alunos participam ativamente das atividades escolares e são recompensados por seu desempenho acadêmico."
    },
    {
      number: "02",
      title: "Ganha moedas",
      description: "Os estudantes recebem moedas digitais por presença, bom comportamento e resultados acadêmicos positivos."
    },
    {
      number: "03",
      title: "Troca por benefícios",
      description: "As moedas acumuladas podem ser trocadas por produtos, experiências, e acesso a recursos da escola como quadras e laboratórios."
    },
    {
      number: "04",
      title: "Todos ganham",
      description: "A escola aumenta retenção e matrículas, os pais veem o engajamento dos filhos, e os alunos são recompensados pelo esforço."
    },
  ];

  return (
    <section id="como-funciona" className="py-16 bg-itus-light-blue">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-itus-green/10 px-3 py-1 text-sm text-itus-green">
              Passo a Passo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-itus-blue">
              Como funciona a plataforma Itus
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Um sistema simples e eficaz que transforma a experiência escolar para todos os envolvidos
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-itus-blue text-white font-bold text-xl">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-8 hidden h-0.5 w-full bg-gradient-to-r from-itus-blue to-transparent md:block"></div>
              )}
              <h3 className="text-xl font-bold text-itus-blue">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
