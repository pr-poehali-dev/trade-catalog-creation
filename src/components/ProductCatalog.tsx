import ProductCard from "@/components/ProductCard";
import ProductSearchFilters from "@/components/ProductSearchFilters";
import Icon from "@/components/ui/icon";
import { useProductFilters } from "@/hooks/useProductFilters";
import { products, categories } from "@/data/products";

const ProductCatalog = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  } = useProductFilters(products);

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

        <ProductSearchFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
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
