import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, TrendingUp, Settings, HardDrive } from 'lucide-react';

const Optimization = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Оптимизация компьютера</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ускорение работы компьютера без замены железа
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Zap className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                  <CardTitle>Ускорение загрузки</CardTitle>
                  <CardDescription>Оптимизация автозагрузки и служб Windows</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600 mb-4">от 600 ₽</div>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <TrendingUp className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                  <CardTitle>Повышение производительности</CardTitle>
                  <CardDescription>Настройка системы для максимальной скорости</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600 mb-4">от 800 ₽</div>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <HardDrive className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                  <CardTitle>Очистка диска</CardTitle>
                  <CardDescription>Удаление ненужных файлов и дефрагментация</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600 mb-4">от 400 ₽</div>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Settings className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                  <CardTitle>Настройка реестра</CardTitle>
                  <CardDescription>Очистка и оптимизация системного реестра</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600 mb-4">от 700 ₽</div>
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

export default Optimization;