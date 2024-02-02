import { Component } from '@angular/core';
import {
  faArrowRight,
  faMagnifyingGlass,
  faSliders,
  faArrowDownLong,
  faArrowUpLong,
} from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faArrowRight = faArrowRight;
  faPenToSquare = faPenToSquare;
  faMagnifyingGlass = faMagnifyingGlass;
  faSliders = faSliders;
  faArrowDownLong = faArrowDownLong;
  faArrowUpLong = faArrowUpLong;
  value: any;
  checked: any = true;
}
