import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Headphones, Settings, Download } from 'lucide-react';

const RemoteSupport = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-green-50 to-teal-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Удаленная поддержка</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Решаем проблемы с компьютером дистанционно
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Monitor className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <CardTitle>Удаленный доступ</CardTitle>
                  <CardDescription>Подключаемся к вашему компьютеру для решения проблем</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-4">от 500 ₽</div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Подключиться</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Headphones className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <CardTitle>Консультация по телефону</CardTitle>
                  <CardDescription>Помогаем решить проблемы по телефону</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-4">от 300 ₽</div>
                  <Button variant="outline" className="w-full">Позвонить</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Settings className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <CardTitle>Настройка ПО</CardTitle>
                  <CardDescription>Установка и настройка программ удаленно</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-4">от 400 ₽</div>
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

export default RemoteSupport;