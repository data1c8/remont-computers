import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star } from 'lucide-react';

const priceCategories = [
  {
    title: 'Ремонт ноутбуков',
    services: [
      { name: 'Замена экрана', price: 'от 3000 ₽', time: '1-2 дня' },
      { name: 'Замена клавиатуры', price: 'от 1500 ₽', time: '1 день' },
      { name: 'Замена батареи', price: 'от 2500 ₽', time: '1 день' },
      { name: 'Чистка от пыли', price: 'от 1200 ₽', time: '2-3 часа' },
      { name: 'Замена кулера', price: 'от 1800 ₽', time: '1 день' }
    ]
  },
  {
    title: 'Ремонт ПК',
    services: [
      { name: 'Замена материнской платы', price: 'от 2000 ₽', time: '1-2 дня' },
      { name: 'Замена блока питания', price: 'от 1500 ₽', time: '1 день' },
      { name: 'Замена процессора', price: 'от 1000 ₽', time: '1 день' },
      { name: 'Установка RAM', price: 'от 500 ₽', time: '30 мин' },
      { name: 'Замена видеокарты', price: 'от 800 ₽', time: '1 час' }
    ]
  },
  {
    title: 'Программные услуги',
    services: [
      { name: 'Удаление вирусов', price: 'от 800 ₽', time: '2-4 часа' },
      { name: 'Установка Windows', price: 'от 1000 ₽', time: '2-3 часа' },
      { name: 'Восстановление данных', price: 'от 2000 ₽', time: '1-3 дня' },
      { name: 'Настройка сети', price: 'от 600 ₽', time: '1-2 часа' },
      { name: 'Установка программ', price: 'от 300 ₽', time: '30 мин' }
    ]
  }
];

const packages = [
  {
    title: 'Базовый',
    price: '1500 ₽',
    description: 'Основные услуги по ремонту',
    features: [
      'Диагностика',
      'Простой ремонт',
      'Гарантия 3 месяца',
      'Консультация'
    ],
    popular: false
  },
  {
    title: 'Стандартный',
    price: '3000 ₽',
    description: 'Расширенный пакет услуг',
    features: [
      'Полная диагностика',
      'Комплексный ремонт',
      'Гарантия 6 месяцев',
      'Выезд на дом',
      'Профилактика'
    ],
    popular: true
  },
  {
    title: 'Премиум',
    price: '5000 ₽',
    description: 'Максимальный сервис',
    features: [
      'VIP диагностика',
      'Любой ремонт',
      'Гарантия 12 месяцев',
      'Приоритетный выезд',
      'Обучение пользователя',
      'Техподдержка 24/7'
    ],
    popular: false
  }
];

const Prices = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Цены на услуги</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Прозрачные цены без скрытых платежей. Окончательная стоимость определяется после диагностики
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${pkg.popular ? 'border-blue-500 scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Популярный
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                    <div className="text-4xl font-bold text-blue-600 my-4">{pkg.price}</div>
                    <CardDescription className="text-base">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}>
                      Выбрать пакет
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-8">
              {priceCategories.map((category, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="text-left p-4 font-semibold">Услуга</th>
                            <th className="text-left p-4 font-semibold">Цена</th>
                            <th className="text-left p-4 font-semibold">Время</th>
                            <th className="text-left p-4 font-semibold">Действие</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.services.map((service, idx) => (
                            <tr key={idx} className="border-b hover:bg-gray-50">
                              <td className="p-4">{service.name}</td>
                              <td className="p-4 font-semibold text-blue-600">{service.price}</td>
                              <td className="p-4 text-gray-600">{service.time}</td>
                              <td className="p-4">
                                <Button variant="outline" size="sm">Заказать</Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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

export default Prices;