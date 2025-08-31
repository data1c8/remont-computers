import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Clock, 
  Shield, 
  Award, 
  Users, 
  MapPin, 
  Phone,
  Wrench,
  CheckCircle,
  Star,
  Truck
} from 'lucide-react';

const infoSections = [
  {
    icon: Clock,
    title: 'Быстрый ремонт',
    description: 'Большинство ремонтов выполняем в течение 1-3 дней. Экспресс-ремонт за 2-4 часа.',
    stats: '85% ремонтов за 24 часа'
  },
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: 'Предоставляем гарантию до 12 месяцев на все виды ремонтных работ.',
    stats: 'Гарантия до 1 года'
  },
  {
    icon: Award,
    title: 'Опытные мастера',
    description: 'Наши специалисты имеют сертификаты и более 10 лет опыта в ремонте техники.',
    stats: '15+ сертифицированных мастеров'
  },
  {
    icon: Users,
    title: 'Довольные клиенты',
    description: 'Более 5000 успешно отремонтированных устройств и благодарных клиентов.',
    stats: '5000+ довольных клиентов'
  },
  {
    icon: MapPin,
    title: 'Удобное расположение',
    description: 'Сервисный центр в центре Москвы с удобной транспортной развязкой.',
    stats: '3 минуты от метро'
  },
  {
    icon: Phone,
    title: 'Круглосуточная поддержка',
    description: 'Консультации по телефону и онлайн в любое время суток.',
    stats: '24/7 поддержка'
  },
  {
    icon: Wrench,
    title: 'Современное оборудование',
    description: 'Используем профессиональное оборудование и оригинальные запчасти.',
    stats: 'Оригинальные запчасти'
  },
  {
    icon: CheckCircle,
    title: 'Бесплатная диагностика',
    description: 'Проводим полную диагностику устройства бесплатно при заказе ремонта.',
    stats: 'Диагностика 0 ₽'
  },
  {
    icon: Star,
    title: 'Высокий рейтинг',
    description: 'Средняя оценка наших услуг составляет 4.9 из 5 звезд по отзывам клиентов.',
    stats: '4.9/5 звезд'
  },
  {
    icon: Truck,
    title: 'Выезд на дом',
    description: 'Выезжаем к клиенту для диагностики и ремонта на дому в удобное время.',
    stats: 'Выезд в день обращения'
  }
];

const InfoSections = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы предоставляем качественные услуги по ремонту компьютерной техники с полным сервисом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {infoSections.map((section, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <section.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg mb-2">{section.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-blue-600">{section.stats}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSections;