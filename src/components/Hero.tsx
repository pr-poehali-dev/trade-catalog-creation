import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Свежие молочные продукты
              <span className="text-primary block">от фермы до стола</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Более 15 лет производим качественную молочную продукцию.
              Натуральные ингредиенты, традиционные рецепты, контроль качества.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                <Icon name="ShoppingBasket" size={20} />
                Наши продукты
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Icon name="MapPin" size={20} />
                Где купить
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Icon name="Truck" size={32} className="text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Свежая доставка
              </h3>
              <p className="text-gray-600 text-sm">Каждый день в магазины</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Icon name="Shield" size={32} className="text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                100% натурально
              </h3>
              <p className="text-gray-600 text-sm">
                Без консервантов и добавок
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Icon name="Users" size={32} className="text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                1000+ магазинов
              </h3>
              <p className="text-gray-600 text-sm">По всей России</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Icon name="Clock" size={32} className="text-primary mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Контроль качества
              </h3>
              <p className="text-gray-600 text-sm">На каждом этапе</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
