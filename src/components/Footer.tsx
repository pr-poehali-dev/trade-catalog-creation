import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Package" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ТоргПром</h3>
                <p className="text-sm text-gray-400">Торговая компания</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Надежный поставщик промышленных товаров и оборудования для вашего
              бизнеса.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-primary" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-primary" />
                <span className="text-gray-300">info@torgprom.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span className="text-gray-300">
                  Москва, ул. Промышленная, 15
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  О компании
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Гарантии
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Сотрудничество
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              Подписаться на новости
            </h4>
            <p className="text-gray-300 mb-4 text-sm">
              Получайте информацию о новых товарах и специальных предложениях
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ТоргПром. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Icon name="Facebook" size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Icon name="Twitter" size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Icon name="Instagram" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
