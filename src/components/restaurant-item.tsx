import { Restaurant } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface RestaurantItemProps {
  restaurant: Restaurant;
  className?: string;
}

const RestaurantItem = ({ restaurant, className }: RestaurantItemProps) => {
  return (
    <Link href={`/${restaurant.slug}`}>
      <div className={`flex items-center gap-4 rounded-lg bg-white p-3 shadow-md hover:shadow-lg transition-shadow ${className}`}>
        <div className="relative h-[100px] w-[100px] min-w-[100px]">
          <Image
            src={restaurant.avatarImageUrl}
            alt={restaurant.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="font-bold">{restaurant.name}</h2>
          <p className="text-sm text-gray-500">{restaurant.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantItem;