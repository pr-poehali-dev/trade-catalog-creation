import { Product, Category } from "@/types/product";

export const categories: Category[] = [
  "Все",
  "Молоко",
  "Сыры",
  "Йогурты",
  "Масло",
  "Творог",
];

export const products: Product[] = [
  {
    id: 1,
    name: "Молоко цельное 3.2%",
    category: "Молоко",
    price: "85",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=200&fit=crop",
    description: "Натуральное цельное молоко высшего качества",
    inStock: true,
  },
  {
    id: 2,
    name: "Сыр Российский",
    category: "Сыры",
    price: "450",
    image:
      "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=300&h=200&fit=crop",
    description: "Твердый сыр с насыщенным вкусом, выдержка 60 дней",
    inStock: true,
  },
  {
    id: 3,
    name: "Йогурт натуральный",
    category: "Йогурты",
    price: "120",
    image:
      "https://images.unsplash.com/photo-1571212059180-9581d5869333?w=300&h=200&fit=crop",
    description: "Густой йогурт без добавок на живых заквасках",
    inStock: true,
  },
  {
    id: 4,
    name: "Масло сливочное 82.5%",
    category: "Масло",
    price: "280",
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=200&fit=crop",
    description: "Традиционное сливочное масло высшего сорта",
    inStock: true,
  },
  {
    id: 5,
    name: "Творог домашний 9%",
    category: "Творог",
    price: "195",
    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=200&fit=crop",
    description: "Нежный творог из отборного молока",
    inStock: true,
  },
  {
    id: 6,
    name: "Сыр Моцарелла",
    category: "Сыры",
    price: "320",
    image:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop",
    description: "Мягкий итальянский сыр для пиццы и салатов",
    inStock: false,
  },
  {
    id: 7,
    name: "Йогурт с клубникой",
    category: "Йогурты",
    price: "140",
    image:
      "https://images.unsplash.com/photo-1506224772180-d75b3efbe9be?w=300&h=200&fit=crop",
    description: "Сладкий йогурт с натуральными кусочками клубники",
    inStock: true,
  },
  {
    id: 8,
    name: "Молоко обезжиренное",
    category: "Молоко",
    price: "75",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop",
    description: "Диетическое молоко с содержанием жира менее 0.5%",
    inStock: true,
  },
];
