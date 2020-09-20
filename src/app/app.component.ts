import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
@Component({
  templateUrl: './Payment.html',
  styleUrls: [ './app.component.css' ]
})
export class PaymentComponent  {
  name = 'Angular ' + VERSION.major;
}
