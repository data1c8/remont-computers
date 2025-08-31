import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, MessageCircle, Phone } from 'lucide-react';

const faqData = [
  {
    question: 'Сколько времени занимает ремонт?',
    answer: 'Время ремонта зависит от сложности неисправности. Простые ремонты выполняем за 1-2 дня, сложные могут занять до недели. Экспресс-ремонт возможен за 2-4 часа с доплатой 50%.'
  },
  {
    question: 'Предоставляете ли вы гарантию?',
    answer: 'Да, мы предоставляем гарантию на все виды ремонтных работ от 3 до 12 месяцев в зависимости от типа ремонта. На новые запчасти действует гарантия производителя.'
  },
  {
    question: 'Можно ли отремонтировать очень старый компьютер?',
    answer: 'Мы ремонтируем технику любого возраста. Однако для очень старых моделей может быть сложно найти запчасти. В таких случаях предложим альтернативные решения или модернизацию.'
  },
  {
    question: 'Сколько стоит диагностика?',
    answer: 'Диагностика бесплатна при заказе ремонта. Если ремонт не заказываете, стоимость диагностики составляет 500 рублей.'
  },
  {
    question: 'Выезжаете ли вы на дом?',
    answer: 'Да, наши мастера выезжают на дом и в офисы по Москве и ближайшему Подмосковью. Стоимость выезда от 300 до 800 рублей в зависимости от района.'
  },
  {
    question: 'Что делать, если компьютер не включается?',
    answer: 'Не пытайтесь ремонтировать самостоятельно. Принесите технику к нам или вызовите мастера на дом. Причин может быть много: от неисправного блока питания до проблем с материнской платой.'
  },
  {
    question: 'Можете ли вы восстановить удаленные файлы?',
    answer: 'Да, мы специализируемся на восстановлении данных. Шансы на успешное восстановление зависят от времени, прошедшего после удаления, и использования диска после этого.'
  },
  {
    question: 'Работаете ли вы с юридическими лицами?',
    answer: 'Да, мы работаем как с физическими, так и с юридическими лицами. Предоставляем все необходимые документы, работаем с НДС, возможна отсрочка платежа.'
  },
  {
    question: 'Что входит в стоимость ремонта?',
    answer: 'В стоимость входит диагностика, работа мастера и гарантия. Запчасти оплачиваются отдельно по себестоимости без наценки.'
  },
  {
    question: 'Можно ли получить скидку?',
    answer: 'Мы предоставляем скидки пенсионерам (10%), студентам (5%), при ремонте нескольких устройств (до 15%). Также действуют сезонные акции.'
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ответы на самые популярные вопросы о наших услугах
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <HelpCircle className="w-6 h-6 mr-2" />
                      Популярные вопросы
                    </CardTitle>
                    <CardDescription>Найдите ответы на самые частые вопросы</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {faqData.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Не нашли ответ?</CardTitle>
                    <CardDescription>Свяжитесь с нами любым удобным способом</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Позвонить
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Написать в чат
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Экстренная помощь</CardTitle>
                    <CardDescription>Круглосуточная поддержка</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600 mb-2">24/7</div>
                      <div className="text-sm text-gray-600 mb-4">Горячая линия</div>
                      <Button variant="outline" className="w-full border-red-500 text-red-600 hover:bg-red-50">
                        +7 (495) 123-45-67
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Полезные советы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Регулярно чистите компьютер от пыли</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Используйте антивирус</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Делайте резервные копии</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Обновляйте драйверы</span>
                      </li>
                    </ul>
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

export default FAQ;