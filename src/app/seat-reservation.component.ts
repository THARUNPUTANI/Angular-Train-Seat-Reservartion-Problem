import { Component } from '@angular/core';
import { SeatReservationService } from '../seat-reservation.service';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css']
})
export class SeatReservationComponent {
  seats = [];
  message = '';

  constructor(private seatService: SeatReservationService) {
    this.seats = this.seatService.getSeats();
  }

  bookSeats(requestedSeats: number) {
    const bookedSeats = this.seatService.bookSeats(requestedSeats);
    this.message = bookedSeats.length > 0
      ? `Seats booked: ${bookedSeats.join(', ')}`
      : 'Not enough seats available.';
  }
}
