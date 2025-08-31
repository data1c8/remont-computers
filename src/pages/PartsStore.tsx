import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Cpu, HardDrive, MemoryStick, Monitor } from 'lucide-react';

const PartsStore = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Магазин запчастей</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Оригинальные запчасти для компьютеров и ноутбуков
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Cpu className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <CardTitle>Процессоры</CardTitle>
                  <CardDescription>Intel и AMD процессоры всех поколений</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Каталог
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <MemoryStick className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <CardTitle>Оперативная память</CardTitle>
                  <CardDescription>RAM модули различных объемов и частот</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Каталог
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <HardDrive className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <CardTitle>Накопители</CardTitle>
                  <CardDescription>SSD и HDD диски различных объемов</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Каталог
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Monitor className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <CardTitle>Видеокарты</CardTitle>
                  <CardDescription>Графические карты NVIDIA и AMD</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Каталог
                  </Button>
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

export default PartsStore;