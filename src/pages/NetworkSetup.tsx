import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wifi, Router, Shield, Globe, Smartphone, Monitor } from 'lucide-react';

const networkServices = [
  {
    icon: Wifi,
    title: 'Настройка Wi-Fi',
    description: 'Настройка беспроводной сети, оптимизация сигнала',
    price: 'от 600 ₽'
  },
  {
    icon: Router,
    title: 'Настройка роутера',
    description: 'Подключение и настройка маршрутизаторов всех марок',
    price: 'от 800 ₽'
  },
  {
    icon: Globe,
    title: 'Подключение к интернету',
    description: 'Настройка интернет-соединения, решение проблем с подключением',
    price: 'от 500 ₽'
  },
  {
    icon: Shield,
    title: 'Настройка VPN',
    description: 'Установка и настройка VPN для безопасного интернета',
    price: 'от 700 ₽'
  },
  {
    icon: Monitor,
    title: 'Локальная сеть',
    description: 'Создание домашней или офисной локальной сети',
    price: 'от 1000 ₽'
  },
  {
    icon: Smartphone,
    title: 'Настройка устройств',
    description: 'Подключение смартфонов, планшетов, Smart TV к сети',
    price: 'от 400 ₽'
  }
];

const NetworkSetup = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Настройка сетей и интернета</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Профессиональная настройка сетевого оборудования и интернет-соединений
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {networkServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-cyan-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-cyan-600 mb-4">{service.price}</div>
                    <Button variant="outline" className="w-full">Заказать настройку</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Что мы настраиваем</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Wi-Fi сети</h4>
                  <p className="text-sm text-gray-600">Домашние и офисные беспроводные сети</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Router className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Роутеры</h4>
                  <p className="text-sm text-gray-600">Маршрутизаторы всех производителей</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Безопасность</h4>
                  <p className="text-sm text-gray-600">Защита сети от внешних угроз</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Интернет</h4>
                  <p className="text-sm text-gray-600">Подключение к провайдерам</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NetworkSetup;