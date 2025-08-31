import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Cpu, HardDrive, Zap, Monitor, MemoryStick, TrendingUp } from 'lucide-react';

const upgradeOptions = [
  {
    icon: MemoryStick,
    title: 'Увеличение оперативной памяти',
    description: 'Установка дополнительных планок RAM для ускорения работы',
    benefit: 'Ускорение до 300%',
    price: 'от 500 ₽'
  },
  {
    icon: HardDrive,
    title: 'Замена HDD на SSD',
    description: 'Установка быстрого SSD накопителя вместо медленного HDD',
    benefit: 'Ускорение до 1000%',
    price: 'от 800 ₽'
  },
  {
    icon: Cpu,
    title: 'Апгрейд процессора',
    description: 'Замена процессора на более мощную модель',
    benefit: 'Прирост до 200%',
    price: 'от 1500 ₽'
  },
  {
    icon: Monitor,
    title: 'Замена видеокарты',
    description: 'Установка современной видеокарты для игр и работы с графикой',
    benefit: 'Прирост до 500%',
    price: 'от 1000 ₽'
  },
  {
    icon: Zap,
    title: 'Замена блока питания',
    description: 'Установка более мощного и надежного блока питания',
    benefit: 'Стабильность +100%',
    price: 'от 700 ₽'
  }
];

const HardwareUpgrade = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Апгрейд компьютера</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Модернизация вашего компьютера для повышения производительности
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Зачем нужен апгрейд?</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                    <span className="text-lg">Увеличение скорости работы</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                    <span className="text-lg">Возможность запуска новых программ</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                    <span className="text-lg">Улучшение игровой производительности</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                    <span className="text-lg">Экономия на покупке нового ПК</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Апгрейд компьютера" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {upgradeOptions.map((upgrade, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <upgrade.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle>{upgrade.title}</CardTitle>
                    <CardDescription>{upgrade.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Прирост производительности</span>
                        <span className="font-semibold text-green-600">{upgrade.benefit}</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div className="text-xl font-bold text-purple-600 mb-4">{upgrade.price}</div>
                    <Button variant="outline" className="w-full">Заказать апгрейд</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Бесплатная консультация по апгрейду</h3>
              <p className="text-gray-600 mb-6">
                Наши специалисты помогут выбрать оптимальную конфигурацию для ваших задач и бюджета
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Получить консультацию
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HardwareUpgrade;