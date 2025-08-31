import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Clock, Shield, Target, Heart } from 'lucide-react';

const stats = [
  { icon: Users, value: '5000+', label: 'Довольных клиентов' },
  { icon: Clock, value: '10+', label: 'Лет опыта' },
  { icon: Award, value: '15', label: 'Сертифицированных мастеров' },
  { icon: Shield, value: '99%', label: 'Успешных ремонтов' }
];

const values = [
  {
    icon: Target,
    title: 'Профессионализм',
    description: 'Наши мастера постоянно повышают квалификацию и следят за новыми технологиями'
  },
  {
    icon: Heart,
    title: 'Забота о клиентах',
    description: 'Мы ценим каждого клиента и стремимся превзойти ожидания'
  },
  {
    icon: Shield,
    title: 'Надежность',
    description: 'Используем только качественные запчасти и предоставляем гарантию'
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">О компании КомпьютерСервис</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Мы — команда профессионалов, которая уже более 10 лет помогает людям решать проблемы с компьютерной техникой
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Компания КомпьютерСервис была основана в 2014 году группой энтузиастов, 
                  увлеченных компьютерными технологиями. За годы работы мы накопили огромный 
                  опыт в ремонте и обслуживании компьютерной техники.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Сегодня мы — один из ведущих сервисных центров Москвы, который доверяют 
                  тысячи клиентов. Наша команда состоит из сертифицированных специалистов, 
                  которые постоянно совершенствуют свои навыки.
                </p>
                <Badge className="bg-blue-500">Сертифицированный сервисный центр</Badge>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Наша команда" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Наши ценности</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                      <CardDescription className="text-base">{value.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Готовы помочь с вашим компьютером?</h3>
              <p className="text-gray-600 mb-6">
                Свяжитесь с нами для бесплатной консультации и диагностики
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Заказать звонок</Button>
                <Button variant="outline" size="lg">Написать в WhatsApp</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;