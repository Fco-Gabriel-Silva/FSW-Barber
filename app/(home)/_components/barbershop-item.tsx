"use client";

import { Badge } from "@/_components/ui/badge";
import { Button } from "@/_components/ui/button";
import { Card, CardContent } from "@/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopItemsProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemsProps) => {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push(`/barbershops/${barbershop.id}`);
  };
  return (
    <Card className="min-w-full max-w-full rounded-2xl">
      <CardContent className="px-1 pb-0 pt-1">
        <div className="relative w-full h-[159px]">
          <div className="absolute top-2 left-2 z-50">
            <Badge
              variant="secondary"
              className="opacity-90 flex gap-1 items-center justify-center absolute top-3 letf-3"
            >
              <StarIcon size={12} className="fill-primary text-primary" />
              <span className="text-xs">5,0</span>
            </Badge>
          </div>
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
          <Button
            className="w-full mt-3"
            variant="secondary"
            onClick={handleBookingClick}
          >
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
