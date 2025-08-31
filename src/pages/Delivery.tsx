import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Clock, MapPin, Phone, CheckCircle, Home } from 'lucide-react';

const deliveryOptions = [
  {
    icon: Home,
    title: 'Выезд мастера на дом',
    description: 'Мастер приедет к вам для диагностики и ремонта',
    price: '500 ₽',
    time: 'В день обращения',
    features: ['Диагностика на месте', 'Мелкий ремонт', 'Консультация', 'Забор техники']
  },
  {
    icon: Truck,
    title: 'Курьерская доставка',
    description: 'Забираем и доставляем технику после ремонта',
    price: '300 ₽',
    time: '2-4 часа',
    features: ['Забор техники', 'Доставка после ремонта', 'Упаковка', 'Страховка']
  },
  {
    icon: MapPin,
    title: 'Самовывоз',
    description: 'Принесите технику в наш сервисный центр',
    price: 'Бесплатно',
    time: 'Сразу',
    features: ['Без доплат', 'Быстрое оформление', 'Парковка рядом', 'Удобный график']
  }
];

const zones = [
  { name: 'Центральный округ', price: '300 ₽', time: '1-2 часа' },
  { name: 'Северный округ', price: '400 ₽', time: '2-3 часа' },
  { name: 'Южный округ', price: '400 ₽', time: '2-3 часа' },
  { name: 'Восточный округ', price: '500 ₽', time: '3-4 часа' },
  { name: 'Западный округ', price: '500 ₽', time: '3-4 часа' },
  { name: 'Подмосковье', price: 'от 800 ₽', time: '4-6 часов' }
];

const Delivery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Доставка и выезд мастера</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Удобные варианты доставки техники и выезда специалистов на дом
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {deliveryOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <option.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                    <CardDescription className="text-base">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{option.price}</div>
                      <div className="text-sm text-gray-500">Время: {option.time}</div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Зоны доставки по Москве</CardTitle>
                <CardDescription>Стоимость и время доставки по районам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {zones.map((zone, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{zone.name}</span>
                        <span className="text-blue-600 font-bold">{zone.price}</span>
                      </div>
                      <div className="text-sm text-gray-600">Время доставки: {zone.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Процесс работы с выездом</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h4 className="font-semibold mb-2">Заявка</h4>
                  <p className="text-sm text-gray-600">Оставляете заявку на выезд мастера</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h4 className="font-semibold mb-2">Выезд</h4>
                  <p className="text-sm text-gray-600">Мастер выезжает в удобное время</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h4 className="font-semibold mb-2">Диагностика</h4>
                  <p className="text-sm text-gray-600">Проводим диагностику на месте</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h4 className="font-semibold mb-2">Ремонт</h4>
                  <p className="text-sm text-gray-600">Выполняем ремонт или забираем в сервис</p>
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

export default Delivery;