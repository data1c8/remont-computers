import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Printer, Wrench, Droplets, Scan, FileText, Settings } from 'lucide-react';

const printerServices = [
  {
    icon: Wrench,
    title: 'Ремонт принтеров',
    description: 'Ремонт струйных и лазерных принтеров всех марок',
    price: 'от 900 ₽'
  },
  {
    icon: Droplets,
    title: 'Заправка картриджей',
    description: 'Заправка и восстановление картриджей, чипование',
    price: 'от 300 ₽'
  },
  {
    icon: Scan,
    title: 'Ремонт МФУ',
    description: 'Ремонт многофункциональных устройств и копиров',
    price: 'от 1200 ₽'
  },
  {
    icon: Settings,
    title: 'Настройка печати',
    description: 'Настройка качества печати, калибровка цветов',
    price: 'от 400 ₽'
  }
];

const brands = [
  'HP', 'Canon', 'Epson', 'Brother', 'Samsung', 'Xerox', 'Kyocera', 'Ricoh'
];

const PrinterRepair = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Ремонт принтеров и МФУ</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Профессиональный ремонт и обслуживание печатающих устройств
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {printerServices.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600 mb-4">{service.price}</div>
                    <Button variant="outline" className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Ремонтируем принтеры всех брендов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {brands.map((brand, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                      <div className="text-lg font-semibold text-gray-700">{brand}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Частые проблемы с принтерами</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Проблемы с печатью:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Принтер не печатает</li>
                    <li>• Плохое качество печати</li>
                    <li>• Полосы на документах</li>
                    <li>• Замятие бумаги</li>
                    <li>• Медленная печать</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Технические проблемы:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Принтер не включается</li>
                    <li>• Ошибки на дисплее</li>
                    <li>• Проблемы с подключением</li>
                    <li>• Не распознается картридж</li>
                    <li>• Шум при работе</li>
                  </ul>
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

export default PrinterRepair;