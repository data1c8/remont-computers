import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tablet, Monitor, Battery, Volume2, Wifi, Camera } from 'lucide-react';

const tabletServices = [
  {
    icon: Monitor,
    title: 'Замена экрана',
    description: 'Замена разбитых экранов и тачскринов планшетов',
    price: 'от 2500 ₽'
  },
  {
    icon: Battery,
    title: 'Замена батареи',
    description: 'Установка новых аккумуляторов для планшетов',
    price: 'от 2000 ₽'
  },
  {
    icon: Volume2,
    title: 'Ремонт динамиков',
    description: 'Замена и ремонт аудиосистемы планшетов',
    price: 'от 1500 ₽'
  },
  {
    icon: Wifi,
    title: 'Ремонт Wi-Fi модуля',
    description: 'Восстановление беспроводного подключения',
    price: 'от 1800 ₽'
  },
  {
    icon: Camera,
    title: 'Ремонт камеры',
    description: 'Замена основной и фронтальной камер',
    price: 'от 1600 ₽'
  }
];

const TabletRepair = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Ремонт планшетов</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Качественный ремонт планшетов всех марок с гарантией
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tabletServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-indigo-600 mb-4">{service.price}</div>
                    <Button variant="outline" className="w-full">Заказать ремонт</Button>
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

export default TabletRepair;