import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MessageCircle, Video, Mail } from 'lucide-react';

const consultationTypes = [
  {
    icon: Phone,
    title: 'Телефонная консультация',
    description: 'Получите совет по телефону в удобное время',
    price: 'от 300 ₽',
    duration: '15-30 мин'
  },
  {
    icon: Video,
    title: 'Видеоконсультация',
    description: 'Консультация по видеосвязи с демонстрацией',
    price: 'от 500 ₽',
    duration: '30-60 мин'
  },
  {
    icon: MessageCircle,
    title: 'Чат-поддержка',
    description: 'Быстрые ответы в мессенджерах',
    price: 'Бесплатно',
    duration: 'Мгновенно'
  },
  {
    icon: Mail,
    title: 'Email консультация',
    description: 'Подробные ответы на ваши вопросы по email',
    price: 'Бесплатно',
    duration: 'До 2 часов'
  }
];

const Consultation = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Консультации специалистов</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Получите профессиональную консультацию по любым вопросам компьютерной техники
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {consultationTypes.map((consultation, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <consultation.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{consultation.title}</CardTitle>
                    <CardDescription>{consultation.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-blue-600 mb-2">{consultation.price}</div>
                    <div className="text-sm text-gray-500 mb-4">{consultation.duration}</div>
                    <Button variant="outline" className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Заказать консультацию</CardTitle>
                  <CardDescription>Опишите вашу проблему, и мы поможем найти решение</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Ваше имя" />
                      <Input placeholder="Телефон" type="tel" />
                    </div>
                    <Input placeholder="Email" type="email" />
                    <Textarea placeholder="Опишите вашу проблему..." rows={4} />
                    <Button className="w-full">Отправить заявку</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Популярные вопросы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>• Какой компьютер выбрать для работы?</li>
                      <li>• Как ускорить работу старого ПК?</li>
                      <li>• Стоит ли ремонтировать или купить новый?</li>
                      <li>• Как защитить компьютер от вирусов?</li>
                      <li>• Какие программы нужны для работы?</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Экспертная помощь</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Наши специалисты помогут выбрать оптимальное решение для ваших задач и бюджета
                    </p>
                    <Button className="w-full">Связаться с экспертом</Button>
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

export default Consultation;