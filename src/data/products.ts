import { Product, Category } from "@/types/product";

export const categories: Category[] = [
  "Все",
  "Инструменты",
  "Крепеж",
  "Оборудование",
  "Материалы",
];

export const products: Product[] = [
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
