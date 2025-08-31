import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Banknote, Smartphone, Building, CheckCircle, Shield } from 'lucide-react';

const paymentMethods = [
  {
    icon: Banknote,
    title: 'Наличные',
    description: 'Оплата наличными при получении техники',
    commission: '0%',
    popular: true
  },
  {
    icon: CreditCard,
    title: 'Банковская карта',
    description: 'Visa, MasterCard, МИР - в офисе или онлайн',
    commission: '0%',
    popular: true
  },
  {
    icon: Smartphone,
    title: 'Мобильные платежи',
    description: 'Apple Pay, Google Pay, Samsung Pay',
    commission: '0%',
    popular: false
  },
  {
    icon: Building,
    title: 'Банковский перевод',
    description: 'Для юридических лиц с НДС',
    commission: '0%',
    popular: false
  }
];

const advantages = [
  'Оплата только после выполнения работ',
  'Никаких скрытых комиссий',
  'Возможность рассрочки на крупные ремонты',
  'Чек и гарантийный талон',
  'Возврат средств при невозможности ремонта'
];

const Payment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Способы оплаты</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Выберите удобный способ оплаты наших услуг. Все платежи защищены и безопасны
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {paymentMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
                  {method.popular && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-500">
                      Популярно
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription className="text-sm">{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-bold text-green-600 mb-4">
                      Комиссия: {method.commission}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Преимущества оплаты</h2>
                <ul className="space-y-4">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <span className="text-lg">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Безопасная оплата" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Безопасность платежей
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">SSL шифрование данных</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">PCI DSS сертификация</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">3D Secure защита</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">Возврат средств при отказе</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Для юридических лиц</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm">Работаем с НДС</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm">Безналичный расчет</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm">Договор на обслуживание</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm">Отсрочка платежа</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Зоны доставки и стоимость</CardTitle>
                <CardDescription>Стоимость выезда мастера по районам Москвы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {zones.map((zone, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{zone.name}</span>
                        <span className="text-blue-600 font-bold">{zone.price}</span>
                      </div>
                      <div className="text-sm text-gray-600">Время выезда: {zone.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;