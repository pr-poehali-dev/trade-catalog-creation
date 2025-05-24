import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Надежный поставщик
              <span className="text-primary block">промышленных товаров</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Более 10 лет обеспечиваем предприятия качественной продукцией.
              Широкий ассортимент, конкурентные цены, быстрая доставка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Catalog" size={20} />
                Смотреть каталог
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Icon name="Calculator" size={20} />
                Рассчитать стоимость
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Icon name="Truck" size={32} className="text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Быстрая доставка
              </h3>
              <p className="text-gray-600 text-sm">По всей России от 1 дня</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Icon name="Shield" size={32} className="text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Гарантия качества
              </h3>
              <p className="text-gray-600 text-sm">
                Сертифицированная продукция
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Icon name="Users" size={32} className="text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                500+ клиентов
              </h3>
              <p className="text-gray-600 text-sm">Доверяют нашему сервису</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Icon name="Clock" size={32} className="text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                24/7 поддержка
              </h3>
              <p className="text-gray-600 text-sm">Всегда на связи</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
