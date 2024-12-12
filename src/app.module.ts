import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    SeatReservationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
