import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, Monitor, Book } from 'lucide-react';

const Training = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Обучение и консультации</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Обучаем правильному использованию компьютерной техники
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <GraduationCap className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                  <CardTitle>Индивидуальное обучение</CardTitle>
                  <CardDescription>Персональные уроки по работе с компьютером</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600 mb-4">от 1000 ₽/час</div>
                  <Button variant="outline" className="w-full">Записаться</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Users className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                  <CardTitle>Групповые курсы</CardTitle>
                  <CardDescription>Курсы компьютерной грамотности для групп</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600 mb-4">от 500 ₽/час</div>
                  <Button variant="outline" className="w-full">Записаться</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Monitor className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                  <CardTitle>Онлайн-консультации</CardTitle>
                  <CardDescription>Удаленные консультации по видеосвязи</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600 mb-4">от 600 ₽/час</div>
                  <Button variant="outline" className="w-full">Записаться</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Book className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                  <CardTitle>Методические материалы</CardTitle>
                  <CardDescription>Полезные инструкции и руководства</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600 mb-4">Бесплатно</div>
                  <Button variant="outline" className="w-full">Скачать</Button>
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

export default Training;