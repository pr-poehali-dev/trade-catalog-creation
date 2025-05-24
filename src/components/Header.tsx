import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Package" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ТоргПром</h1>
              <p className="text-xs text-gray-500">Торговая компания</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Главная
            </a>
            <a
              href="#catalog"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              О компании
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Phone" size={16} />
              Связаться
            </Button>
            <Button size="sm">
              <Icon name="ShoppingCart" size={16} />
              Корзина
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
