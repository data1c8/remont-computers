import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Bug, Lock, Scan, AlertTriangle, CheckCircle } from 'lucide-react';

const virusTypes = [
  {
    icon: Bug,
    title: 'Троянские программы',
    description: 'Удаление троянов, кейлоггеров и шпионского ПО',
    danger: 'Высокая'
  },
  {
    icon: Lock,
    title: 'Вирусы-шифровальщики',
    description: 'Борьба с ransomware и восстановление зашифрованных файлов',
    danger: 'Критическая'
  },
  {
    icon: Scan,
    title: 'Рекламное ПО',
    description: 'Удаление навязчивой рекламы и нежелательных программ',
    danger: 'Средняя'
  },
  {
    icon: Shield,
    title: 'Руткиты',
    description: 'Обнаружение и удаление скрытых вредоносных программ',
    danger: 'Высокая'
  }
];

const protectionSteps = [
  'Полное сканирование системы',
  'Удаление вредоносного ПО',
  'Восстановление системных файлов',
  'Установка антивируса',
  'Настройка брандмауэра',
  'Обновление системы безопасности'
];

const VirusRemoval = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-red-50 to-pink-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Удаление вирусов и защита ПК</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Комплексная очистка от вредоносного ПО и настройка надежной защиты
              </p>
            </div>

            <Alert className="mb-12 border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                <strong>Признаки заражения:</strong> медленная работа компьютера, всплывающая реклама, 
                блокировка файлов, неизвестные программы в автозагрузке, перенаправление браузера.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {virusTypes.map((virus, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <virus.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        virus.danger === 'Критическая' ? 'bg-red-100 text-red-800' :
                        virus.danger === 'Высокая' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {virus.danger} опасность
                      </span>
                    </div>
                    <CardTitle>{virus.title}</CardTitle>
                    <CardDescription>{virus.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Этапы очистки от вирусов</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {protectionSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Стоимость услуг</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Базовая очистка</CardTitle>
                    <CardDescription>Удаление основных угроз</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 mb-4">800 ₽</div>
                    <Button variant="outline" className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
                <Card className="border-blue-500 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Популярно</span>
                  </div>
                  <CardHeader>
                    <CardTitle>Полная защита</CardTitle>
                    <CardDescription>Очистка + антивирус + настройка</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 mb-4">1500 ₽</div>
                    <Button className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Премиум</CardTitle>
                    <CardDescription>Максимальная защита + обучение</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 mb-4">2500 ₽</div>
                    <Button variant="outline" className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VirusRemoval;