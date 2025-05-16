
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PatronSection = () => {
  return (
    <section id="patrocinadores" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brand-blue/10 px-3 py-1 text-sm text-brand-blue">
              Patrocinadores
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Oportunidades para Empresas Locais
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sua marca pode fazer parte deste ecossistema educacional inovador
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Card className="overflow-hidden border-2 border-muted">
            <div className="grid md:grid-cols-2">
              <div className="bg-brand-blue p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Por que ser um patrocinador?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-brand-yellow">✓</span>
                    <span>Acesso ao mercado jovem e suas famílias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-brand-yellow">✓</span>
                    <span>Visibilidade da marca em ambiente educacional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-brand-yellow">✓</span>
                    <span>Construção de relação com futuros consumidores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-brand-yellow">✓</span>
                    <span>Marketing direcionado à comunidade escolar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-brand-yellow">✓</span>
                    <span>Contribuição social para educação local</span>
                  </li>
                </ul>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Como participar:</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/20 text-brand-green">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold">Ofereça produtos ou serviços</h4>
                      <p className="text-gray-500">Disponibilize seus produtos ou serviços como recompensas na plataforma.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/20 text-brand-green">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold">Patrocine eventos escolares</h4>
                      <p className="text-gray-500">Apoie desafios e competições específicas dentro do sistema.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/20 text-brand-green">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold">Seja visível na plataforma</h4>
                      <p className="text-gray-500">Sua marca aparece na loja virtual de recompensas e notificações.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PatronSection;
