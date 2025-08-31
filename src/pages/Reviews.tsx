import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, ThumbsUp, MessageCircle, Award } from 'lucide-react';

const reviews = [
  {
    name: 'Александр Петров',
    rating: 5,
    date: '15 января 2025',
    service: 'Ремонт ноутбука',
    text: 'Отличный сервис! Быстро диагностировали проблему с экраном, заменили за день. Цена адекватная, работа качественная. Рекомендую!',
    verified: true
  },
  {
    name: 'Мария Иванова',
    rating: 5,
    date: '12 января 2025',
    service: 'Удаление вирусов',
    text: 'Компьютер тормозил страшно, думала придется покупать новый. Ребята почистили от вирусов, установили антивирус. Теперь летает как новый!',
    verified: true
  },
  {
    name: 'Дмитрий Сидоров',
    rating: 5,
    date: '10 января 2025',
    service: 'Апгрейд ПК',
    text: 'Делали апгрейд игрового компьютера. Подобрали оптимальную конфигурацию под бюджет. Производительность выросла в разы!',
    verified: true
  },
  {
    name: 'Елена Козлова',
    rating: 4,
    date: '8 января 2025',
    service: 'Восстановление данных',
    text: 'Восстанавливали фотографии с поврежденного диска. Восстановили 90% файлов. Очень благодарна за профессионализм!',
    verified: true
  },
  {
    name: 'Игорь Морозов',
    rating: 5,
    date: '5 января 2025',
    service: 'Ремонт блока питания',
    text: 'Быстро и качественно заменили блок питания. Мастер приехал на дом, все сделал за час. Отличный сервис!',
    verified: true
  },
  {
    name: 'Анна Волкова',
    rating: 5,
    date: '3 января 2025',
    service: 'Чистка ноутбука',
    text: 'Ноутбук перегревался и выключался. После чистки и замены термопасты работает тихо и не греется. Спасибо!',
    verified: true
  }
];

const stats = [
  { value: '4.9', label: 'Средняя оценка', icon: Star },
  { value: '1247', label: 'Отзывов', icon: MessageCircle },
  { value: '98%', label: 'Рекомендуют', icon: ThumbsUp },
  { value: '5000+', label: 'Клиентов', icon: Award }
];

const Reviews = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Читайте реальные отзывы наших клиентов о качестве наших услуг
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <stat.icon className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-yellow-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {reviews.map((review, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{review.name}</div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      {review.verified && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Проверен
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">• {review.service}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>Оставить отзыв</CardTitle>
                  <CardDescription>Поделитесь своим опытом работы с нами</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-4">Написать отзыв</Button>
                  <div className="text-sm text-gray-500">
                    Или оставьте отзыв на популярных площадках:
                  </div>
                  <div className="flex justify-center space-x-4 mt-4">
                    <Button variant="outline" size="sm">Яндекс</Button>
                    <Button variant="outline" size="sm">Google</Button>
                    <Button variant="outline" size="sm">2ГИС</Button>
                  </div>
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

export default Reviews;