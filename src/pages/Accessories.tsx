import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mouse, Keyboard, Headphones, Monitor, Usb, Cable } from 'lucide-react';

const Accessories = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Компьютерные аксессуары</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Широкий выбор аксессуаров для компьютеров и ноутбуков
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Mouse className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Мыши</CardTitle>
                  <CardDescription>Проводные и беспроводные мыши для работы и игр</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Каталог мышей</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Keyboard className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Клавиатуры</CardTitle>
                  <CardDescription>Механические и мембранные клавиатуры</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Каталог клавиатур</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Headphones className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Наушники</CardTitle>
                  <CardDescription>Наушники и гарнитуры для работы и развлечений</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Каталог наушников</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Monitor className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Мониторы</CardTitle>
                  <CardDescription>Мониторы различных размеров и разрешений</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Каталог мониторов</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Usb className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle>USB устройства</CardTitle>
                  <CardDescription>Флешки, хабы, адаптеры и другие USB устройства</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Каталог USB</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Cable className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Кабели</CardTitle>
                  <CardDescription>Все виды кабелей для подключения устройств</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Каталог кабелей</Button>
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

export default Accessories;