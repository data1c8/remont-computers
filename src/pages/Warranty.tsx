import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, CheckCircle, Clock, FileText, AlertTriangle } from 'lucide-react';

const warrantyTypes = [
  {
    service: 'Замена комплектующих',
    warranty: '12 месяцев',
    description: 'Полная гарантия на новые детали и работу'
  },
  {
    service: 'Ремонт материнских плат',
    warranty: '6 месяцев',
    description: 'Гарантия на микропайку и замену компонентов'
  },
  {
    service: 'Чистка и профилактика',
    warranty: '3 месяца',
    description: 'Гарантия на выполненные работы'
  },
  {
    service: 'Установка ПО',
    warranty: '1 месяц',
    description: 'Гарантия корректной работы установленного ПО'
  }
];

const Warranty = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Гарантийные обязательства</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Мы уверены в качестве наших услуг и предоставляем расширенную гарантию
              </p>
            </div>

            <Alert className="mb-12 border-green-200 bg-green-50">
              <Shield className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                <strong>Гарантия качества:</strong> Мы предоставляем гарантию на все виды ремонтных работ. 
                В случае повторной поломки по нашей вине — ремонт бесплатно!
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Что покрывает гарантия</h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-lg">Качество выполненных работ</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-lg">Установленные запчасти</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-lg">Программное обеспечение</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-lg">Настройки системы</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Гарантийный ремонт" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Сроки гарантии по видам услуг</CardTitle>
                <CardDescription>Подробная информация о гарантийных обязательствах</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-4 font-semibold">Вид услуги</th>
                        <th className="text-left p-4 font-semibold">Срок гарантии</th>
                        <th className="text-left p-4 font-semibold">Что включено</th>
                      </tr>
                    </thead>
                    <tbody>
                      {warrantyTypes.map((warranty, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-4 font-medium">{warranty.service}</td>
                          <td className="p-4">
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {warranty.warranty}
                            </span>
                          </td>
                          <td className="p-4 text-gray-600">{warranty.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Условия гарантии
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span>Гарантия действует при соблюдении условий эксплуатации</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span>Бесплатный повторный ремонт при гарантийном случае</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span>Гарантия не распространяется на механические повреждения</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span>Сохраняйте гарантийный талон до окончания срока</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Что не покрывается гарантией
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                      <span>Повреждения от воздействия жидкости</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                      <span>Механические повреждения корпуса</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                      <span>Самостоятельное вмешательство в ремонт</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5" />
                      <span>Естественный износ компонентов</span>
                    </li>
                  </ul>
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

export default Warranty;