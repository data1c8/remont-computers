import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { HardDrive, Database, FileText, Image, AlertTriangle, CheckCircle } from 'lucide-react';

const recoveryTypes = [
  {
    icon: HardDrive,
    title: 'Восстановление с HDD',
    description: 'Восстановление данных с поврежденных жестких дисков',
    success: '85%',
    price: 'от 2000 ₽'
  },
  {
    icon: Database,
    title: 'Восстановление с SSD',
    description: 'Восстановление файлов с твердотельных накопителей',
    success: '75%',
    price: 'от 3000 ₽'
  },
  {
    icon: FileText,
    title: 'Восстановление документов',
    description: 'Восстановление офисных документов, PDF, текстовых файлов',
    success: '90%',
    price: 'от 1500 ₽'
  },
  {
    icon: Image,
    title: 'Восстановление фото и видео',
    description: 'Восстановление медиафайлов любых форматов',
    success: '80%',
    price: 'от 2500 ₽'
  }
];

const DataRecovery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Восстановление данных</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Профессиональное восстановление утерянных файлов с любых носителей информации
              </p>
            </div>

            <Alert className="mb-12 border-orange-200 bg-orange-50">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-800">
                <strong>Важно!</strong> При повреждении носителя немедленно прекратите его использование 
                и обратитесь к специалистам. Это повысит шансы на успешное восстановление данных.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {recoveryTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <type.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{type.success}</div>
                        <div className="text-sm text-gray-500">успешности</div>
                      </div>
                    </div>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-red-600 mb-4">{type.price}</div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">Заказать восстановление</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Этапы восстановления данных</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  'Диагностика носителя',
                  'Оценка повреждений',
                  'Согласование стоимости',
                  'Восстановление данных',
                  'Передача результата'
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm font-semibold">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DataRecovery;