import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Package, Clock, CheckCircle } from 'lucide-react';

const OrderTracking = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Отслеживание заказа</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Узнайте текущий статус ремонта вашего устройства
              </p>
            </div>

            <div className="max-w-md mx-auto mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Введите номер заказа</CardTitle>
                  <CardDescription className="text-center">Номер заказа указан в квитанции</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Input placeholder="Например: PC-2025-001234" />
                    <Button>
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Package className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Принят в работу</CardTitle>
                  <CardDescription>Ваше устройство поступило в сервисный центр</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Clock className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <CardTitle>В процессе ремонта</CardTitle>
                  <CardDescription>Мастер работает над устранением неисправностей</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <CardTitle>Готов к выдаче</CardTitle>
                  <CardDescription>Ремонт завершен, можете забрать устройство</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTracking;