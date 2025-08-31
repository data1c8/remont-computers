import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Users, Shield, Clock, Award, Headphones } from 'lucide-react';

const corporateServices = [
  {
    icon: Building,
    title: 'IT-аутсорсинг',
    description: 'Полное IT-обслуживание офиса',
    price: 'от 15000 ₽/мес'
  },
  {
    icon: Users,
    title: 'Абонентское обслуживание',
    description: 'Регулярное обслуживание компьютерного парка',
    price: 'от 500 ₽/ПК'
  },
  {
    icon: Shield,
    title: 'Настройка безопасности',
    description: 'Комплексная защита корпоративной сети',
    price: 'от 10000 ₽'
  }
];

const CorporateService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Корпоративное обслуживание</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Профессиональное IT-обслуживание для бизнеса
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {corporateServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                    <Button className="w-full">Получить предложение</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CorporateService;