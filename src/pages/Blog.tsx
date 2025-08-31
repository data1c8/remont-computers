import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Как выбрать SSD для апгрейда компьютера',
    excerpt: 'Подробное руководство по выбору твердотельного накопителя для ускорения работы ПК',
    date: '15 января 2025',
    author: 'Алексей Техников',
    category: 'Апгрейд',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: '10 признаков того, что компьютер нужно чистить',
    excerpt: 'Узнайте, когда пора делать профилактическую чистку вашего компьютера от пыли',
    date: '12 января 2025',
    author: 'Мария Сервисова',
    category: 'Обслуживание',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Защита от вирусов: лучшие практики 2025',
    excerpt: 'Современные методы защиты компьютера от вредоносного программного обеспечения',
    date: '10 января 2025',
    author: 'Дмитрий Защитников',
    category: 'Безопасность',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Восстановление данных: что можно спасти',
    excerpt: 'Разбираем случаи, когда возможно восстановление утерянных файлов',
    date: '8 января 2025',
    author: 'Елена Восстановительная',
    category: 'Данные',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Игровой ПК: как собрать и настроить',
    excerpt: 'Пошаговое руководство по сборке игрового компьютера',
    date: '5 января 2025',
    author: 'Игорь Геймеров',
    category: 'Игры',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Ремонт ноутбука своими руками: что можно, а что нельзя',
    excerpt: 'Разбираем, какие ремонты можно делать самостоятельно, а когда лучше обратиться к специалистам',
    date: '3 января 2025',
    author: 'Сергей Ремонтов',
    category: 'Ремонт',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Блог о компьютерах</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Полезные статьи, советы и новости из мира компьютерных технологий
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                    <CardDescription className="text-sm">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <Button variant="ghost" size="sm">
                        Читать
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg">Показать больше статей</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;