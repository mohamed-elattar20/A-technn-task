import { Component } from '@angular/core';
import { faDownload, faTicket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  faDownload = faDownload;
  faTicket = faTicket;
  customers: {
    id: number;
    name: string;
    number: string;
    ticketnumber: string;
    ticketprice: number;
    cinema: string;
    NumberOfpersons: number;
    timesForbuy: number;
    ticket: string;
    image: string;
  }[];

  constructor() {
    this.customers = [
      {
        id: 1000,
        name: 'Mohamed. kh',
        number: '01259364574',
        ticketnumber: 'C-105',
        ticketprice: 180,
        cinema: 'سينما بلازا,مول مصر',
        NumberOfpersons: 1,
        timesForbuy: 2,
        ticket: 'تيكت سينما فيلم ',
        image:
          'https://tse4.mm.bing.net/th?id=OIP.NvJzZ9pOoRDd0CJB86QDOQHaHa&pid=Api&P=0&h=220',
      },
      {
        id: 1000,
        name: 'Ahmed yasser',
        number: '0125935447',
        ticketnumber: 'C-104',
        ticketprice: 150,
        cinema: 'سينما بلازا,مول مصر',
        NumberOfpersons: 5,
        timesForbuy: 2,
        ticket: 'تيكت سينما فيلم ',
        image:
          'https://tse4.mm.bing.net/th?id=OIP.NvJzZ9pOoRDd0CJB86QDOQHaHa&pid=Api&P=0&h=220',
      },
      {
        id: 1000,
        name: 'James mickel',
        number: '01154787895',
        ticketnumber: 'C-101',
        ticketprice: 300,
        cinema: 'سينما بلازا,مول مصر',
        NumberOfpersons: 4,
        timesForbuy: 2,
        ticket: 'تيكت سينما فيلم ',
        image:
          'https://tse4.mm.bing.net/th?id=OIP.NvJzZ9pOoRDd0CJB86QDOQHaHa&pid=Api&P=0&h=220',
      },
      {
        id: 1000,
        name: 'sara salah',
        number: '010097564899',
        ticketnumber: 'C-102',
        ticketprice: 250,
        cinema: 'سينما بلازا,مول مصر',
        NumberOfpersons: 3,
        timesForbuy: 2,
        ticket: 'تيكت سينما فيلم ',
        image:
          'https://tse4.mm.bing.net/th?id=OIP.NvJzZ9pOoRDd0CJB86QDOQHaHa&pid=Api&P=0&h=220',
      },
      {
        id: 1000,
        name: 'James Butt',
        number: '01091208794',
        ticketnumber: 'C-103',
        ticketprice: 190,
        cinema: 'سينما بلازا,مول مصر',
        NumberOfpersons: 2,
        timesForbuy: 2,
        ticket: 'تيكت سينما فيلم ',
        image:
          'https://tse4.mm.bing.net/th?id=OIP.NvJzZ9pOoRDd0CJB86QDOQHaHa&pid=Api&P=0&h=220',
      },
    ];
  }
}
