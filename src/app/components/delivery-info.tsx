import { Clock, DollarSign, MapPin } from "lucide-react";

interface DeliveryInfoProps {
  restaurant: {
    deliveryPrice: number;
    deliveryTime: number;
    distance: number;
  };
}

const DeliveryInfo = ({ restaurant }: DeliveryInfoProps) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-primary" />
        <span className="text-xs text-muted-foreground">
          {restaurant.deliveryTime} min
        </span>
      </div>

      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-primary" />
        <span className="text-xs text-muted-foreground">
          {restaurant.distance.toFixed(1)} km
        </span>
      </div>

      <div className="flex items-center gap-2">
        <DollarSign className="h-4 w-4 text-primary" />
        <span className="text-xs text-muted-foreground">
          {restaurant.deliveryPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </div>
  );
};

export default DeliveryInfo;