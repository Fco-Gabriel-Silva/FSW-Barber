"use server";

import { db } from "@/_lib/prisma";
import { revalidatePath } from "next/cache";

export const cancelBookings = async (bookingId: string) => {
  await db.booking.delete({
    where: {
      id: bookingId,
    },
  });

  revalidatePath("/");
  revalidatePath("/bookings");
};
