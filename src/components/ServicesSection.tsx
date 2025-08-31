import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Laptop, 
  Monitor, 
  HardDrive, 
  Shield, 
  Cpu, 
  Wifi,
  Printer,
  Smartphone,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Laptop,
    title: 'Ремонт ноутбуков',
    description: 'Замена экранов, клавиатур, материнских плат. Чистка от пыли и замена термопасты.',
    price: 'от 1500 ₽'
  },
  {
    icon: Monitor,
    title: 'Ремонт настольных ПК',
    description: 'Диагностика и ремонт системных блоков, замена комплектующих.',
    price: 'от 1000 ₽'
  },
  {
    icon: HardDrive,
    title: 'Восстановление данных',
    description: 'Восстановление файлов с поврежденных жестких дисков и SSD.',
    price: 'от 2000 ₽'
  },
  {
    icon: Shield,
    title: 'Удаление вирусов',
    description: 'Полная очистка от вредоносного ПО и настройка антивирусной защиты.',
    price: 'от 800 ₽'
  },
  {
    icon: Cpu,
    title: 'Апгрейд компьютера',
    description: 'Модернизация железа для повышения производительности.',
    price: 'от 500 ₽'
  },
  {
    icon: Wifi,
    title: 'Настройка сети',
    description: 'Настройка Wi-Fi, локальных сетей и интернет-подключения.',
    price: 'от 600 ₽'
  },
  {
    icon: Printer,
    title: 'Ремонт принтеров',
    description: 'Ремонт и обслуживание принтеров, МФУ и копировальных аппаратов.',
    price: 'от 900 ₽'
  },
  {
    icon: Smartphone,
    title: 'Ремонт планшетов',
    description: 'Замена экранов, батарей и других компонентов планшетов.',
    price: 'от 1200 ₽'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предоставляем полный спектр услуг по ремонту и обслуживанию компьютерной техники
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  Подробнее
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;