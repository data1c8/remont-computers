import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wind, Thermometer, Fan, Droplets } from 'lucide-react';

const Cleaning = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Чистка компьютеров</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Профессиональная чистка от пыли и замена термопасты
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Wind className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
                  <CardTitle>Чистка от пыли</CardTitle>
                  <CardDescription>Удаление пыли из системного блока и ноутбука</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyan-600 mb-4">от 800 ₽</div>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Thermometer className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
                  <CardTitle>Замена термопасты</CardTitle>
                  <CardDescription>Замена термоинтерфейса для лучшего охлаждения</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyan-600 mb-4">от 600 ₽</div>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Fan className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
                  <CardTitle>Замена кулеров</CardTitle>
                  <CardDescription>Установка новых вентиляторов охлаждения</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyan-600 mb-4">от 1200 ₽</div>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Droplets className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
                  <CardTitle>Жидкостное охлаждение</CardTitle>
                  <CardDescription>Установка и обслуживание СВО систем</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyan-600 mb-4">от 3000 ₽</div>
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

export default Cleaning;