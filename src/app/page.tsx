import { ProductList } from "@/ui/organisms/ProductList";
const products = [
  {
    id: "1",
    category: "Mugs",
    name: "White mug",
    price: 1000,
    coverImage: {
      src: "/product_1.png",
      alt: "white mug",
    },
  },
  {
    id: "2",
    category: "Mugs",
    name: "Gold mug",
    price: 1122,
    coverImage: {
      src: "/product_2.png",
      alt: "gold mug",
    },
  },
  {
    id: "3",
    category: "Mugs",
    name: "Red mug",
    price: 1233,
    coverImage: {
      src: "/product_3.png",
      alt: "red mug",
    },
  },
  {
    id: "4",
    category: "Mugs",
    name: "Blue mug",
    price: 1344,
    coverImage: {
      src: "/product_4.png",
      alt: "blue mug",
    },
  },
];

export default function Home() {
  return (
    <section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
      <ProductList products={products} />
    </section>
  );
}
