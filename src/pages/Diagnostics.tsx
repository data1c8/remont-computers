import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Cpu, HardDrive, MemoryStick, Thermometer, Zap } from 'lucide-react';

const diagnosticTypes = [
  {
    icon: Cpu,
    title: 'Диагностика процессора',
    description: 'Проверка работоспособности и температурного режима CPU',
    time: '30 мин',
    free: true
  },
  {
    icon: MemoryStick,
    title: 'Тестирование памяти',
    description: 'Проверка оперативной памяти на ошибки и стабильность',
    time: '45 мин',
    free: true
  },
  {
    icon: HardDrive,
    title: 'Диагностика накопителей',
    description: 'Проверка состояния HDD/SSD, анализ SMART данных',
    time: '60 мин',
    free: true
  },
  {
    icon: Thermometer,
    title: 'Температурная диагностика',
    description: 'Контроль температуры всех компонентов системы',
    time: '20 мин',
    free: true
  },
  {
    icon: Zap,
    title: 'Диагностика питания',
    description: 'Проверка блока питания и энергопотребления',
    time: '40 мин',
    free: true
  },
  {
    icon: Search,
    title: 'Комплексная диагностика',
    description: 'Полная проверка всех компонентов компьютера',
    time: '2-3 часа',
    free: true
  }
];

const Diagnostics = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-green-50 to-teal-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-500">Бесплатно при заказе ремонта</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Компьютерная диагностика</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Профессиональная диагностика для выявления всех неисправностей вашего компьютера
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Что включает диагностика</h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">Проверка всех компонентов</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">Тестирование производительности</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">Анализ системных ошибок</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">Подробный отчет о состоянии</span>
                  </li>
                </ul>
                <Button size="lg" className="mt-8 bg-green-600 hover:bg-green-700">
                  Заказать диагностику
                </Button>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Диагностика компьютера" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {diagnosticTypes.map((diagnostic, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <diagnostic.icon className="w-6 h-6 text-green-600" />
                      </div>
                      {diagnostic.free && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">Бесплатно</Badge>
                      )}
                    </div>
                    <CardTitle>{diagnostic.title}</CardTitle>
                    <CardDescription>{diagnostic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Время:</span>
                      <span className="font-semibold">{diagnostic.time}</span>
                    </div>
                    <Button variant="outline" className="w-full">Заказать диагностику</Button>
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

export default Diagnostics;