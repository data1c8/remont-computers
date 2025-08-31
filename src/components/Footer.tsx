import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">PC</span>
              </div>
              <span className="text-xl font-bold">КомпьютерСервис</span>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональный ремонт компьютеров и ноутбуков с гарантией качества.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Clock className="w-4 h-4" />
              <span>Пн-Вс: 9:00-21:00</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/laptop-repair" className="hover:text-white transition-colors">Ремонт ноутбуков</Link></li>
              <li><Link to="/pc-repair" className="hover:text-white transition-colors">Ремонт ПК</Link></li>
              <li><Link to="/data-recovery" className="hover:text-white transition-colors">Восстановление данных</Link></li>
              <li><Link to="/virus-removal" className="hover:text-white transition-colors">Удаление вирусов</Link></li>
              <li><Link to="/hardware-upgrade" className="hover:text-white transition-colors">Апгрейд железа</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/warranty" className="hover:text-white transition-colors">Гарантия</Link></li>
              <li><Link to="/delivery" className="hover:text-white transition-colors">Доставка</Link></li>
              <li><Link to="/payment" className="hover:text-white transition-colors">Оплата</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Отзывы</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@computerservice.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Москва, ул. Примерная, 123</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 КомпьютерСервис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;