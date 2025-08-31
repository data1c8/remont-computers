import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad2, Cpu, Monitor, Zap, Fan, HardDrive } from 'lucide-react';

const GamePCRepair = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-red-50 to-purple-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Ремонт игровых компьютеров</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Специализированный ремонт и апгрейд игровых ПК
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Gamepad2 className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <CardTitle>Игровая оптимизация</CardTitle>
                  <CardDescription>Настройка системы для максимальной производительности в играх</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600 mb-4">от 1500 ₽</div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Monitor className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <CardTitle>Апгрейд видеокарты</CardTitle>
                  <CardDescription>Установка мощных видеокарт для современных игр</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600 mb-4">от 1000 ₽</div>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Fan className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <CardTitle>Система охлаждения</CardTitle>
                  <CardDescription>Установка мощного охлаждения для стабильной работы</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600 mb-4">от 2000 ₽</div>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GamePCRepair;