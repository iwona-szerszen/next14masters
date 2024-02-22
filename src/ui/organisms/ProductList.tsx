import { ProductListItem } from "@/ui/molecules/ProductListItem";
import type { Product } from "@/ui/types";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <ul
      data-testid="products-list"
      className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
    >
      {products.map((product) => {
        return <ProductListItem key={product.id} product={product} />;
      })}
    </ul>
  );
};
