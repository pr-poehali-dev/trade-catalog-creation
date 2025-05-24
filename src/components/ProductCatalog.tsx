import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const categories = [
    "Все",
    "Инструменты",
    "Крепеж",
    "Оборудование",
    "Материалы",
  ];

  const products = [
    {
      id: 1,
      name: "Дрель электрическая ДЭ-1200",
      category: "Инструменты",
      price: "8 500",
      image:
        "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=300&h=200&fit=crop",
      description: "Профессиональная электрическая дрель мощностью 1200Вт",
      inStock: true,
    },
    {
      id: 2,
      name: "Болты М8x50 (100шт)",
      category: "Крепеж",
      price: "450",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      description: "Оцинкованные болты с шестигранной головкой",
      inStock: true,
    },
    {
      id: 3,
      name: "Компрессор КМП-2200",
      category: "Оборудование",
      price: "35 000",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=200&fit=crop",
      description: "Поршневой компрессор производительностью 220 л/мин",
      inStock: false,
    },
    {
      id: 4,
      name: "Сталь листовая 3мм",
      category: "Материалы",
      price: "2 100",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop",
      description: "Лист стальной горячекатаный 1500x3000мм",
      inStock: true,
    },
    {
      id: 5,
      name: "Шуруповерт аккумуляторный",
      category: "Инструменты",
      price: "12 800",
      image:
        "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=300&h=200&fit=crop",
      description: "Аккумуляторный шуруповерт 18В с набором бит",
      inStock: true,
    },
    {
      id: 6,
      name: "Саморезы по металлу (1000шт)",
      category: "Крепеж",
      price: "680",
      image:
        "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=300&h=200&fit=crop",
      description: "Саморезы со сверлом 4.2x25мм",
      inStock: true,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Все" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="catalog" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Каталог продукции
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Широкий ассортимент качественной продукции для промышленности и
            строительства
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <Badge
                    variant={product.inStock ? "default" : "destructive"}
                    className="text-xs"
                  >
                    {product.inStock ? "В наличии" : "Под заказ"}
                  </Badge>
                </div>

                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <CardDescription className="mb-4">
                  {product.description}
                </CardDescription>

                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-primary">
                    {product.price} ₽
                  </div>
                  <Button size="sm">
                    <Icon name="ShoppingCart" size={16} />В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Package"
              size={48}
              className="mx-auto text-gray-400 mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Товары не найдены
            </h3>
            <p className="text-gray-500">
              Попробуйте изменить параметры поиска
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;
