import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Профессиональный ремонт компьютеров в Москве
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Быстро, качественно и с гарантией. Более 10 лет опыта в ремонте компьютерной техники.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8 py-4">
                Заказать ремонт
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Бесплатная диагностика
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">Гарантия до 1 года</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">Ремонт за 1-3 дня</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">10+ лет опыта</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Ремонт компьютеров" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-gray-600">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;