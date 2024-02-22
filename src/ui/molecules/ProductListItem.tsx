import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import type { Product } from "@/ui/types";

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <li>
      <article>
        <ProductListItemCoverImage
          src={product.coverImage.src}
          alt={product.coverImage.alt}
        />
        <ProductListItemDescription product={product} />
      </article>
    </li>
  );
};
