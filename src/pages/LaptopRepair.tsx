import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Laptop, Monitor, Keyboard, Battery, Fan, Cpu, CheckCircle } from 'lucide-react';

const repairTypes = [
  {
    icon: Monitor,
    title: 'Замена экрана',
    description: 'Замена разбитых или неисправных экранов ноутбуков',
    price: 'от 3000 ₽',
    time: '1-2 дня'
  },
  {
    icon: Keyboard,
    title: 'Ремонт клавиатуры',
    description: 'Замена клавиш, ремонт шлейфов клавиатуры',
    price: 'от 1500 ₽',
    time: '1 день'
  },
  {
    icon: Battery,
    title: 'Замена батареи',
    description: 'Установка новых аккумуляторов для ноутбуков',
    price: 'от 2500 ₽',
    time: '1 день'
  },
  {
    icon: Fan,
    title: 'Чистка и охлаждение',
    description: 'Чистка от пыли, замена термопасты',
    price: 'от 1200 ₽',
    time: '2-3 часа'
  },
  {
    icon: Cpu,
    title: 'Ремонт материнской платы',
    description: 'Микропайка, замена чипов и компонентов',
    price: 'от 4000 ₽',
    time: '3-5 дней'
  }
];

const brands = [
  'ASUS', 'Acer', 'HP', 'Dell', 'Lenovo', 'MSI', 'Apple', 'Samsung', 'Toshiba', 'Sony'
];

const LaptopRepair = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Популярная услуга</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Ремонт ноутбуков</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Профессиональный ремонт ноутбуков любых марок и моделей. 
                  Быстро, качественно и с гарантией до 1 года.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="text-2xl font-bold text-blue-600">1-3</div>
                    <div className="text-sm text-gray-600">дня на ремонт</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-sm text-gray-600">месяцев гарантии</div>
                  </div>
                </div>

                <Button size="lg" className="text-lg px-8 py-4">
                  Заказать ремонт ноутбука
                </Button>
              </div>

              <div>
                <img 
                  src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Ремонт ноутбуков" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Виды ремонта ноутбуков</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repairTypes.map((repair, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <repair.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{repair.title}</CardTitle>
                    <CardDescription>{repair.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-blue-600">{repair.price}</span>
                      <span className="text-sm text-gray-500">{repair.time}</span>
                    </div>
                    <Button variant="outline" className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Ремонтируем ноутбуки всех брендов</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              {brands.map((brand, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition-shadow">
                  <div className="text-lg font-semibold text-gray-700">{brand}</div>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Процесс ремонта</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h4 className="font-semibold mb-2">Диагностика</h4>
                  <p className="text-sm text-gray-600">Бесплатная диагностика неисправностей</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h4 className="font-semibold mb-2">Согласование</h4>
                  <p className="text-sm text-gray-600">Согласование стоимости и сроков</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h4 className="font-semibold mb-2">Ремонт</h4>
                  <p className="text-sm text-gray-600">Выполнение ремонтных работ</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h4 className="font-semibold mb-2">Тестирование</h4>
                  <p className="text-sm text-gray-600">Проверка работоспособности</p>
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

export default LaptopRepair;