import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Percent, Star, Clock } from 'lucide-react';

const promotions = [
  {
    icon: Gift,
    title: 'Скидка 20% на первый ремонт',
    description: 'Для новых клиентов действует скидка 20% на любой вид ремонта',
    discount: '20%',
    valid: 'До 31 января',
    code: 'FIRST20'
  },
  {
    icon: Percent,
    title: 'Скидка пенсионерам',
    description: 'Постоянная скидка 10% для пенсионеров при предъявлении документа',
    discount: '10%',
    valid: 'Постоянно',
    code: 'PENSION10'
  },
  {
    icon: Star,
    title: 'Скидка за отзыв',
    description: 'Оставьте отзыв и получите скидку 5% на следующий ремонт',
    discount: '5%',
    valid: 'Постоянно',
    code: 'REVIEW5'
  },
  {
    icon: Clock,
    title: 'Экспресс-ремонт со скидкой',
    description: 'В будние дни до 14:00 экспресс-ремонт дешевле на 15%',
    discount: '15%',
    valid: 'Пн-Пт до 14:00',
    code: 'EXPRESS15'
  }
];

const Promotions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-orange-50 to-red-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Акции и скидки</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Выгодные предложения для экономии на ремонте компьютерной техники
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {promotions.map((promo, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-500 text-white text-lg px-3 py-1">
                      -{promo.discount}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <promo.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{promo.title}</CardTitle>
                    <CardDescription className="text-base">{promo.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Действует:</span>
                        <span className="text-sm font-semibold">{promo.valid}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Промокод:</span>
                        <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{promo.code}</span>
                      </div>
                      <Button className="w-full mt-4">Воспользоваться</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Хотите получать уведомления о новых акциях?</h3>
              <p className="text-gray-600 mb-6">
                Подпишитесь на нашу рассылку и узнавайте о скидках первыми
              </p>
              <div className="max-w-md mx-auto flex space-x-2">
                <Input placeholder="Ваш email" type="email" />
                <Button>Подписаться</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Promotions;