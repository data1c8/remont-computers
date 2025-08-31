import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Save, Cloud, HardDrive, Shield } from 'lucide-react';

const Backup = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Резервное копирование</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Настройка автоматического резервного копирования важных данных
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Save className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <CardTitle>Локальный бэкап</CardTitle>
                  <CardDescription>Резервное копирование на внешний диск</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-4">от 800 ₽</div>
                  <Button variant="outline" className="w-full">Настроить</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Cloud className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <CardTitle>Облачный бэкап</CardTitle>
                  <CardDescription>Автоматическое сохранение в облачные сервисы</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-4">от 1000 ₽</div>
                  <Button variant="outline" className="w-full">Настроить</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <HardDrive className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <CardTitle>Образ системы</CardTitle>
                  <CardDescription>Создание полного образа операционной системы</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-4">от 1200 ₽</div>
                  <Button variant="outline" className="w-full">Создать</Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <CardTitle>Защищенный бэкап</CardTitle>
                  <CardDescription>Шифрованное резервное копирование</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-4">от 1500 ₽</div>
                  <Button variant="outline" className="w-full">Настроить</Button>
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

export default Backup;