import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeatReservationService {
  seats = [];

  constructor() {
    for (let row = 1; row <= 12; row++) {
      const numSeats = row < 12 ? 7 : 3;
      for (let seat = 1; seat <= numSeats; seat++) {
        this.seats.push({
          seatId: `R${row}S${seat}`,
          rowNumber: row,
          available: true,
        });
      }
    }
  }

  getSeats() {
    return this.seats;
  }

  bookSeats(requestedSeats: number): string[] {
    if (requestedSeats < 1 || requestedSeats > 7) {
      return [];
    }

    // Try to book seats in one row
    for (let row = 1; row <= 12; row++) {
      const rowSeats = this.seats.filter(
        (seat) => seat.rowNumber === row && seat.available
      );
      if (rowSeats.length >= requestedSeats) {
        rowSeats
          .slice(0, requestedSeats)
          .forEach((seat) => (seat.available = false));
        return rowSeats.slice(0, requestedSeats).map((seat) => seat.seatId);
      }
    }

    // Book nearest available seats
    const availableSeats = this.seats.filter((seat) => seat.available);
    if (availableSeats.length >= requestedSeats) {
      availableSeats
        .slice(0, requestedSeats)
        .forEach((seat) => (seat.available = false));
      return availableSeats.slice(0, requestedSeats).map((seat) => seat.seatId);
    }

    return [];
  }
}
