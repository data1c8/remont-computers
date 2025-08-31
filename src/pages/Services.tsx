import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Laptop, 
  Monitor, 
  HardDrive, 
  Shield, 
  Cpu, 
  Wifi,
  Printer,
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Laptop,
    title: 'Ремонт ноутбуков',
    description: 'Полный спектр услуг по ремонту ноутбуков любых марок',
    features: ['Замена экранов', 'Ремонт клавиатур', 'Замена батарей', 'Чистка от пыли'],
    price: 'от 1500 ₽',
    popular: true
  },
  {
    icon: Monitor,
    title: 'Ремонт настольных ПК',
    description: 'Диагностика и ремонт системных блоков всех конфигураций',
    features: ['Замена комплектующих', 'Ремонт блоков питания', 'Настройка BIOS', 'Сборка ПК'],
    price: 'от 1000 ₽',
    popular: false
  },
  {
    icon: HardDrive,
    title: 'Восстановление данных',
    description: 'Восстановление утерянных файлов и данных',
    features: ['Восстановление с HDD', 'Восстановление с SSD', 'Восстановление фото', 'Восстановление документов'],
    price: 'от 2000 ₽',
    popular: false
  },
  {
    icon: Shield,
    title: 'Удаление вирусов',
    description: 'Полная очистка от вредоносного ПО',
    features: ['Удаление вирусов', 'Настройка антивируса', 'Оптимизация системы', 'Защита данных'],
    price: 'от 800 ₽',
    popular: true
  },
  {
    icon: Cpu,
    title: 'Апгрейд компьютера',
    description: 'Модернизация и улучшение производительности',
    features: ['Увеличение RAM', 'Замена процессора', 'Установка SSD', 'Замена видеокарты'],
    price: 'от 500 ₽',
    popular: false
  },
  {
    icon: Wifi,
    title: 'Настройка сети',
    description: 'Настройка интернета и локальных сетей',
    features: ['Настройка Wi-Fi', 'Настройка роутера', 'Локальная сеть', 'VPN настройка'],
    price: 'от 600 ₽',
    popular: false
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Профессиональный ремонт и обслуживание компьютерной техники
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {service.popular && (
                    <Badge className="absolute -top-2 left-4 bg-orange-500">Популярно</Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-10 h-10 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                      <Button className="w-full">
                        Заказать услугу
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
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

export default Services;