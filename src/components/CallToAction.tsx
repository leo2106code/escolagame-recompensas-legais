
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";

const CallToAction = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Solicitação recebida!",
      description: "Entraremos em contato em breve para agendar sua demonstração.",
    });
  };

  return (
    <section className="py-16 bg-itus-blue text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Vamos gamificar sua escola?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Peça uma demonstração agora e descubra como a Itus pode transformar a experiência de aprendizado
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-lg mt-8">
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Input
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                placeholder="Nome da Escola"
                required
              />
            </div>
            <div className="grid gap-2">
              <Input
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                placeholder="Nome do Responsável"
                required
              />
            </div>
            <div className="grid gap-2">
              <Input
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                type="email"
                placeholder="E-mail de Contato"
                required
              />
            </div>
            <div className="grid gap-2">
              <Input
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                placeholder="Telefone"
                required
              />
            </div>
            <Button type="submit" className="bg-itus-green hover:bg-itus-green/90 text-white w-full">
              Solicitar Demonstração
            </Button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-200">
            Ao enviar, você concorda em receber comunicações sobre nossos serviços.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
