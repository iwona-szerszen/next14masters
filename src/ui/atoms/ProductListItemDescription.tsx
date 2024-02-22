import { formatPrice } from "../../../utils";
import type { Product } from "@/ui/types";

export const ProductListItemDescription = ({
  product: { name, category, price },
}: {
  product: Product;
}) => {
  return (
    <div className="mt-2 flex justify-between">
      <div>
        <h3 className="text-sm font-semibold text-gray-700">{name}</h3>
        <p className="text-sm text-gray-500">
          <span className="sr-only">Category:</span> {category}
        </p>
      </div>
      <p className="text-sm font-medium text-gray-700">
        <span className="sr-only">Price:</span> {formatPrice(price)}
      </p>
    </div>
  );
};
