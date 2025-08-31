import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Телефон',
    value: '+7 (495) 123-45-67',
    description: 'Звонки принимаем круглосуточно'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@computerservice.ru',
    description: 'Ответим в течение часа'
  },
  {
    icon: MapPin,
    title: 'Адрес',
    value: 'Москва, ул. Примерная, 123',
    description: '3 минуты от метро Примерная'
  },
  {
    icon: Clock,
    title: 'Режим работы',
    value: 'Пн-Вс: 9:00-21:00',
    description: 'Без выходных и праздников'
  }
];

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Свяжитесь с нами удобным способом. Мы всегда готовы помочь!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <contact.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{contact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{contact.value}</div>
                    <div className="text-sm text-gray-600">{contact.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
                  <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="Ваше имя" />
                      <Input placeholder="Телефон" type="tel" />
                    </div>
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Тема сообщения" />
                    <Textarea placeholder="Опишите вашу проблему..." rows={4} />
                    <Button className="w-full">Отправить сообщение</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Как нас найти
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-gray-500">Карта (интеграция с Яндекс.Картами)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Москва, ул. Примерная, 123</span>
                      <Button variant="outline" size="sm">
                        <Navigation className="w-4 h-4 mr-2" />
                        Маршрут
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Быстрая связь
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Button variant="outline" className="w-full">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Telegram
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Заказать звонок
                      </Button>
                    </div>
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

export default Contacts;