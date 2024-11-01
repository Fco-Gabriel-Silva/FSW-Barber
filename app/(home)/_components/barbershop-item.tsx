import { Badge } from "@/_components/ui/badge";
import { Button } from "@/_components/ui/button";
import { Card, CardContent } from "@/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopItemsProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemsProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="px-1 pb-0">
        <div className="relative w-full h-[159px]">
          <Badge className="flex items-center justify-center absolute top-3 letf-3 z-50">
            <StarIcon size={12} />
            <span>5,0</span>
          </Badge>
          <Image
            alt={barbershop.name}
            src={barbershop.imageUrl}
            style={{
              objectFit: "cover",
            }}
            fill
            height={0}
            width={0}
            sizes="100w"
            className="h[159px] w-full rounded-2xl"
          />
        </div>

        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button className="w-full mt-3" variant="secondary">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
