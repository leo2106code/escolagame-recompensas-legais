
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Desde que implementamos o sistema de gamificação, a participação dos alunos aumentou em mais de 70% e os problemas disciplinares caíram drasticamente.",
      name: "Maria Silva",
      role: "Diretora Escolar",
      avatar: "MS"
    },
    {
      quote: "Os alunos estão mais engajados com o conteúdo e competem de forma saudável para ganhar as recompensas. Isso tornou minhas aulas muito mais dinâmicas.",
      name: "João Pereira",
      role: "Professor de Matemática",
      avatar: "JP"
    },
    {
      quote: "Nossa papelaria local se tornou patrocinadora e tivemos um aumento significativo nas vendas, além de contribuirmos para a melhoria da educação na comunidade.",
      name: "Ana Oliveira",
      role: "Empresária Local",
      avatar: "AO"
    },
    {
      quote: "Antes eu não me importava muito com as aulas, agora estou sempre participando porque quero juntar moedas para trocar por tempo na sala de informática.",
      name: "Lucas Mendes",
      role: "Estudante, 8º ano",
      avatar: "LM"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brand-purple/10 px-3 py-1 text-sm text-brand-purple">
              Depoimentos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              O que dizem sobre nós
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Relatos reais de quem já experimentou nossa plataforma de gamificação
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-2 border-muted">
              <CardContent className="p-6">
                <div className="mb-4 text-4xl text-gray-300">"</div>
                <p className="mb-6 text-gray-600">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarFallback className="bg-brand-blue text-white">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
