import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Shield, Settings, Monitor } from 'lucide-react';

const SoftwareInstallation = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Установка программного обеспечения</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Установка и настройка любых программ и операционных систем
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Monitor className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Установка Windows</CardTitle>
                  <CardDescription>Установка и настройка операционной системы</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600 mb-4">от 1000 ₽</div>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Download className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Установка программ</CardTitle>
                  <CardDescription>Установка любых программ и приложений</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600 mb-4">от 300 ₽</div>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Shield className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Антивирусы</CardTitle>
                  <CardDescription>Установка и настройка антивирусной защиты</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600 mb-4">от 500 ₽</div>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Settings className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Настройка системы</CardTitle>
                  <CardDescription>Оптимизация и настройка операционной системы</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600 mb-4">от 800 ₽</div>
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

export default SoftwareInstallation;