'use server'

import { clerkClient } from '@clerk/nextjs/server'

export async function setBetaStatus(userId: string, status: boolean) {
  await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: {
      isAdmin: status,
    },
  })
}


import db from "./db";
import { revalidatePath } from 'next/cache';

export const fetchBooking  = async () => {

  const date = new Date();
  date.setMonth(date.getMonth() - 6);


  const bookings = await db.booking.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phoneNumber: true,
    },
  })

  console.log(bookings);
  
return bookings
};




export async function deleteBookingAction(prevState: { bookingId: string }) {
  const { bookingId } = prevState;


  try {
    const result = await db.booking.delete({
      where: {
        id: bookingId,
      
      },
    });

    revalidatePath('/admin');
    return { message: 'Booking deleted successfully' };
  } catch (error) {
    console.error("Error deleting booking:", error);  
    return { message: 'Failed to delete booking',  };
  }
}