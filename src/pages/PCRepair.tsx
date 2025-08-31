import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Cpu, HardDrive, Zap, Fan, Clapperboard as Motherboard } from 'lucide-react';

const pcServices = [
  {
    icon: Cpu,
    title: 'Ремонт процессора',
    description: 'Диагностика и замена процессоров Intel и AMD',
    price: 'от 2000 ₽'
  },
  {
    icon: HardDrive,
    title: 'Ремонт накопителей',
    description: 'Ремонт HDD, SSD, замена на более быстрые модели',
    price: 'от 1500 ₽'
  },
  {
    icon: Zap,
    title: 'Ремонт блока питания',
    description: 'Диагностика и замена блоков питания любой мощности',
    price: 'от 1800 ₽'
  },
  {
    icon: Fan,
    title: 'Система охлаждения',
    description: 'Чистка, замена кулеров и термопасты',
    price: 'от 800 ₽'
  },
  {
    icon: Motherboard,
    title: 'Ремонт материнской платы',
    description: 'Микропайка, замена конденсаторов и чипов',
    price: 'от 3000 ₽'
  },
  {
    icon: Monitor,
    title: 'Ремонт видеокарты',
    description: 'Ремонт и замена видеокарт, прошивка BIOS',
    price: 'от 2500 ₽'
  }
];

const PCRepair = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Ремонт настольных компьютеров</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Комплексный ремонт системных блоков, замена комплектующих и модернизация
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Что мы ремонтируем</h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">Игровые компьютеры</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">Офисные ПК</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">Рабочие станции</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">Серверы</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Ремонт ПК" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pcServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-green-600 mb-4">{service.price}</div>
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

export default PCRepair;