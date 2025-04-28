import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  restaurant: {
    name: string;
  };
}

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex gap-4 overflow-x-auto px-5 pb-4 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <Link
          href={`/menu/${product.id}`}
          key={product.id}
          className="min-w-[280px] max-w-[280px] rounded-2xl bg-white p-2 transition-transform hover:scale-[1.02]"
        >
          <div className="relative h-[150px] w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <div className="space-y-1 p-2">
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-primary">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <span className="text-xs text-muted-foreground">
                {product.restaurant.name}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;