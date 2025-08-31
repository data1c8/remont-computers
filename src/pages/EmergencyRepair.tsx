import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Zap, Clock, Phone, AlertTriangle, CheckCircle } from 'lucide-react';

const EmergencyRepair = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Экстренный ремонт</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Срочный ремонт компьютерной техники в кратчайшие сроки
              </p>
            </div>

            <Alert className="mb-12 border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                <strong>Экстренная помощь 24/7:</strong> Звоните +7 (495) 123-45-67 для срочного ремонта. 
                Выезд мастера в течение 2 часов!
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center border-red-200">
                <CardHeader>
                  <Zap className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-red-600">Экспресс-ремонт</CardTitle>
                  <CardDescription>Ремонт в течение 2-4 часов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600 mb-4">+50%</div>
                  <p className="text-sm text-gray-600 mb-4">к стоимости обычного ремонта</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Заказать экспресс</Button>
                </CardContent>
              </Card>

              <Card className="text-center border-orange-200">
                <CardHeader>
                  <Clock className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-orange-600">Срочный ремонт</CardTitle>
                  <CardDescription>Ремонт в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600 mb-4">+25%</div>
                  <p className="text-sm text-gray-600 mb-4">к стоимости обычного ремонта</p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Заказать срочный</Button>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-200">
                <CardHeader>
                  <Phone className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-blue-600">Выезд на дом</CardTitle>
                  <CardDescription>Мастер приедет в течение 2 часов</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-4">500 ₽</div>
                  <p className="text-sm text-gray-600 mb-4">стоимость выезда</p>
                  <Button className="w-full">Вызвать мастера</Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Когда нужен экстренный ремонт</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-red-600">Критические ситуации:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                      <span>Важная презентация завтра</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                      <span>Сдача проекта на работе</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                      <span>Экзамены у студентов</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                      <span>Потеря важных данных</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-green-600">Что мы гарантируем:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Выезд в течение 2 часов</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Диагностика за 30 минут</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Ремонт в приоритетном порядке</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Та же гарантия качества</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EmergencyRepair;