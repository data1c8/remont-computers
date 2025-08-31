import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">PC</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">КомпьютерСервис</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</Link>
            <Link to="/diagnostics" className="text-gray-700 hover:text-blue-600 transition-colors">Диагностика</Link>
            <Link to="/prices" className="text-gray-700 hover:text-blue-600 transition-colors">Цены</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</Link>
            <Link to="/contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <Button>Заказать звонок</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;