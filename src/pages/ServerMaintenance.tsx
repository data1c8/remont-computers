import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Server, Database, Shield, Clock } from 'lucide-react';

const ServerMaintenance = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Обслуживание серверов</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Профессиональное обслуживание серверного оборудования
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Server className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <CardTitle>Ремонт серверов</CardTitle>
                  <CardDescription>Диагностика и ремонт серверного оборудования</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-600 mb-4">от 5000 ₽</div>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Database className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <CardTitle>Настройка RAID</CardTitle>
                  <CardDescription>Настройка дисковых массивов для надежности</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-600 mb-4">от 3000 ₽</div>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Shield className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <CardTitle>Безопасность</CardTitle>
                  <CardDescription>Настройка защиты и мониторинга серверов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-600 mb-4">от 4000 ₽</div>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Clock className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <CardTitle>Мониторинг 24/7</CardTitle>
                  <CardDescription>Круглосуточный мониторинг работы серверов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-600 mb-4">от 10000 ₽/мес</div>
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

export default ServerMaintenance;